import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import useChatsStore from '@stores/useChatsStore'
import ContactCell from './ContactCell'
import { rndInterger } from '@utils/functions'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Button from '../Button'
import { SCREEN_HEIGHT } from '@utils/constants'
import useUserStore from '@stores/useUserStore'


const ChatList = () => {
	const chatsStore  = useChatsStore()
	const userStore = useUserStore()
	const insets = useSafeAreaInsets()
	useEffect(()=>{
		const getTheChats = async() => { 
			const result = await chatsStore.getChatList(userStore.user.id)
			console.log('getTheChats',result) 
		 }
		 getTheChats()
	},[])
	
	return (
		<FlatList
			data={chatsStore.chatList}
			renderItem={({item})=><ContactCell {...item} />}
			ItemSeparatorComponent={()=><View style={{height:10}} />}
			ListEmptyComponent={
				chatsStore.loadingChats? 
				<View style={styles.emptyContainer} >
					<Text style={styles.emptyText} >Loading messages...</Text>
				</View>
				:
				<View style={styles.emptyContainer} >
					<Text style={styles.emptyText} >Start a new conversation</Text>
					<Button title='Iniciar' />
				</View>
			}
			contentContainerStyle={{
				paddingTop:16,
				paddingBottom:insets.bottom + 16,
				paddingHorizontal:16
			}}
			keyExtractor={item=>item.id}
		/>
	)
}

export default ChatList

const styles = StyleSheet.create({
	emptyContainer:{
		flex:1,
		justifyContent:"center",
		height:SCREEN_HEIGHT * 0.5,
		gap:16,
	},
	emptyText:{
		fontSize:24,
		fontWeight:"800",
		color:"#2C3E50",
		textAlign:"center"
	}
})