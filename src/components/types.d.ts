import { GestureResponderEvent, StyleProp, TouchableWithoutFeedbackProps, ViewStyle } from "react-native/types"

export interface ButtonProps extends TouchableWithoutFeedbackProps {
	title:string
	type?:"primary"|"secondary"|"link"
	// onPress:((event: GestureResponderEvent) => void) | undefined
	// style?: StyleProp<ViewStyle> | undefined;
}
export interface ButtonRef {
	setLoading:(nextState:boolean)=>void
}

export interface VerifyCodeProps {
	email:string
	handleAction:()=>void
}

export interface VerifyCodeRef {
	showModal:(state:boolean)=>void
}

export type IconsAvailable =  "paperclip"|
"camera"|
"cardimage"|
"peoplecircle"|
"people"|
"person"|
"arrowLeft"|
"plusLg"|
"imagealt"|
"facebook"|
"meta"|
"whatsapp"|
"google"|
"apple"|
"envelope"|
"personbadge"|
"boxarrowright"|
"phone"|
"xlg"|
"personAdd"|
"search"|
"send"|
"threedotsvertical"