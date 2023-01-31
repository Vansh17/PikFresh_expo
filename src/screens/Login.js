import { DrawerActions, DrawerRouter, getFocusedRouteNameFromRoute, NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { useState,useEffect } from "react";
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
    // CustomButton,
  } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFonts } from 'expo-font';

  // import { createDrawerNavigator } from "@react-navigation/drawer";
  // import { NavigationContainer } from "@react-navigation/native";
  // import { ImageBackground } from "react-native";
// import CustomButton from '../utils/CustomButton';

// import AsyncStorage from "@react-native-async-storage/async-storage";
// import SQLite from 'react-native-sqlite-storage';
// import { useSelector, useDispatch } from "react-redux";
// import { setName,setAge } from "../redux/actions";
// import PushNotification from "react-native-push-notification";
import { firebase } from '../../config';
// import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
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
// let customFonts = {
//     'JosefinSans-SemiBold': require('../../assets/fonts/JosefinSans-SemiBold.ttf'),
//     // 'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
//   };
  export default function Login({})
  {
    // const [fontsLoaded] = useFonts({
    //     'JosefinSans-SemiBold': require('../../assets/fonts/JosefinSans-SemiBold.ttf'),
    //   });

    const onPressHandlerSignup=()=>{
        navigation.navigate('CreateAccount')
      }

    
    const navigation = useNavigation()
      const [email,setEmail] = useState('');
      const[password,setPassword]=useState('');

      const loginUser= async (email,password)=>{
        try{
            await firebase.auth().signInWithEmailAndPassword(email,password)
            
        } catch(error){
            alert(error.message)
        }
      
    }

    const forgetPassword=()=>{
        firebase.auth().sendPasswordResetEmail(email)
        .then(()=>{
            alert("Password reset email sent")
        }).catch((error)=>{
            alert(error)
        })
    }

    // state = {
    //     fontsLoaded: false,
    //   };
    
    //   async _loadFontsAsync() {
    //     await Font.loadAsync(customFonts);
    //     this.setState({ fontsLoaded: true });
    //   }
    
    //   componentDidMount() {
    //     this._loadFontsAsync();
    //   }
    
    //   render() {
    //     if (!this.state.fontsLoaded) {
    //       return null;
    //     }
    const [loaded]=useFonts({
        BreeSerif:require('../../assets/fonts/BreeSerif-Regular.ttf')
      })
  
      if(!loaded)
      {
        return null;
      }

    return (

      
        <View
            style={styles.container}
        >
            <Image style={styles.login_logo}  source = {require('../../assets/1.png')}/>
            
          <View style={styles.inner}>
            <Text style={styles.text}>
                Login to your Account
            </Text>
            <View style={styles.innerinner}>
                <Text style={styles.textmail}>
                    Email:
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(email)=> setEmail(email)}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Text style={styles.textmail}>
                    Password:
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="password"
                    onChangeText={(password)=> setPassword(password)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                {/* <Pressable
                    // onPress={onPressHandlerForget}
                >
                    <Text style={styles.forget}>
                        Forget Password
                    </Text>
                </Pressable> */}
                <TouchableOpacity 
                    onPress={()=> {forgetPassword()}}
                    style={styles.button2}
                >
                    
                    <Text style={styles.forget}>Forgot Password</Text>
                </TouchableOpacity>
                <Pressable style={styles.button}
                    onPress={()=> loginUser(email,password)}
                    
                >
                    
                    <Text style={styles.stylebutton}>Login</Text>
                </Pressable>
                <Text style={styles.textnew}>
                    New User? 
                </Text>
                <Pressable
                    onPress={onPressHandlerSignup}
                    style={styles.button1}
                >
                    <Text style={styles.text1}>Sign Up</Text>
                </Pressable>
            </View>
          </View>
       </View>

    )
  }
//   }
  const styles = StyleSheet.create({
    
    container:{
      flex:1,
      backgroundColor:"#2b463c",
    },
    text1:{
        color:"#000000",
        fontFamily:'BreeSerif',
        textAlign:'center',
        top:0,
        left:40,
    },
    button2:{
        // marginTop:10,
        top:45,
        height:'20%',
        backgroundColor:'#00bcd4'
    },
    button1:{
        marginTop:80,
        backgroundColor:'#00bcd4'
    },
    inner:{
        backgroundColor:"#D9D9D9",
        height:568,
        width:'100%',
        borderRadius:40,
        top:250,
    },
    innerinner:{
        backgroundColor:'#ffffff',
        height:514,
        top:30,
        width:'100%',
        borderRadius:40,

    },
    text:{
        fontSize:28,
        color:'#000000',
        fontFamily:'BreeSerif',
        textAlign:'center',
        top:10,
    },
    login_logo:{
        width: '60%',
        height: '40%',
        left: 70,
        top: -5,
        marginBottom:-320,
        alignItems:'center',
        
    },
    textmail:{
        fontFamily:'BreeSerif',
        color:'#000000',
        top:30,
        left:40,
        fontSize:25,
        padding:15,
    },
    input:{
        top:30,
        borderColor:'#9BCCA5',
        borderWidth:1,
        borderRadius:15,
        width:'70%',
        height:50,
        left:55,
    },
    forget:{
        fontFamily:'BreeSerif',
        color:'#000000',
        left:35,
        top:20,
        fontSize:15,
        padding:20,
        // backgroundColor: '#00bcd4',
    },
    button:{
        backgroundColor:"#9BCCA5",
        borderRadius:15,
        top:45,
        width: 146,
        height: 48,
        left: 120,
        alignItems:'center',
        
    },
    stylebutton:{
        fontFamily:'BreeSerif',
        fontSize:20,
        color:'#000000',
        textAlign:'center',
        top:9,
        backgroundColor:'#00bcd4',
        width:'100%',
        height:'120%',
    },
    textnew:{
        color:'#000000',
        textAlign:'center',
        top:90,
        fontFamily:'BreeSerif',
        textAlign:'center',
        left:-30,
    }

    
     
  })
