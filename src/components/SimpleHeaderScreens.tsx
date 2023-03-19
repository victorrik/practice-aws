import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type SimpleHeaderScreens = {
	title:string
}
const SimpleHeaderScreens = (props:SimpleHeaderScreens) => {
	const insets = useSafeAreaInsets()
	return (
		<View style={[styles.headerContainer,{paddingTop:insets.top + 8}]} >
			<Text style={styles.headerTitle} >{props.title}</Text>
		</View>
	)
}

export default SimpleHeaderScreens

const styles = StyleSheet.create({
	headerContainer:{
		paddingHorizontal:16,
		backgroundColor:"white",
		paddingBottom:16
	},
	headerTitle:{
		fontSize:32,
		fontWeight:"800"
	}
})