import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { RootStackScreenProps } from '@AppTypes'
import { ChatList, Icons } from '@components'
import { Auth } from 'aws-amplify';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useUserStore from '@stores/useUserStore';
import FindPeople from './FindPeople';

const Home = ({navigation}:RootStackScreenProps<"Home">) => {
	const insets = useSafeAreaInsets()
	const userStore = useUserStore()
	
	
	const logOutOfHere = async() => { 
		try {
			await Auth.signOut();
			navigation.replace("Login")
			userStore.clear()
	} catch (error) {
			console.log('error signing out: ', error);
	}
	}
	return (
		<View  >
			<View style={[styles.headerContainer,{paddingTop:insets.top + 8}]} >
				<Text style={styles.headerTitle} >Chats</Text>
				<View style={styles.rowOptions} >
					<FindPeople />
					<TouchableOpacity onPress={()=>Alert.alert("Logout","logout?",[
						{
							text:"Maybe not"
						},
						{
						text:"Sure",
						onPress:logOutOfHere,
						style:"destructive"
					}])} >
						<Icons name="boxarrowright" />
					</TouchableOpacity>
				</View>
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
		paddingBottom:16,
		flexDirection:"row",
		justifyContent:"space-between"
	},
	headerTitle:{
		fontSize:32,
		fontWeight:"800"
	},
	rowOptions:{
		flexDirection:"row",
		alignItems:"center",
		gap:16
	}
})