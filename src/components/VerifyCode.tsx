import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import Icons from './Icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ButtonRef, VerifyCodeProps, VerifyCodeRef } from '@ComponentTypes'
import Button from './Button'
import { Auth } from 'aws-amplify'

const VerifyCode = (props: VerifyCodeProps, ref: React.Ref<VerifyCodeRef>) => {
	const btnLinkRef = useRef<ButtonRef>(null)
	const btnConfirmRef = useRef<ButtonRef>(null)
	const insets = useSafeAreaInsets()
	const [show, setShow] = useState(false);
	const [code, setCode] = useState("");
	useImperativeHandle(
	ref,
	() => ({
		showModal:setShow
	}),[])

	const resendTheCode = async() => { 
		btnLinkRef.current?.setLoading(true)
		try {
			await Auth.resendSignUp(props.email);
			console.log('code resent successfully');
		} catch (err) {
			console.log('error resending code: ', err);
		}
		btnLinkRef.current?.setLoading(false)
	}
	const checkTheCode = async() => { 
		btnConfirmRef.current?.setLoading(true)
		try {
			await Auth.confirmSignUp(props.email, code);
			props.handleAction()
    } catch (error) {
        Alert.alert("Error on code",error.message)
    }
		btnConfirmRef.current?.setLoading(false)
	}
	return (

		<Modal
			animationType="fade"
			transparent={true}
			visible={show}
		>
			<View style={[styles.modalContainer, { paddingTop: insets.top, paddingBottom: insets.bottom }]} >
				<View style={styles.cardContainer} >
					<View style={styles.cardHeader} >
						<Text style={styles.title} >
							Verify Code
						</Text>
						<TouchableOpacity style={styles.closeContainer} onPress={() => setShow(false)} >
							<View style={styles.closeInner} >
								<Icons name="xlg" size={10} color='black' />
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.containerList} > 
						<Text style={styles.labelVerification} >
							Check your email for verification code
						</Text>
							<TextInput
								style={styles.input}
								placeholder='Code'
								value={code}
								placeholderTextColor="#566573"
								onChangeText={value => setCode(value)}
								inputMode="numeric"
							/> 
						<Button ref={btnConfirmRef} title='Verify Code' onPress={checkTheCode} />
						<Button ref={btnLinkRef} title='Resend code' type="link" onPress={resendTheCode} />
					</View>
				</View>
			</View>
		</Modal>
	)
}

export default forwardRef(VerifyCode)


const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(180,180,180,0.6)",
		padding: 16
	},
	cardHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 16
	},
	closeContainer: {
		borderRadius: 100,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#FA5352",
		padding: 8
	},
	closeInner: {
		borderRadius: 100,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
		padding: 4
	},
	title: {
		fontSize: 28,
		fontWeight: "700"
	},
	cardContainer: {
		backgroundColor: "white",
		borderWidth: 1,
		borderColor: "#566573",
		borderRadius: 24,
		width: "100%",
		overflow:"hidden"
	},
	containerList: { 
		backgroundColor: "#F2F5F7",
		gap:16,
		padding:16
	},
	btnSearch: {
		borderRadius: 100,
		backgroundColor: "#F28693",
		padding: 10
	},
	input: {
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#566573",
		paddingHorizontal: 16,
		paddingVertical: 8,
		backgroundColor: "white"
	},
	labelVerification:{
		fontSize:16,
		fontWeight:"700"
	}
})