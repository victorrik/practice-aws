import { ActivityIndicator, FlatList, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Icons } from '@components'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { User, VNavigationProps } from '@AppTypes'

import { API, graphqlOperation } from 'aws-amplify'
import { GraphQLQuery } from '@aws-amplify/api'

import { removeSpecialCharacters } from '@utils/functions'
import { createChatRoom, createUserChatRoom } from '@VGraphql/mutations'
import { CreateChatRoomMutation, CreateUserChatRoomMutation } from 'src/API'
import useUserStore from '@stores/useUserStore'
import { useNavigation } from '@react-navigation/native'
import useChatsStore from '@stores/useChatsStore'

type ListUsersQuery = {
  listUsers?:  { 
    items:  Array<Partial<User>>, 
  } | null,
};
interface PeopleCellProps extends Partial<User>{
	startConversation:(id:string)=>void
}

const PeopleCell = (props:PeopleCellProps) => {
	
	return (
		<View style={stylesPeopleCell.container} >
			<View style={stylesPeopleCell.photoContainer} >
				<Image source={{uri:props.photoProfile? props.photoProfile.url: "https://placekitten.com/g/200/200"}} style={stylesPeopleCell.photo} />
			</View>
			<Text style={stylesPeopleCell.nameText}   >{props.name}</Text>
			<TouchableOpacity style={stylesPeopleCell.btnSend}  onPress={()=>props.startConversation(props.id)}>
				<Icons name='send' color='white'  />
			</TouchableOpacity>
		</View>
	)
}


const FindPeople = () => {
	const insets = useSafeAreaInsets()
	const userStore = useUserStore()
	const chatsStore = useChatsStore()
	const navigation = useNavigation<VNavigationProps>()
	const [showFinder, setShowFinder] = useState(false);
	const [nameToFind, setNameToFind] = useState("");
	const [peopleList, setPeopleList] = useState<Partial<User>[]>([])
	const [loading, setLoading] = useState(false);
	const [startingConversarion, setStartingConversarion] = useState(false)
	const closeSearch = () => { 
		resetValues()
	}
	const resetValues = () => { 
		setShowFinder(false)
		setNameToFind("")
		setPeopleList([])
		setLoading(false)
		setStartingConversarion(false)
	}
	const startConversation = async (id:string) => { 
		const auxList = peopleList;
		setPeopleList([])
		setStartingConversarion(true)
		const chatExist = chatsStore.chatList.find((obj)=>obj.user.id === id)
		if (chatExist !== undefined) {
			resetValues() 
			chatsStore.setCurrentChat(chatExist)
			navigation.navigate("Chat")
			return 
		}
		let chatRoomData:any = {}

		try {
			// Create a new Chatroom
			const resultNewChatRoom = await API.graphql<GraphQLQuery<CreateChatRoomMutation>>(
				graphqlOperation(createChatRoom, { input: {} })
			);
			chatRoomData = resultNewChatRoom.data.createChatRoom
		} catch (error) {
			console.log('resultNewChatRoom->error',error)
			return 
		} 
		try {

    // Add the clicked user to the ChatRoom
    await API.graphql<GraphQLQuery<CreateUserChatRoomMutation>>(
      graphqlOperation(createUserChatRoom, {
        input: { chatRoomId: chatRoomData.id, userId: id },
      })
    );

    // Add the auth user to the ChatRoom
		await API.graphql<GraphQLQuery<CreateUserChatRoomMutation>>(
      graphqlOperation(createUserChatRoom, {
        input: { chatRoomId: chatRoomData.id, userId: userStore.user.id },
      })
    );
		resetValues()
    // navigate to the newly created ChatRoom
		const userFind = peopleList.find((obj)=>obj.id === id)
			
		chatsStore.setCurrentChat({
			id: chatRoomData.id,
			user: {
				id,
				name:userFind.name,
				photoProfile:userFind.photoProfile,
				status:userFind.status,
			},
			message: '',
			messageLastDate: 0,
			messageType: 'text'
		})
    navigation.navigate("Chat");
	 } catch (error) {
		console.log("error--->",error)
		setPeopleList(auxList)
		setStartingConversarion(false)
	 }
	 
	}
	const startSearch = async() => { 
		setPeopleList([])
		setLoading(true)
		const name = removeSpecialCharacters(nameToFind.toLocaleLowerCase()); 
		try {
			const result = await API.graphql<GraphQLQuery<ListUsersQuery>>({
				query:`
				query MyQuery {
					listUsers(filter: {nameToSearch: {contains: "${name}"}, not: {id: {eq: "${userStore.user.id}"}}}, limit: 50) {
						items {
							name
							id
							nameToSearch
							photoProfile {
								filename
								url
							}
						}
					}
				}`
			}) 
			setPeopleList(result.data.listUsers.items)
		} catch (error) {
			console.log("Error-->",error)
		}
		
		setLoading(false)
	}
	return (
		<>
			<Modal
        animationType="fade"
        transparent={true}
        visible={showFinder}
      >
				<View style={[styles.modalContainer,{paddingTop:insets.top,paddingBottom:insets.bottom + 16}]} >
					<View style={styles.cardContainer} >
						<View style={styles.cardHeader} >
							<Text style={styles.title} >
								Search
							</Text>
							<TouchableOpacity style={styles.closeContainer} onPress={closeSearch} >
								<View style={styles.closeInner} >
									<Icons name="xlg" size={10} color='black' />
								</View>
							</TouchableOpacity>
						</View>
						<View style={styles.containerList} >
							<View  style={styles.inputContainer} >
								<TextInput 
									style={styles.input}
									placeholder='Username to find'
									value={nameToFind}
									placeholderTextColor="#566573"
									onChangeText={value=>setNameToFind(value)}
								/>
								<TouchableOpacity style={styles.btnSearch} onPress={startSearch} >
									<Icons name="search" size={14} color="black" />
								</TouchableOpacity>
							</View>
							<FlatList 
								ItemSeparatorComponent={()=><View style={{height:10}} />}
								ListEmptyComponent={
									loading ?
									<View style={styles.emptyContainer} >
										<ActivityIndicator color="#566573"  size="large" />
										<Text style={styles.lookingText} >Looking if exist that person 🧐</Text>
									</View>
									: startingConversarion ? 
									<View style={styles.emptyContainer} >
										<ActivityIndicator color="#566573"  size="large" />
										<Text style={styles.lookingText} >Creating an special room 🥸</Text>
									</View>:null
								}
								contentContainerStyle={styles.contentContainerList}
								data={peopleList}
								renderItem={({item})=><PeopleCell {...item} startConversation={startConversation} />}
								keyExtractor={(item)=>`${item.id}`}
							/>
						</View>
						
					</View>
				</View>
		</Modal>
			<TouchableOpacity onPress={()=>setShowFinder(true)} >
				<Icons name="personAdd" />
			</TouchableOpacity>
		</>
	)
}

export default FindPeople

const styles = StyleSheet.create({
	modalContainer:{
		flex:1,
		justifyContent:"flex-end",
		alignItems:"center",
		backgroundColor:"rgba(180,180,180,0.6)",
		padding:16
	},
	cardHeader:{
		flexDirection:"row",
		justifyContent:"space-between",
		alignItems:"center",
		padding:16
	},
	closeContainer:{
		borderRadius:100,
		justifyContent:"center",
		alignItems:"center",
		backgroundColor:"#FA5352",
		padding:8
	},
	closeInner:{
		borderRadius:100,
		justifyContent:"center",
		alignItems:"center",
		backgroundColor:"white",
		padding:4
	},
	title:{
		fontSize:28,
		fontWeight:"700"
	},
	cardContainer:{
		backgroundColor:"white",
		borderWidth:1,
		borderColor:"#566573",
		borderRadius:24,
		width:"100%",
		height:"75%"
	},
	containerList:{
		flex:1,
		backgroundColor:"#F2F5F7",
		borderBottomRightRadius:24,
		borderBottomLeftRadius:24,
		overflow:"hidden"
	},
	inputContainer:{
		padding:16,
		flexDirection:"row",
		alignItems:"center",
		gap:16
	},
	btnSearch:{
		borderRadius:100,
		backgroundColor:"#F28693",
		padding:10
	},
	contentContainerList:{
		padding:16,
	},
	input:{
		borderRadius:10,
		borderWidth:1,
		borderColor:"#566573",
		paddingHorizontal:16,
		paddingVertical:8,
		backgroundColor:"white",
		flex:1
	},
	emptyContainer:{
		justifyContent:"center",
		alignItems:"center",
		gap:20
	},
	lookingText:{
		fontSize:18,
		fontWeight:"700"
	}
})


const stylesPeopleCell = StyleSheet.create({
	container:{
		flexDirection:"row",
		borderRadius:16,
		paddingHorizontal:16,
		paddingVertical:12,
		borderWidth:1,
		borderColor:"#566573",
		backgroundColor:"white",
		alignItems:"center",
		gap:16
	},
	photoContainer:{
		justifyContent:"center"
	},
	photo:{
		width:55,
		height:55,
		borderRadius:100,
		borderWidth:1,
		borderColor:"#566573",
	}, 
	nameText:{
		fontSize:20,
		flex:1,
		fontWeight:"600",
		verticalAlign:"middle"
	}, 
	btnSend:{
		borderRadius:100,
		width:45,
		height:45,
		justifyContent:"center",
		alignItems:"center",
		paddingTop:5,
		paddingRight:5,
		backgroundColor:"#867CF8"
	}
})