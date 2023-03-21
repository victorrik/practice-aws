import { FlatList, Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useChatsStore from '@stores/useChatsStore'
import { SOME_COLORS } from '@utils/constants'
import { removeSpecialCharacters, rndInterger } from '@utils/functions'
import { Icons } from '@components'
import { Pressable } from 'react-native'
import { Message as MessageType, RootStackScreenProps } from '@AppTypes'
import Message from './Message'
import { API, graphqlOperation } from 'aws-amplify'
import { GraphQLQuery } from '@aws-amplify/api'
import { CreateMessageMutation, GetChatRoomQuery, UpdateChatRoomMutation } from 'src/API'
import { createMessage, updateChatRoom } from '@VGraphql/mutations'
import useUserStore from '@stores/useUserStore'
import { checkInput } from '@utils/inputValid'

import { getChatRoomMessages, simpleUpdateChatRoom } from '@utils/queries'

type GetChatRoomMessagesQuery = {
  getChatRoom: {
    ChatRoomMessages: {
      items:Array<MessageType>
    },
    updatedAt: string
  }
}
type GetChatRoomLastVersionQuery = {
    getChatRoom: {
      _version:number
    }
}

const HeaderView = (props: any) => {
	const chatsStore = useChatsStore(state => state.currentChat)
	const insets = useSafeAreaInsets()
	const bgColor = useMemo(() => SOME_COLORS[rndInterger(0, SOME_COLORS.length - 1)], [])

	const photoProfile = chatsStore.user.photoProfile
	return (
		<View style={[styles.headerContainer, { paddingTop: insets.top + 8 }]} >
			<View style={styles.arrowContainer} >
				<Pressable onPress={props.navigation.goBack} style={({ pressed }) => [styles.btnBack, { backgroundColor: pressed ? "rgba(213, 216, 220, 0.4)" : "white" }]} >
					<Icons name="arrowLeft" size={20} />
				</Pressable>
			</View>
			<View style={styles.photoContainer} >
				<Image source={{ uri: photoProfile ? photoProfile.url : "https://placekitten.com/g/200/200" }} style={[styles.photo, { backgroundColor: bgColor }]} />
			</View>
			<View style={styles.dataContainer} >
				<Text style={styles.headerTitle} numberOfLines={1} ellipsizeMode="tail" >{chatsStore.user.name}</Text>
				<Text style={styles.statusText} >Online</Text>
			</View>
			<View style={styles.optionsContainer} >
				<Pressable style={({ pressed }) => [styles.btnOptions, { backgroundColor: pressed ? "rgba(213, 216, 220, 0.4)" : "white" }]} >
					<Icons name="threedotsvertical" size={20} />
				</Pressable>
			</View>
		</View>
	)
}
const Chat = ({ navigation }: RootStackScreenProps<"Chat">) => {
	const insets = useSafeAreaInsets()
	const chatsStore = useChatsStore()
	const userStore = useUserStore(state => state.user)
	const currentInfo = chatsStore.currentChat

	const [newMessage, setNewMessage] = useState("")
	const [messages, setMessages] = useState<Array<MessageType>>([]);
	useEffect(() => {

		const getMessages = async () => {
			try {
				const resultMessages = await API.graphql<GraphQLQuery<GetChatRoomMessagesQuery>>(graphqlOperation(getChatRoomMessages, { id: currentInfo.id }))
				
				setMessages(resultMessages.data.getChatRoom.ChatRoomMessages.items)
			} catch (error) {

			}
		}
		getMessages()
		return () => {

		}
	}, [])

	const sendMessage = async () => {
		if (checkInput(newMessage)) {
			return
		}
		const newMessageBuild = {
			chatroomID: currentInfo.id, 
			message: newMessage, 
			messageToSearc: removeSpecialCharacters(newMessage.toLocaleLowerCase()) ,
			messageType: "text", 
			userID: userStore.id
		} 
		try {
			const result = await API.graphql<GraphQLQuery<CreateMessageMutation>>(graphqlOperation(createMessage,{input:newMessageBuild}))
			const lastVersion = await API.graphql<GraphQLQuery<GetChatRoomLastVersionQuery>>(graphqlOperation(`query GetLasVersionChatRoom($id: ID!) {
				getChatRoom(id: $id) {
					_version
				}
			}`,{id:currentInfo.id})) 
			const resultUpdateChatRoom = await API.graphql<GraphQLQuery<any>>(graphqlOperation(simpleUpdateChatRoom,{
					id:currentInfo.id,
					chatRoomLastMessageId:result.data.createMessage.id,
					_version:lastVersion.data.getChatRoom._version ,
			})) 
		} catch (error) {
			console.log("CreateMessageMutation->error",JSON.stringify(error))
		}


	}
	return (
		<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={{ flex: 1 }}
			keyboardVerticalOffset={-insets.bottom + 16}
		>
			<View style={{ flex: 1, paddingBottom: insets.bottom + (Platform.OS === "ios" ? 0 : 8) }} >
				<HeaderView navigation={navigation} />
				<FlatList
					data={messages}
					contentContainerStyle={{ padding:16 }}
					renderItem={({ item }) => <Message {...item} />}
					ItemSeparatorComponent={()=><View style={{height:20}} />}
					keyExtractor={(item) => item.id}
				/>
				<View style={styles.inputContainer} >
					<TextInput
						style={styles.inputText}
						value={newMessage}
						onChangeText={setNewMessage}
						placeholder='Text a message'
						placeholderTextColor="black"
						multiline
						textAlignVertical='top'
					/>
					<TouchableHighlight style={styles.btnSend} onPress={sendMessage} underlayColor="#F2F5F7" >
						<Icons name="send" color='#FCAE32' size={20} />
					</TouchableHighlight>
				</View>
			</View>
		</KeyboardAvoidingView>
	)
}

export default Chat

const styles = StyleSheet.create({
	headerContainer: {
		paddingHorizontal: 16,
		backgroundColor: "white",
		paddingBottom: 8,
		flexDirection: "row"
	},
	arrowContainer: {
		justifyContent: "center"
	},
	btnBack: {
		width: 36,
		height: 36,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 100
	},
	photoContainer: {
		justifyContent: "center",
		paddingLeft: 4,
		paddingRight: 8
	},
	photo: {
		width: 40,
		height: 40,
		borderRadius: 100,
		borderWidth: 1,
		borderColor: "#566573"
	},
	dataContainer: {
		flex: 1,
		gap: 4
	},
	optionsContainer: {
		justifyContent: "center"
	},
	btnOptions: {
		width: 40,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 100
	},
	headerTitle: {
		fontSize: 16,
		fontWeight: "600"
	},
	statusText: {
		fontSize: 12
	},
	inputContainer: {
		borderRadius: 20,
		borderWidth: 1,
		borderColor: "#566573",
		paddingHorizontal: 16,
		paddingVertical: 8,
		backgroundColor: "white",
		marginHorizontal: 16,
		flexDirection: "row",
		alignItems: "center",
		gap: 8
	},
	inputText: {
		paddingTop: 0,
		paddingRight: 0,
		paddingLeft: 0,
		paddingBottom: 0,
		minHeight: 50,
		maxHeight: 150,
		textAlignVertical: "top",
		flex: 1
	},
	btnSend: {
		borderRadius: 100,
		width: 45,
		height: 45,
		paddingTop: 2.5,
		paddingRight: 2.5,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderColor: "#566573",

	}
})