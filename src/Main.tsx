import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Chat from './screens/Chat';
import ChatDetail from './screens/ChatDetail';
import LaunchScreen from './screens/LaunchScreen';
import SignUp from './screens/SignUp';
import Login from './screens/Login';


const Stack = createNativeStackNavigator();

function Main() {
	return (
		<Stack.Navigator
			screenOptions={{
				animation: "slide_from_right",
				headerShown: false
			}}

		>
			<Stack.Screen name="LaunchScreen" component={LaunchScreen} />
			<Stack.Screen name="Home" component={Home} options={{
				contentStyle: {
					backgroundColor:"#F2F5F7"
				}
			}} />
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="SignUp" component={SignUp} />
			<Stack.Screen name="Chat" component={Chat} options={{
				contentStyle: {
					backgroundColor:"#F2F5F7"
				}
			}} />
			<Stack.Screen name="ChatDetail" component={ChatDetail} />
		</Stack.Navigator>
	);
}

export default Main;