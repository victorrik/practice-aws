import { ChatPreview, User } from "@AppTypes";
import { rndInterger } from "@utils/functions";
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import { listUsers } from "@VGraphql/queries"
import { create } from "zustand";
import { GetUserQuery, ListUsersQuery } from "src/API";
import { getUserChatRooms } from "@utils/queries";
import dayjs from "dayjs"; 

type GetUserChatRoomsQuery = {
	getUser:{
		id:string
		ChatRooms:{
			items:Array<{
				chatRoom:{
						id:string
						users:{
						items:Array<{
							user:{
									id:string
									name:string
									nameToSearch:string
									photoProfile?:{
										url:string
									},
									status:string
								}
						}>
					}
					LastMessage?:{
						id:string
						createdAt:string
						message:string
						messageToSearc:string
						messageType:string
					}
				}
		}>
	}
}
};
const defaultCurrentChat:ChatPreview = {
	id: "",
	user: {
		name: "",
		id: "",
		photoProfile: null,
		status: ""
	},
	message: "",
	messageLastDate: 0,
	messageType: "text"
}
interface ChatsState {
  chatList: Array<ChatPreview>;
	loadingChats:boolean,
  getChatList: (id:string) => Promise<boolean>;
  currentChat: ChatPreview;
  setCurrentChat: (chat:ChatPreview) => void;
  clearCurrentChat: () => void;
}
const useChatsStore = create<ChatsState>((set, get) => ({
  chatList: [],
	loadingChats:true,
  getChatList: async (id) => {
		try {
			const result = await API.graphql<GraphQLQuery<GetUserChatRoomsQuery>>(graphqlOperation(getUserChatRooms,{id}))
			const resumeResult = result.data.getUser.ChatRooms.items.map(({chatRoom}):ChatPreview=>{
				const daUser = chatRoom.users.items.find((obj)=>obj.user.id !== id).user
				return {
					id:chatRoom.id,
					user:{
						id:daUser.id,
						status:daUser.status,
						name:daUser.name,
						//@ts-ignore
						photoProfile:chatRoom.users.items[0].user.photoProfile,
					},
					message:chatRoom.LastMessage?.message,
					//@ts-ignore
					messageType:chatRoom.LastMessage?.messageType,
					messageLastDate: new Date(chatRoom.LastMessage?chatRoom.LastMessage.createdAt:null).getTime()
				}
			})
		 
			set({loadingChats:false,chatList:resumeResult as ChatPreview[]})
			return true
		} catch (error) {
			console.log("error-->",error)
			return false
		}
  },
  currentChat:  defaultCurrentChat,
  setCurrentChat: (chat) => {
		set({currentChat:chat})
	},
  clearCurrentChat: () => {
		set({currentChat:defaultCurrentChat})
	},
}));

export default useChatsStore