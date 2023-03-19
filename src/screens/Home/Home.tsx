import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { RootStackScreenProps } from '@AppTypes'
import { ChatList } from '@components'
import { useNavigation } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Home = ({navigation}:RootStackScreenProps<"Home">) => {
	const insets = useSafeAreaInsets()
	return (
		<View  >
			<View style={[styles.headerContainer,{paddingTop:insets.top + 8}]} >
				<Text style={styles.headerTitle} >Chats</Text>
			</View>
			<ChatList />
		</View>
	)
}

export default Home

const styles = StyleSheet.create({
	headerContainer:{
		paddingHorizontal:16,
		backgroundColor:"white",
		paddingBottom:16
	},
	headerTitle:{
		fontSize:32,
		fontWeight:"800"
	}
})