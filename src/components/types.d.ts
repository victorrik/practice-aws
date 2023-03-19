import { GestureResponderEvent, StyleProp, TouchableWithoutFeedbackProps, ViewStyle } from "react-native/types"

export interface ButtonProps extends TouchableWithoutFeedbackProps {
	title:string
	type?:"primary"|"secondary"|"link"
	// onPress:((event: GestureResponderEvent) => void) | undefined
	// style?: StyleProp<ViewStyle> | undefined;
}
export interface ButtonRef {
	handleLoading:(nextState:boolean)=>void
}

export type IconsAvailable =  "paperclip"| 
"camera"| 
"cardImage"| 
"peopleCircle"| 
"people"| 
"person"| 
"arrowLeft"| 
"plusLg"| 
"imageAlt"| 
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
"threeDotsVertical"