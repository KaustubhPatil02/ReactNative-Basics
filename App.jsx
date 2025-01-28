import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profile from './src/Screens/Profile'
import Function from './src/Screens/Function'
import Home from './src/Screens/Home'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator();

const StackNavigate = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Function" component={Function} />
    </Stack.Navigator>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <StackNavigate />
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})