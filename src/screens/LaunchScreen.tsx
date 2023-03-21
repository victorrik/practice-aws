import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { RootStackScreenProps } from '@AppTypes'
import { Auth } from 'aws-amplify';
import useUserStore from '@stores/useUserStore';

const LaunchScreen = ({navigation}:RootStackScreenProps<"LaunchScreen">) => {
	const userStore = useUserStore()
	useEffect(()=>{
		checkUserPersistence()
	},[])
	const checkUserPersistence = async() => { 
		try {
			const result = await Auth.currentAuthenticatedUser()
			const resultGet = await userStore.getUser(result.attributes.sub)
			
			navigation.replace("Home")
		} catch (error) {
			console.log("currentAuthenticatedUser->error->",error)
			navigation.replace("Login")
		}
	}
	return (
		<View>
			
		</View>
	)
}

export default LaunchScreen

const styles = StyleSheet.create({})