import { DrawerActions, DrawerRouter, NavigationContainer } from "@react-navigation/native";
import React, { useState,useEffect } from "react";
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    TextInput,
    ImageBackground,
    Button,
    Pressable,
    TouchableOpacity,
    // CustomButton,
  } from 'react-native';
//   import Support from "./Support";
//   import { Camera, CameraType } from "expo-camera";
  // import { createDrawerNavigator } from "@react-navigation/drawer";
  // import { NavigationContainer } from "@react-navigation/native";
  // import { ImageBackground } from "react-native";
// import CustomButton from '../utils/CustomButton';

// import AsyncStorage from "@react-native-async-storage/async-storage";
// import SQLite from 'react-native-sqlite-storage';
// import { useSelector, useDispatch } from "react-redux";
// import { setName,setAge } from "../redux/actions";
// import PushNotification from "react-native-push-notification";
import firebase from "firebase/compat";
import { AutoFocus } from "expo-camera";
// import { useFonts } from 'expo-font';

// const db =SQLite.openDatabase(
//     {
//         name:'MainDB',
//         location:'default',
//     },
//     ()=>{ },
//     error=>{console.log(error)}
// );
// const Drawer = createDrawerNavigator();
// const Drawer = createDrawerNavigator();

  export default function Main({navigation})
  {
    const onPressHandler2=()=>{
      navigation.navigate('Support')
    }
    const onPressHandler1=()=>{
      navigation.navigate('SelectFruit')
    }
    const onPressHandlerlogin=()=>{
      navigation.navigate('Login')
    }
    

    const[name,setNames]=useState('')
    useEffect(()=>{
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid).get()
        .then((snapshot)=>{
            if(snapshot.exists){
                setNames(snapshot.data())
            }
            else{
                console.log('User does not exists!')
            }
        })
    },[])
    
    const [loaded]=useFonts({
      OleoScriptRegular:require('../../assets/fonts/OleoScript-Regular.ttf'),
      JosefinSansSemiBold:require('../../assets/fonts/JosefinSans-SemiBold.ttf')
    })

    if(!loaded)
    {
      return null;
    }

    return (
        <View
        style={styles.container}
        >
          
          <ImageBackground
        style={styles.img}
        source={require('../../assets/Home3.png')}
        // resizeMode="cover"
      >
        <Text style={{fontSize:20, fontWeight:'bold',top:50,left:250,}}
      
      >Hello, {name.name}</Text>
        {/* <Pressable style={styles.login}
        onPress={onPressHandlerlogin}
        >
       

          <Text style={styles.loginbutton}>Login</Text>
        </Pressable> */}
          
            <Text style={styles.title}>
                PikFresh
            </Text>
            <Text style={styles.goodq}>
                ~A future to good quality~
            </Text>
            {/* <Pressable style={styles.button} >
          <Text style={styles.stylebutton}>Scan</Text>
        </Pressable> */}
      
        <Pressable style={styles.button1}
        onPress={onPressHandler1}
        >
          <Image style={styles.logo}  source = {require('../../assets/scan_img.png')}/>
          <Text style={styles.stylebutton1}>Scan</Text>
        </Pressable>
        
        <Pressable style={styles.button3} 
        onPress={onPressHandler2}
        >
        <Image style={styles.logo}  source = {require('../../assets/support_img.png')}/>
          <Text style={styles.stylebutton3}>Support</Text>
        </Pressable>

        <TouchableOpacity 
            onPress={()=>{firebase.auth().signOut()}}
            style={styles.buttons}
        >
            <Text style={styles.signouts}>
                Sign Out
            </Text>
      </TouchableOpacity>

        
            
            </ImageBackground>
            {/* <CustomButton
             title="Scan"
             color="#1eb900"
            /> */}
            {/* </Drawer> */}
       </View>
    //    </Drawer.Navigator>
    //    </NavigationContainer>
    )
  }

  const styles = StyleSheet.create({
    title:{
        textAlign:"center",
        color:"#0B5635",
        fontSize:48,
        fontFamily:'OleoScriptRegular',
        marginTop:80,
        
    },
    signouts:{
      fontSize:22,
      fontWeight:'bold',
      fontFamily:'JosefinSansSemiBold',
    },
    img:{
      height: '100%',
      width:'100%',
      // top:45,
    },
    container:{
      flex:1,
    },
    goodq:{
      marginLeft:160,
      color:"#0B5635",
        fontSize:20,
        fontFamily:'OleoScriptRegular',
        // fontWeight:"200",
    },
    button:{
      fontFamily:'OleoScriptRegular',
      
    },
    buttons:{
      marginTop:50,
        height:70,
        width:250,
        backgroundColor:'#9BCCA5',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        left:65,
    },
    stylebutton:{
      fontSize:36,
      fontFamily:'OleoScriptRegular',
      alignItems: 'center',
      justifyContent: 'center',
    },
    

    stylebutton1:{
      //flex:1,
      bottom:55,
      color:"#0B5635",
      marginRight:170,
      fontSize:36,
      fontFamily:'OleoScriptRegular',
      marginBottom:10,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    stylebutton2:{
      //flex:1,
      bottom:60,
      color:"#0B5635",
      fontSize:36,
      marginRight:130,
      fontFamily:'OleoScriptRegular',
      textAlign:'left',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    stylebutton3:{
      //flex:1,
      bottom:60,
      color:"#0B5635",
      marginRight:125,
      fontSize:36,
      fontFamily:'OleoScriptRegular',
      textAlign:'left',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    button1: {
      textAlign:'left',
      backgroundColor:"#9bcca5",
      fontSize:36,
      fontFamily:'OleoScriptRegular',
      alignItems: 'center',
      justifyContent: 'center',
      width:316,
      height:91,
      marginTop:170,
      marginLeft:30,
      marginRight:50,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius:20,
    },
    button2: {
      backgroundColor:"#9bcca5",
      fontSize:36,
      fontFamily:'OleoScriptRegular',
      alignItems: 'center',
      justifyContent: 'center',
      width:316,
      height:91,
      //flexDirection: "centr",
      marginTop:25,
      marginLeft:30,
      marginRight:50,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius:20,
    },
    button3: {
      backgroundColor:"#9bcca5",
      fontSize:36,
      fontFamily:'OleoScriptRegular',
      alignItems: 'center',
      justifyContent: 'center',
      width:316,
      height:91,
      //flexDirection: "centr",
      marginTop:25,
      marginLeft:30,
      marginRight:50,
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius:20,
    },

    logo:{
      width:58,
      height:62,
      marginLeft:225,
      marginTop:50,
    },
    login:{
      // backgroundColor:"#ffffff",
      top:50,
    },
    loginbutton:{
      color:"#000000",
      fontFamily:'OleoScriptRegular',
      fontSize:22,
      height:45,
      width:100,
      left:310,
    },
    
  })
