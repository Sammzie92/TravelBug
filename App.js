import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { SafeAreaView } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Discover from './screens/Discover';
import ItemScreen from './screens/ItemScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Discover" component={Discover} />
          <Stack.Screen name="ItemScreen" component={ItemScreen}/>
        </Stack.Navigator>

      </NavigationContainer>
        
    </TailwindProvider>
    
  );
}


