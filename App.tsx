import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';

const App = () => {
  const theme = useColorScheme();
  const darkMode = theme ==='dark';
  const backgroundColor = darkMode ? "black": "white";
  const textColor = darkMode ? 'white' :" black";
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Text style={[styles.textColor,{color: textColor}]}>Hello App</Text>
      <View style={styles.view2}>
        <Text style={[styles.textColor,{color: textColor}]}>View 2</Text>
      </View>    
      <View style={styles.view3}>
        <Text style={[styles.textColor,{color: textColor}]}>View 3</Text>
        </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // width:"100%",
    // height:"100%",
    // justifyContent:"center",
    // alignItems:"center"
  },
  textColor:{
    fontSize: 60,
    fontWeight: "800",
  },
  view2:{
    flex:2,
    backgroundColor:"green"
  },
  view3:{
    flex:3,
    backgroundColor:"skyblue"
  },
})

export default App;




// import { Button, Image, StyleSheet, Text, Touchable, TouchableOpacity, View, Alert, Pressable, SafeAreaView, useColorScheme } from 'react-native'
// import React from 'react'

// const App = () => {
//  const theme = useColorScheme();
//  console.log(theme, "theme")

//  const isDarkMode = theme ==='dark';
//  const backgroundColor = isDarkMode ? "black" : "white";
//  const textColor = isDarkMode ? "white" : "black";
//   return (
//     <View style={[styles.container, {backgroundColor: backgroundColor}]}>
//       <Text style={[styles.text, {color: textColor}]}>Hello App</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, // Makes the container take up all available space
//     // backgroundColor: 'dark',
//     justifyContent: 'center', // Centers children vertically 
//     alignItems: 'center', // Centers children horizontally
//   },
//   text: {
//     color: 'black',
//     fontSize: 30,
//     fontWeight: '800'
//   }
// });
// const btnStyles = StyleSheet.create({
//   container: {
//     padding: 20,
//     paddingTop: 10,
//     backgroundColor: "skyblue",
//     borderRadius: 5,
//     margin: 10
//   }
// })
// export default App

// <SafeAreaView style={styles.container}>
//   {/* <View style={styles.container}> */}
//     <Text style={{color:"red", fontSize:30, fontWeight:"800"}}>App21</Text>
//     <Image
//       source={{ uri: "https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
//       style={{
//         width: 200,
//         height: 200,
//         borderRadius: 100,
//         margin: 10,
//       }}
//     />
//     <Button title='Just Exploring ReactNative' />

//     {/* <TouchableOpacity 
//   style={btnStyles.container}
//   onPress={() => Alert.alert('This is not a normal btn what it does is basically provide a touchable effect')}>
//     <Text>onPress btn</Text>
//     </TouchableOpacity>
    
//     <TouchableOpacity 
//     style={{...btnStyles.container,backgroundColor:"red",}}
//     onLongPress={() => Alert.alert('This is not a normal btn what it does is basically provide a touchable effect of longPress}')}>
//     <Text>onLongPress btn</Text>
//     </TouchableOpacity> */}
//     <Pressable
//       style={btnStyles.container}
//       onPress={() => Alert.alert('This is not a normal btn what it does is basically provide a touchable effect')}
//     >
//       <Text>Pressable btn</Text>
//     </Pressable>
//   {/* </View> */}

// </SafeAreaView>