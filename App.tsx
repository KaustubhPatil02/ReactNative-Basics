import { Button, Image, StyleSheet, Text, Touchable, TouchableOpacity, View, Alert } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>App1</Text>
      <Image
        source={{ uri: "https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          margin: 10,
        }}
      />
      <Button title='Just Exploring ReactNative' />

      <TouchableOpacity 
      style={btnStyles.container}
      onPress={() => Alert.alert('This is not a normal btn what it does is basically provide a touchable effect')}>
        <Text>onPress btn</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={{...btnStyles.container,backgroundColor:"red",}}
      onLongPress={() => Alert.alert('This is not a normal btn what it does is basically provide a touchable effect of longPress}')}>
        <Text>onLongPress btn</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container take up all available space
    justifyContent: 'center', // Centers children vertically
    alignItems: 'center', // Centers children horizontally
  },
});
const btnStyles= StyleSheet.create({
  container:{
    padding:20,
    paddingTop: 10,
    backgroundColor:"skyblue",
    borderRadius:5,
    margin:10
  }
})
export default App
