/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateChatRoomInput = {
  id?: string | null,
  _version?: number | null,
  chatRoomLastMessageId?: string | null,
};

export type ModelChatRoomConditionInput = {
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
  chatRoomLastMessageId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ChatRoom = {
  __typename: "ChatRoom",
  id: string,
  ChatRoomMessages?: ModelMessageConnection | null,
  users?: ModelUserChatRoomConnection | null,
  LastMessage?: Message | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  chatRoomLastMessageId?: string | null,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  message: string,
  messageType: string,
  chatroomID: string,
  userID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelUserChatRoomConnection = {
  __typename: "ModelUserChatRoomConnection",
  items:  Array<UserChatRoom | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UserChatRoom = {
  __typename: "UserChatRoom",
  id: string,
  chatRoomId: string,
  userId: string,
  chatRoom: ChatRoom,
  user: User,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  photoProfile?: VFile | null,
  status?: string | null,
  UserMessage?: ModelMessageConnection | null,
  ChatRooms?: ModelUserChatRoomConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type VFile = {
  __typename: "VFile",
  filename: string,
  path?: string | null,
  url?: string | null,
  width: string,
  height: string,
};

export type UpdateChatRoomInput = {
  id: string,
  _version?: number | null,
  chatRoomLastMessageId?: string | null,
};

export type DeleteChatRoomInput = {
  id: string,
  _version?: number | null,
};

export type CreateMessageInput = {
  id?: string | null,
  message: string,
  messageType: string,
  chatroomID: string,
  userID: string,
  _version?: number | null,
};

export type ModelMessageConditionInput = {
  message?: ModelStringInput | null,
  messageType?: ModelStringInput | null,
  chatroomID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateMessageInput = {
  id: string,
  message?: string | null,
  messageType?: string | null,
  chatroomID?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeleteMessageInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  photoProfile?: VFileInput | null,
  status?: string | null,
  _version?: number | null,
};

export type VFileInput = {
  filename: string,
  path?: string | null,
  url?: string | null,
  width: string,
  height: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  photoProfile?: VFileInput | null,
  status?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserChatRoomInput = {
  id?: string | null,
  chatRoomId: string,
  userId: string,
  _version?: number | null,
};

export type ModelUserChatRoomConditionInput = {
  chatRoomId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelUserChatRoomConditionInput | null > | null,
  or?: Array< ModelUserChatRoomConditionInput | null > | null,
  not?: ModelUserChatRoomConditionInput | null,
};

export type UpdateUserChatRoomInput = {
  id: string,
  chatRoomId?: string | null,
  userId?: string | null,
  _version?: number | null,
};

export type DeleteUserChatRoomInput = {
  id: string,
  _version?: number | null,
};

export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
  chatRoomLastMessageId?: ModelIDInput | null,
};

export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection",
  items:  Array<ChatRoom | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  message?: ModelStringInput | null,
  messageType?: ModelStringInput | null,
  chatroomID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserChatRoomFilterInput = {
  id?: ModelIDInput | null,
  chatRoomId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelUserChatRoomFilterInput | null > | null,
  or?: Array< ModelUserChatRoomFilterInput | null > | null,
  not?: ModelUserChatRoomFilterInput | null,
};

export type ModelSubscriptionChatRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionChatRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatRoomFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  message?: ModelSubscriptionStringInput | null,
  messageType?: ModelSubscriptionStringInput | null,
  chatroomID?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionUserChatRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  chatRoomId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserChatRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserChatRoomFilterInput | null > | null,
};

export type CreateChatRoomMutationVariables = {
  input: CreateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type CreateChatRoomMutation = {
  createChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    ChatRoomMessages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        messageType: string,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        chatRoomId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      message: string,
      messageType: string,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type UpdateChatRoomMutationVariables = {
  input: UpdateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomMutation = {
  updateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    ChatRoomMessages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        messageType: string,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        chatRoomId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      message: string,
      messageType: string,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type DeleteChatRoomMutationVariables = {
  input: DeleteChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    ChatRoomMessages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        messageType: string,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        chatRoomId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      message: string,
      messageType: string,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    messageType: string,
    chatroomID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    messageType: string,
    chatroomID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    messageType: string,
    chatroomID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    photoProfile?:  {
      __typename: "VFile",
      filename: string,
      path?: string | null,
      url?: string | null,
      width: string,
      height: string,
    } | null,
    status?: string | null,
    UserMessage?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        messageType: string,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        chatRoomId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    photoProfile?:  {
      __typename: "VFile",
      filename: string,
      path?: string | null,
      url?: string | null,
      width: string,
      height: string,
    } | null,
    status?: string | null,
    UserMessage?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        messageType: string,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        chatRoomId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    photoProfile?:  {
      __typename: "VFile",
      filename: string,
      path?: string | null,
      url?: string | null,
      width: string,
      height: string,
    } | null,
    status?: string | null,
    UserMessage?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        messageType: string,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        chatRoomId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserChatRoomMutationVariables = {
  input: CreateUserChatRoomInput,
  condition?: ModelUserChatRoomConditionInput | null,
};

export type CreateUserChatRoomMutation = {
  createUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    chatRoomId: string,
    userId: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      ChatRoomMessages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        message: string,
        messageType: string,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      chatRoomLastMessageId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      photoProfile?:  {
        __typename: "VFile",
        filename: string,
        path?: string | null,
        url?: string | null,
        width: string,
        height: string,
      } | null,
      status?: string | null,
      UserMessage?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserChatRoomMutationVariables = {
  input: UpdateUserChatRoomInput,
  condition?: ModelUserChatRoomConditionInput | null,
};

export type UpdateUserChatRoomMutation = {
  updateUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    chatRoomId: string,
    userId: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      ChatRoomMessages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        message: string,
        messageType: string,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      chatRoomLastMessageId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      photoProfile?:  {
        __typename: "VFile",
        filename: string,
        path?: string | null,
        url?: string | null,
        width: string,
        height: string,
      } | null,
      status?: string | null,
      UserMessage?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserChatRoomMutationVariables = {
  input: DeleteUserChatRoomInput,
  condition?: ModelUserChatRoomConditionInput | null,
};

export type DeleteUserChatRoomMutation = {
  deleteUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    chatRoomId: string,
    userId: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      ChatRoomMessages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        message: string,
        messageType: string,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      chatRoomLastMessageId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      photoProfile?:  {
        __typename: "VFile",
        filename: string,
        path?: string | null,
        url?: string | null,
        width: string,
        height: string,
      } | null,
      status?: string | null,
      UserMessage?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetChatRoomQueryVariables = {
  id: string,
};

export type GetChatRoomQuery = {
  getChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    ChatRoomMessages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        messageType: string,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        chatRoomId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      message: string,
      messageType: string,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type ListChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomsQuery = {
  listChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items:  Array< {
      __typename: "ChatRoom",
      id: string,
      ChatRoomMessages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        message: string,
        messageType: string,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      chatRoomLastMessageId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncChatRoomsQuery = {
  syncChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items:  Array< {
      __typename: "ChatRoom",
      id: string,
      ChatRoomMessages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        message: string,
        messageType: string,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      chatRoomLastMessageId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    messageType: string,
    chatroomID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      message: string,
      messageType: string,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMessagesQuery = {
  syncMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      message: string,
      messageType: string,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type MessagesByChatroomIDQueryVariables = {
  chatroomID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByChatroomIDQuery = {
  messagesByChatroomID?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      message: string,
      messageType: string,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type MessagesByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByUserIDQuery = {
  messagesByUserID?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      message: string,
      messageType: string,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    photoProfile?:  {
      __typename: "VFile",
      filename: string,
      path?: string | null,
      url?: string | null,
      width: string,
      height: string,
    } | null,
    status?: string | null,
    UserMessage?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        messageType: string,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        chatRoomId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      photoProfile?:  {
        __typename: "VFile",
        filename: string,
        path?: string | null,
        url?: string | null,
        width: string,
        height: string,
      } | null,
      status?: string | null,
      UserMessage?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      photoProfile?:  {
        __typename: "VFile",
        filename: string,
        path?: string | null,
        url?: string | null,
        width: string,
        height: string,
      } | null,
      status?: string | null,
      UserMessage?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserChatRoomQueryVariables = {
  id: string,
};

export type GetUserChatRoomQuery = {
  getUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    chatRoomId: string,
    userId: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      ChatRoomMessages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        message: string,
        messageType: string,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      chatRoomLastMessageId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      photoProfile?:  {
        __typename: "VFile",
        filename: string,
        path?: string | null,
        url?: string | null,
        width: string,
        height: string,
      } | null,
      status?: string | null,
      UserMessage?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserChatRoomsQueryVariables = {
  filter?: ModelUserChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserChatRoomsQuery = {
  listUserChatRooms?:  {
    __typename: "ModelUserChatRoomConnection",
    items:  Array< {
      __typename: "UserChatRoom",
      id: string,
      chatRoomId: string,
      userId: string,
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        chatRoomLastMessageId?: string | null,
      },
      user:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserChatRoomsQueryVariables = {
  filter?: ModelUserChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserChatRoomsQuery = {
  syncUserChatRooms?:  {
    __typename: "ModelUserChatRoomConnection",
    items:  Array< {
      __typename: "UserChatRoom",
      id: string,
      chatRoomId: string,
      userId: string,
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        chatRoomLastMessageId?: string | null,
      },
      user:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type UserChatRoomsByChatRoomIdQueryVariables = {
  chatRoomId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserChatRoomsByChatRoomIdQuery = {
  userChatRoomsByChatRoomId?:  {
    __typename: "ModelUserChatRoomConnection",
    items:  Array< {
      __typename: "UserChatRoom",
      id: string,
      chatRoomId: string,
      userId: string,
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        chatRoomLastMessageId?: string | null,
      },
      user:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type UserChatRoomsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserChatRoomsByUserIdQuery = {
  userChatRoomsByUserId?:  {
    __typename: "ModelUserChatRoomConnection",
    items:  Array< {
      __typename: "UserChatRoom",
      id: string,
      chatRoomId: string,
      userId: string,
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        chatRoomLastMessageId?: string | null,
      },
      user:  {
        __typename: "User",
        id: string,
        name: string,
        status?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    ChatRoomMessages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        messageType: string,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        chatRoomId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      message: string,
      messageType: string,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type OnUpdateChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    ChatRoomMessages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        messageType: string,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        chatRoomId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      message: string,
      messageType: string,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type OnDeleteChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    ChatRoomMessages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        messageType: string,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        chatRoomId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    LastMessage?:  {
      __typename: "Message",
      id: string,
      message: string,
      messageType: string,
      chatroomID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    messageType: string,
    chatroomID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    messageType: string,
    chatroomID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    message: string,
    messageType: string,
    chatroomID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    photoProfile?:  {
      __typename: "VFile",
      filename: string,
      path?: string | null,
      url?: string | null,
      width: string,
      height: string,
    } | null,
    status?: string | null,
    UserMessage?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        messageType: string,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        chatRoomId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    photoProfile?:  {
      __typename: "VFile",
      filename: string,
      path?: string | null,
      url?: string | null,
      width: string,
      height: string,
    } | null,
    status?: string | null,
    UserMessage?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        messageType: string,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        chatRoomId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    photoProfile?:  {
      __typename: "VFile",
      filename: string,
      path?: string | null,
      url?: string | null,
      width: string,
      height: string,
    } | null,
    status?: string | null,
    UserMessage?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        message: string,
        messageType: string,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        chatRoomId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionUserChatRoomFilterInput | null,
};

export type OnCreateUserChatRoomSubscription = {
  onCreateUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    chatRoomId: string,
    userId: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      ChatRoomMessages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        message: string,
        messageType: string,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      chatRoomLastMessageId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      photoProfile?:  {
        __typename: "VFile",
        filename: string,
        path?: string | null,
        url?: string | null,
        width: string,
        height: string,
      } | null,
      status?: string | null,
      UserMessage?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionUserChatRoomFilterInput | null,
};

export type OnUpdateUserChatRoomSubscription = {
  onUpdateUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    chatRoomId: string,
    userId: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      ChatRoomMessages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        message: string,
        messageType: string,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      chatRoomLastMessageId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      photoProfile?:  {
        __typename: "VFile",
        filename: string,
        path?: string | null,
        url?: string | null,
        width: string,
        height: string,
      } | null,
      status?: string | null,
      UserMessage?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionUserChatRoomFilterInput | null,
};

export type OnDeleteUserChatRoomSubscription = {
  onDeleteUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    chatRoomId: string,
    userId: string,
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      ChatRoomMessages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      LastMessage?:  {
        __typename: "Message",
        id: string,
        message: string,
        messageType: string,
        chatroomID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      chatRoomLastMessageId?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      photoProfile?:  {
        __typename: "VFile",
        filename: string,
        path?: string | null,
        url?: string | null,
        width: string,
        height: string,
      } | null,
      status?: string | null,
      UserMessage?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      ChatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
