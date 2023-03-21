import { ChatPreview, User } from "@AppTypes";
import { removeSpecialCharacters, rndInterger } from "@utils/functions";
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import { create } from "zustand";
import { CreateUserMutation  } from "src/API";
import { createUser } from "@VGraphql/mutations";
import { getUser } from "@utils/queries";
 
const defaultCurrentUser:User = {
	id: "",
	name: "",
	photoProfile: {
		width: 0,
		height: 0,
		path: "",
		url: "",
		filename: ""
	},
	status: "",
	createdAt: undefined,
	updatedAt: undefined
} 
interface UserStoreState {
  user: User;
  getUser: (id:string) => Promise<boolean>;
  createUser: (id:string,username:string) => Promise<boolean>;
  clear: () => void;
}
const useUserStore = create<UserStoreState>((set, get) => ({
	user:defaultCurrentUser,
	async getUser(id){
		
		try {
			const result = await API.graphql<GraphQLQuery<Record<"getUser",User>>>(graphqlOperation(getUser,{id}))
			console.log('result.data.getUser-->',result.data.getUser)
			set({user:result.data.getUser})
			return true
		} catch (error) {
			console.log('error',error)
			return false
		}
	},
	async createUser(id,username){
		const width = rndInterger(1,7) * 100
		const height = rndInterger(1,7) * 100;
		try {
			const result = await API.graphql<GraphQLQuery<CreateUserMutation>>(graphqlOperation(createUser,{input:{
				id,
				name:username,
				photoProfile: {
					path: null,
					url: `https://placekitten.com/${width}/${height}`,
					filename: "placekitten.png",
					width,
					height
				},
				status:"active",
				nameToSearch:removeSpecialCharacters(username.toLocaleLowerCase())
			}}))
			
			set({user:{
				id: result.data.createUser.id,
				name: result.data.createUser.name,
				//@ts-ignore
				photoProfile: result.data.createUser.photoProfile,
				status: "actove",
				createdAt: result.data.createUser.createdAt,
				updatedAt: result.data.createUser.updatedAt
			}})
			
			return true
		} catch (error) {
			return false
		}
	},
	clear(){
		set({user:defaultCurrentUser})
	}
}));

export default useUserStore