import { Alert, Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', fontSize:26, fontWeight:'bold' }}>Welcome again</Text>
      <Text style={{ textAlign: 'center', fontSize:16, fontWeight:'bold' }}>LOGIN !!</Text>
      <TextInput
        style={styles.textInput}
        placeholder='Username'
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable 
        style={{ width: '100%', backgroundColor: '#8174A0', padding: 10, borderRadius: 5, alignItems: 'center', marginTop: 10 }}
        onPress={() => Alert.alert('Login', `Username: ${username}, Password: ${password}`, [{ text: 'Close' }])}
        >
          <Text style={{ color: 'white' }}>Login</Text>
        </Pressable>
        <View style={{ marginTop: 20 }}>
          <Text style={{fontSize: 20,  fontWeight:'bold'}}>Your Entered Data for handling users input:</Text>
          <Text style={{fontSize: 16}}>Username:{username} </Text>
          <Text style={{fontSize: 16}}>Password:{password} </Text>

        </View>

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