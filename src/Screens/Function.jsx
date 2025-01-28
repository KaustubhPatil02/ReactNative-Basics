import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profile from './Profile'

const Function = ({navigation}) => {
  return (
    <View>
      <Text>Function Screen</Text>
      <Button title='Go to Profile' onPress={()=>navigation.navigate('Profile')} />
    </View>
  )
}

export default Function

const styles = StyleSheet.create({})