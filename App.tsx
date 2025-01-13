import { Alert, Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', fontSize:26, fontWeight:'bold' }}>Welcome again</Text>
      <Text style={{ textAlign: 'center', fontSize:16, fontWeight:'bold' }}>LOGIN !!</Text>
      <TextInput
        type="text"
        style={styles.textInput}
        placeholder='Username'
      />
      <TextInput
        type="text"
        style={styles.textInput}
        placeholder='Password'
      />
      <Pressable 
        style={{ width: '100%', backgroundColor: '#8174A0', padding: 10, borderRadius: 5, alignItems: 'center', marginTop: 10 }}
        onPress={() => Alert.alert('Login')}
        >
          <Text>Login</Text>
        </Pressable>

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  textInput: {
    backgroundColor: '#dada',
    width: '100%',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  }
})