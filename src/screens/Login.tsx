import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Button, SimpleHeaderScreens } from '@components'
import { RootStackScreenProps } from '@AppTypes'
import { Auth } from 'aws-amplify';


const Login = ({navigation}:RootStackScreenProps<"Login">) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const startLogin = async() => { 
		try {
			const user = await Auth.signIn(email, password);
			console.log("user",user)
			navigation.replace("Home")
	} catch (error) {
			console.log('error signing in', error);
	}
	}
	const goToSignUp = () => { 
		navigation.replace("SignUp")
	}
	return (
		<View style={{flex:1}} >
			<SimpleHeaderScreens title='Login' />
			<View style={styles.formContainer} >
				<View>
					<Text>Email</Text>
					<TextInput 
						style={styles.input}
						placeholder='Email' 
						value={email}
						onChangeText={value=>setEmail(value)}
					/>
				</View>
				<View>
					<Text>Password</Text>
					<TextInput 
						style={styles.input}
						placeholder='Password' 
						value={password}
						onChangeText={value=>setPassword(value)}
					/>
				</View>
				<Button title='Login' onPress={startLogin} />
				<Button title='New? go to sign Up' type="link" onPress={goToSignUp} />
			</View>
		</View>
	)
}

export default Login

const styles = StyleSheet.create({
	formContainer:{
		flex:1,
		padding:20,
		gap:16
	},
	input:{
		borderRadius:10,
		borderWidth:1,
		borderColor:"#566573",
		paddingHorizontal:16,
		paddingVertical:8

	},
})