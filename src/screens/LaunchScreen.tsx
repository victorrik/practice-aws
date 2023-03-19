import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { RootStackScreenProps } from '@AppTypes'
import { Auth } from 'aws-amplify';
const LaunchScreen = ({navigation}:RootStackScreenProps<"LaunchScreen">) => {
	useEffect(()=>{
		checkUserPersistence()
	},[])
	const checkUserPersistence = async() => { 
		try {
			 
			const result = await Auth.currentAuthenticatedUser()
			console.log("currentSession->result->",result)
			navigation.replace("Home")
		} catch (error) {
			console.log("currentSession->error->",error)
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