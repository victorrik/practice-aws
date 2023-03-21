export const getUserChatRooms = /* GraphQL */ `
  query GetUserChatRooms($id: ID!) {
    getUser(id: $id) {
    id
    ChatRooms {
      items {
        chatRoom {
          id
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
