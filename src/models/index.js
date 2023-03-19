// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ChatRoom, Message, User, UserChatRoom, VFile } = initSchema(schema);

export {
  ChatRoom,
  Message,
  User,
  UserChatRoom,
  VFile
};