import { Alert, Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const second = 'Welcome to the login page';
  // const [text, settext] = useState(second) // this is the state variable

  const [submitText, setSubmitText] = useState({ username: '', password: '' })

  const handleLogin = () => {
    setSubmitText({ username, password })
    setPassword('');
    setUsername('');
  }

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', fontSize: 26, fontWeight: 'bold' }}>{second}</Text>
      <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>LOGIN !!</Text>
      <TextInput
        style={styles.textInput}
        placeholder='Username'
        value={username}
        onChangeText={setUsername}
      // (username) => setUsername(username)
      // multiline
      // numberOfLines={3}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        // (password) => setPassword(password)
        secureTextEntry
        keyboardType='numeric'
      />
      <Pressable
        style={{ width: '100%', backgroundColor: '#500073', padding: 10, borderRadius: 5, alignItems: 'center', marginTop: 10 }}
        onPress={handleLogin}
      >
        <Text style={{ color: 'white' }}>Login</Text>
      </Pressable>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Your Entered Data for handling users input:</Text>
        {submitText.password && submitText.password ?
          (<><Text style={{ fontSize: 16 }}>Username:{submitText.username} </Text><Text style={{ fontSize: 16 }}>Password:{submitText.password} </Text></>) :
          null
        }

      </View>
      {/* <Pressable
        style={{ width: '100%', backgroundColor: '#500073', padding: 10, borderRadius: 5, alignItems: 'center', marginTop: 10 }}
        onPress={handleLogin}
      >
        <Text style={{ color: 'white' }}>Go to Profile</Text>
      </Pressable> */}

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#86A788',
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