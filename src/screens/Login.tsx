import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Button, SimpleHeaderScreens } from '@components'
import { RootStackScreenProps } from '@AppTypes'
import { Auth } from 'aws-amplify'; 
import { checkInput } from '@utils/inputValid';
import { ButtonRef } from '@ComponentTypes';
import useUserStore from '@stores/useUserStore';

const Login = ({navigation}:RootStackScreenProps<"Login">) => {
	const btnRef = useRef<ButtonRef>(null)
	const userStore = useUserStore()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("") 
	const [showPassword, setShowPassword] = useState(true);
	const startLogin = async() => { 

		if (checkInput(email)) {
			Alert.alert("Error on input","Email cannot be empty")
			return
		}
		if (checkInput(password)) {
			Alert.alert("Error on input","Password cannot be empty")
			return
		}
		btnRef.current?.setLoading(true)
		try {
			const user = await Auth.signIn(email, password);
			const resultGet = await userStore.getUser(user.attributes.sub)
			if (resultGet) {
				navigation.replace("Home")	
			}
	} catch (error) {
		
			console.log('error signing', error);
			console.log('error signing string', error.string);
			console.log('error signing code', error.code);
	}
		btnRef.current?.setLoading(false)
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
						inputMode="email"
						autoCapitalize="none"
						textContentType="emailAddress"
						spellCheck
					/>
				</View>
				<View>
					<Text>Password</Text>
					<TextInput 
						style={styles.input}
						placeholder='Password' 
						value={password}
						onChangeText={value=>setPassword(value)}
						autoCapitalize="none"
						secureTextEntry={showPassword}
					/>
					<Text style={{marginTop:10}} onPress={()=>setShowPassword(b=>!b)} >Show pass</Text>
				</View>
				<Button ref={btnRef} title='Login' onPress={startLogin} />
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