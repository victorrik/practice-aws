import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ButtonProps } from './types'


const Button = ({title, style={}, type = "primary", ...props}:ButtonProps) => {
	const bgColor = type === "link" ? "transparent" : type === "primary" ? "#4AB5AE" : "#6E5471"
	const textColor = type === "link" ? "black" : type === "primary" ? "#FFFFFF" : "#FFFFFF"
	return (
		<TouchableOpacity  {...props} style={[styles.container,{backgroundColor:bgColor},style]}  >
			<Text style={[styles.btnTitle,{color:textColor}]} >{title}</Text>
		</TouchableOpacity>
	)
}

export default Button

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