import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import Tabs from './src/navigation/tabs';
const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{flex: 1, marginTop: 25}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Login'}
          screenOptions={{
            headerShown: false }}>
          <Stack.Screen
            name='Home'
            component={Tabs}/>
          <Stack.Screen
            name='Login'
            component={LoginScreen}/>
          <Stack.Screen
            name='Register'
            component={RegisterScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    
  );
}