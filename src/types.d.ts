import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  Chat: undefined;
	LaunchScreen: undefined;
  ChatDetail: undefined;
};
export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;
export type VNavigationProps = NativeStackNavigationProp<RootStackParamList>

export type VFile = {
	width:number
	height:number
	path:string
	url?:string
	filename:string
}

export type User = {
  id: string;
  name: string;
  photoProfile: VFile | null;
  status: string;
}
export interface ChatPreview extends User {
	message:string
	messageLastDate:number
	messageType:"text"|"file"
} 
export type Message = {
  id: string;
  content: string;
  createdAt: string;
  user: User;
}

export type ChatRoom = {
  id: string;
  users: User[];
  lastMessage: Message;
}