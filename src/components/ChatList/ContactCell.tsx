import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { stringDate } from '@utils/functions'
import { ChatPreview, VNavigationProps } from '@AppTypes'
import { useNavigation } from '@react-navigation/native'
import useChatsStore from '@stores/useChatsStore'
interface ContactCellProps extends ChatPreview {
	
}
const ContactCell = (props:ContactCellProps) => {
	const navigation = useNavigation<VNavigationProps>()
	const chatsStore = useChatsStore(state=>state.setCurrentChat)
	const goToChat = () => {
		navigation.navigate("Chat")
		chatsStore(props)
	}
	return (
		<Pressable onPress={goToChat}
		style={({pressed})=>[styles.container,{backgroundColor:pressed ? "rgba(62, 179, 169, 0.7)":"white"}]} >
			<View style={styles.photoContainer} >
				<Image source={{uri:props.photoProfile? props.photoProfile.url: "https://placekitten.com/g/200/200"}} style={styles.photo} />
			</View>
			<View style={styles.data} >
				<Text style={styles.nameText} numberOfLines={1}  ellipsizeMode="tail" >{props.name}</Text>
				<Text style={styles.messageText} numberOfLines={2}  ellipsizeMode="tail" >{props.message}</Text>
			</View>
			<View style={styles.extras} >
				<Text style={styles.dateText} >{stringDate(props.messageLastDate,"HH:mm")}</Text>
			</View>
		</Pressable>
	)
}

export default ContactCell

const styles = StyleSheet.create({
	container:{
		flexDirection:"row",
		borderRadius:16,
		paddingHorizontal:16,
		paddingVertical:12,
		borderWidth:1,
		borderColor:"#566573",
		backgroundColor:"white"
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
	data:{
		flex:1,
		marginLeft:16,
		marginRight:8,
		gap:2
	},
	nameText:{
		fontSize:16,
		fontWeight:"600"
	},
	messageText:{
		flex:1,
	},
	dateText:{
		fontSize:10
	},
	extras:{
	},
})