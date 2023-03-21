export const getUserChatRooms = /* GraphQL */ `
  query GetUserChatRooms($id: ID!) {
    getUser(id: $id) {
    id
    ChatRooms {
      items {
        chatRoom {
          id
					updatedAt
          users {
            items {
              user {
                id
                name
                nameToSearch
								status
                photoProfile {
                  url
                }
              }
            }
          }
          LastMessage {
            id
            createdAt
            message
            messageToSearc
            messageType
          }
        }
      }
    }
  }
}
`;
export const getUser = /* GraphQL */ `
	query GetUser($id: ID!) {
	getUser(id: $id) {
		id
		name
		status
		updatedAt
		createdAt
		photoProfile {
			filename
			height
			path
			url
			width
		}
	}
}
`;
export const getChatRoomMessages = /* GraphQL */ `
	query GetChatRoomMessages($chatroomID: ID!, $sortDirection: ModelSortDirection!) {
		listMessagesByChatRoom(chatroomID: $chatroomID, sortDirection: $sortDirection) {
    items {
      message
      createdAt
      id
      messageToSearc
      messageType
			userID
    }
  }
}
`;
export const simpleUpdateChatRoom = /* GraphQL */ `
mutation SimpleUpdateChatRoom($_version: Int!, $chatRoomLastMessageId: ID!, $id: ID!) {
	updateChatRoom(input: {id: $id, chatRoomLastMessageId: $chatRoomLastMessageId, _version: $_version}) {
		updatedAt
	}
}`;
