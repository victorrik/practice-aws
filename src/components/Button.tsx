import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as React from 'react'
import { ButtonProps, ButtonRef } from './types'


const Button = ({title, style={}, type = "primary",disabled, ...props}:ButtonProps,ref:React.Ref<ButtonRef>) => {
	const bgColor = type === "link" ? "transparent" : type === "primary" ? "#4AB5AE" : "#6E5471"
	const textColor = type === "link" ? "#566573" : type === "primary" ? "#FFFFFF" : "#FFFFFF"
	const [loading, setLoading] = React.useState(false);
	React.useImperativeHandle(ref, () => ({
		setLoading
	}), []);
	return (
		<TouchableOpacity  {...props}  disabled={ disabled || loading } style={[styles.container,{backgroundColor:bgColor},style]}  >
			{loading ? <ActivityIndicator color={textColor} /> : <Text style={[styles.btnTitle,{color:textColor}]} >{title}</Text>}
		</TouchableOpacity>
	)
}

export default React.forwardRef(Button)

const styles = StyleSheet.create({
	container:{
		backgroundColor:"cyan",
		justifyContent:"center",
		alignItems:"center",
		paddingVertical:14,
		paddingHorizontal:20,
		borderRadius:5
	},
	btnTitle:{
		fontWeight:"700",
		fontSize:16 
	}
})