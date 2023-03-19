import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Button, SimpleHeaderScreens } from '@components'
import { RootStackScreenProps } from '@AppTypes'
import { Auth } from 'aws-amplify';

const SignUp = ({navigation}:RootStackScreenProps<"SignUp">) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [showPassword, setShowPassword] = useState(false);

	const startSignUp = async() => { 
		try {
			const { user } = await Auth.signUp({
				username:email,
				password,
				autoSignIn:{
					enabled:true
				}
			});
			console.log(user);
	} catch (error) {
			console.log('error signing up:', error);
	}
	}
	const goToLogin = () => { 
		navigation.replace("Login")
	}
	return (
		<View style={{flex:1}} >
			<SimpleHeaderScreens title='SignUp' />
			<View style={styles.formContainer} >
				<View>
					<Text>Email</Text>
					<TextInput 
						style={styles.input}
						placeholder='Email' 
						value={email}
						onChangeText={value=>setEmail(value)}
						inputMode="email"
						autoCapitalize="none"
						/>
				</View>
				<View>
					<Text>New password</Text>
					<TextInput 
						style={styles.input}
						placeholder='New password' 
						value={password}
						onChangeText={value=>setPassword(value)}
						autoCapitalize="none"
						secureTextEntry={showPassword}
						/>
						<Text style={{marginTop:10}} onPress={()=>setShowPassword(b=>!b)} >Show pass</Text>
				</View>
				<Button title='Sign Up' onPress={startSignUp} />
				<Button title='User? go to Login' type="link" onPress={goToLogin} />
			</View>
		</View>
	)
}

export default SignUp

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