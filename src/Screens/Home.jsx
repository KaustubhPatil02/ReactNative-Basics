import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profile from './Profile'

const Home = ({navigation}) => {
  return (
    <View style={{width:"100%", height:"100%", justifyContent:"center", alignItems:"center", gap:10}}>
      <Text style={{fontSize:20, fontWeight:"600"}}>Home</Text>
      <Button title='Go to Profile' onPress={()=>navigation.navigate("Profile")}/>
        <Button title='Go to Login' onPress={()=>navigation.navigate("Login")}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})