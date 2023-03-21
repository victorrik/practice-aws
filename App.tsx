import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import Main from './src/Main';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'

Amplify.configure(awsconfig)
function App() {
  return (
    <SafeAreaProvider>
			<NavigationContainer>
				<StatusBar style="dark" />
				<Main/>
			</NavigationContainer>
		</SafeAreaProvider>
  );
}

export default App;