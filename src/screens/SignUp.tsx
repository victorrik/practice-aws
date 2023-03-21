import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Button, SimpleHeaderScreens, VerifyCode } from '@components'
import { RootStackScreenProps } from '@AppTypes'
import { Auth } from 'aws-amplify';
import { ButtonRef, VerifyCodeRef } from '@ComponentTypes';
import { checkEspecial, checkInput } from '@utils/inputValid';
import useUserStore from '@stores/useUserStore';

const SignUp = ({navigation}:RootStackScreenProps<"SignUp">) => {
	const btnRef = useRef<ButtonRef>(null)
	const verifyCodeRef = useRef<VerifyCodeRef>(null)
	const userStore = useUserStore()
	const [email, setEmail] = useState("")
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [showPassword, setShowPassword] = useState(true);

	const startSignUp = async() => { 
		 
		if (checkInput(username)) {
			Alert.alert("Error on input","Username cannot be empty")
			return
		}
		if (checkEspecial(username)) {
			const characters = '.#%^*,?!";/\\`’'
			Alert.alert("Error on input",`Username characters not valid ${characters}'`)
			return
		}
		if (checkInput(email)) {
			Alert.alert("Error on input","Email cannot be empty")
			return
		}
		if (checkInput(password)) {
			Alert.alert("Error on input","Password cannot be empty")
			return
		}
		if (password.length < 6) {
			Alert.alert("Error on password","Password must be 6 characters")
			return
		}
		
		btnRef.current.setLoading(true)
		try {
			const resultSignUp = await Auth.signUp({
				username:email,
				password,
				autoSignIn:{
					enabled:true
				}
			});
			console.log(resultSignUp.userSub);
			const resultCreate = await userStore.createUser(resultSignUp.userSub,username)
			console.log('resultCreate',resultCreate)
			verifyCodeRef.current.showModal(true)
		} catch (error) {
			if (error.code === "InvalidPasswordException") {
				Alert.alert("Error on password",error.message)
			}
			//console.log('error signUp', error.code);
			//console.log('error signUp', error);
		}
		
		btnRef.current.setLoading(false)
	}
	const goToLogin = () => { 
		navigation.replace("Login")
	}

	const handleActionCode = () => { 
		navigation.replace("Home")
	}
	return (
		<View style={{flex:1}} >
			<VerifyCode ref={verifyCodeRef} email={email} handleAction={handleActionCode} />
			<SimpleHeaderScreens title='SignUp' />
			<View style={styles.formContainer} >
				<View>
					<Text>Username</Text>
					<TextInput 
						style={styles.input}
						placeholder='Username' 
						value={username}
						onChangeText={value=>setUsername(value)}
						/>
				</View>
				<View>
					<Text>Email</Text>
					<TextInput 
						style={styles.input}
						placeholder='Email' 
						value={email}
						onChangeText={value=>setEmail(value)}
						inputMode="email"
						autoCapitalize="none"
						textContentType="emailAddress"
						spellCheck
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
				<Button ref={btnRef} title='Sign Up' onPress={startSignUp} />
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