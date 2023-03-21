import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { Message as MessageType } from '@AppTypes'
import dayjs from 'dayjs'
import useUserStore from '@stores/useUserStore'
interface MessageProps extends MessageType {

}
const Message = (props:MessageProps) => {
	const userStore = useUserStore(state=>state.user)
	const myMessage = useMemo(() => userStore.id === props.userID, [])
	return (
		<View style={[styles.container,myMessage? styles.containerMy : styles.containerNotMy]} >
			<Text style={[styles.textMessage,{color:myMessage?"white":"black"}]} >{props.message}</Text>
			<Text style={[styles.textDate,{color:myMessage?"white":"black"}]} >{dayjs(props.createdAt).format("HH:mm")}</Text>
		</View>
	)
}

export default Message

const styles = StyleSheet.create({
	container:{
		maxWidth:"80%",
		borderWidth: 1,
		borderColor: "#566573",
		borderRadius:30,
		paddingHorizontal:18,
		paddingVertical:14,
		gap:8
	},
	containerMy:{
		borderBottomEndRadius:0,
		alignSelf:"flex-end",
		backgroundColor:"#59BD99",
		alignItems:"flex-end",
		
	},
	containerNotMy:{
		alignSelf:"flex-start",
		backgroundColor:"white",
		borderTopStartRadius:0
	},
	textMessage:{

	},
	textDate:{
		fontSize:10,
		fontWeight:"700"
	}
})