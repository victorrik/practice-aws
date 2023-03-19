import { ChatPreview, User } from "@AppTypes";
import { rndInterger } from "@utils/functions";
import { create } from "zustand";
interface CurrentChat extends ChatPreview {
	messages:[]
}
const defaultCurrentChat:CurrentChat = {
	messages: [],
	message: "",
	messageLastDate: 0,
	messageType: "text",
	id: "",
	name: "",
	photoProfile: {
		width: 0,
		height: 0,
		path: "",
		url: "",
		filename: ""
	},
	status: ""
}
interface ChatsState {
  chatList: Array<ChatPreview>;
	loadingChats:boolean,
  getChatList: () => Promise<boolean>;
  currentChat: CurrentChat;
  setCurrentChat: (chat:ChatPreview) => void;
  clearCurrentChat: () => void;
}
const messages = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
"Phasellus et ipsum volutpat orci ultricies hendrerit sit amet non enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
"Curabitur a nibh in risus pretium sollicitudin.",
"Etiam molestie nisi non scelerisque elementum.",
"Duis sodales magna a nisl ornare aliquet. Duis sodales magna a nisl ornare aliquet.",
"Nam consequat nunc eu ultrices fermentum.",
"In varius metus vitae suscipit finibus.",
"Donec at purus hendrerit, sodales lectus non, vulputate lacus. Duis sodales magna a nisl ornare aliquet.",
"Quisque interdum metus et magna commodo, at ultrices eros sagittis."]

const useChatsStore = create<ChatsState>((set, get) => ({
  chatList: [],
	loadingChats:true,
  getChatList: async () => {
		const poolFetch = Array(20).fill("").map(async()=>fetch("https://random-data-api.com/api/v2/users").then((res)=>res.json()))
		const result = await Promise.all(poolFetch)
		set({loadingChats:false,chatList:result.map((obj)=>{
			const width = rndInterger(1,7) * 100
			const height = rndInterger(1,7) * 100
			//`https://placekitten.com/${width}/${height}`
			const messageLastDate = new Date().getTime() - (rndInterger(10000,900000) * 100)
			return {
				id:obj.uid,
				name: `${obj.first_name} ${obj.last_name}${rndInterger(1,9) % 2 === 0 ? " "+obj.address.street_name:""}`,
				photoProfile:{ 
					width,
					height,
					url:`https://placekitten.com/${width}/${height}`,
					path:"",
					filename:"placekitten.png"
				},
				status: "active",
				message:messages[ rndInterger(0, messages.length - 1)],
				messageType:"text",
				messageLastDate
			}
		})})
    return true;
  },
  currentChat:  defaultCurrentChat,
  setCurrentChat: (chat) => {
		set({currentChat:{...chat,messages:[]}})
	},
  clearCurrentChat: () => {
		set({currentChat:defaultCurrentChat})
	},
}));

export default useChatsStore