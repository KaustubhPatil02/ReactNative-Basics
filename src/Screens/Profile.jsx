import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Home'


const Profile = ({navigation}) => {
  return (
    <View style={{width:"100%", height:"100%", justifyContent:"center", alignItems:"center"}}>
          <Text style={{fontSize:20, fontWeight:"600"}}>Profile</Text>
      <Button title='Go to Another screen ' onPress={()=>navigation.navigate("Function")} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})