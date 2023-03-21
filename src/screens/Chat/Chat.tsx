import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useChatsStore from '@stores/useChatsStore'
import { SOME_COLORS } from '@utils/constants'
import { rndInterger } from '@utils/functions'
import { Icons } from '@components'
import { Pressable } from 'react-native'

const Chat = () => {
	const insets = useSafeAreaInsets()
	const chatsStore = useChatsStore()
	const bgColor = useMemo(() => SOME_COLORS[rndInterger(0,SOME_COLORS.length - 1)], [])
	const currentInfo = chatsStore.currentChat
	const photoProfile = currentInfo.user.photoProfile
	return (
		<View  >
			<View style={[styles.headerContainer,{paddingTop:insets.top + 8}]} >
				<View style={styles.arrowContainer} >
					<Pressable style={({pressed})=>[styles.btnBack,{backgroundColor:pressed ? "rgba(213, 216, 220, 0.4)" : "white" }]} >
						<Icons name="arrowLeft" size={20} />
					</Pressable>
				</View>
				<View style={styles.photoContainer} >
					<Image source={{uri:photoProfile ? photoProfile.url: "https://placekitten.com/g/200/200"}} style={[styles.photo,{backgroundColor:bgColor}]} />
				</View>
				<View style={styles.dataContainer} >
					<Text style={styles.headerTitle} numberOfLines={1} ellipsizeMode="tail" >{currentInfo.user.name}</Text>
					<Text style={styles.statusText} >Online</Text>
				</View>
				<View style={styles.optionsContainer} >
					<Pressable style={({pressed})=>[styles.btnOptions,{backgroundColor:pressed ? "rgba(213, 216, 220, 0.4)" : "white" }]} >
						<Icons name="threedotsvertical" size={20} />
					</Pressable>
				</View>
				
			</View>
			<Text>Chat</Text>
		</View>
	)
}

export default Chat 

const styles = StyleSheet.create({
	headerContainer:{
		paddingHorizontal:16,
		backgroundColor:"white",
		paddingBottom:8,
		flexDirection:"row"
	},
	arrowContainer:{
		justifyContent:"center"
	},
	btnBack:{
		width:36,
		height:36,
		justifyContent:"center",
		alignItems:"center",
		borderRadius:100
	},
	photoContainer:{
		justifyContent:"center",
		paddingLeft:4,
		paddingRight:8
	},
	photo:{
		width:40,
		height:40,
		borderRadius:100,
		borderWidth:1,
		borderColor:"#566573"
	},
	dataContainer:{
		flex:1,
		gap:4
	},
	optionsContainer:{
		justifyContent:"center"
	},
	btnOptions:{
		width:40,
		height:40,
		justifyContent:"center",
		alignItems:"center",
		borderRadius:100
	},
	headerTitle:{
		fontSize:16,
		fontWeight:"600"
	},
	statusText:{
		fontSize:12
	}
})