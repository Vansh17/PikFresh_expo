import { DrawerActions, DrawerRouter, NavigationContainer } from "@react-navigation/native";
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
  // import { createDrawerNavigator } from "@react-navigation/drawer";
  // import { NavigationContainer } from "@react-navigation/native";
  // import { ImageBackground } from "react-native";
// import CustomButton from '../utils/CustomButton';

// import AsyncStorage from "@react-native-async-storage/async-storage";
// import SQLite from 'react-native-sqlite-storage';
// import { useSelector, useDispatch } from "react-redux";
// import { setName,setAge } from "../redux/actions";
// import PushNotification from "react-native-push-notification";

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

  export default function AppleQuestion3({navigation,route})
  {

    const optionapple31="Less"
    const optionapple32="More"
    const optionapple33="No"
    return (
        <View
          style={styles.container}
        >    
        <View style={[styles.card, styles.shadowProp]}>  
          <Text style={styles.header}>  
            Apple
          </Text>  
        </View>

          <View style={styles.textview}>

            
            <View style={styles.boxcontent}>
            <Pressable style={styles.boxnumber}>
                    <Text style={styles.textnumber}>3</Text>
              </Pressable>
              <Text style={styles.question}>
                    What amount of spots and patches do you observe?
              </Text>
              <Pressable style={styles.box1}
              onPress={()=>navigation.navigate('AppleQuestion4',{
                paramKey4:route.params.paramKey2,
                paramKey5:route.params.paramKey3,
                paramKey6:optionapple31
               })}
              >
                    <Text style={styles.text1}>Less than half of fruit</Text>
              </Pressable>

              <Pressable style={styles.box2}
              onPress={()=>navigation.navigate('AppleQuestion4',{
                paramKey4:route.params.paramKey2,
                paramKey5:route.params.paramKey3,
                paramKey6:optionapple32
               })}
              >
                    <Text style={styles.text1}>More than half of fruit</Text>
            </Pressable>

            <Pressable style={styles.box3}
            onPress={()=>navigation.navigate('AppleQuestion4',{
              paramKey4:route.params.paramKey2,
              paramKey5:route.params.paramKey3,
              paramKey6:optionapple33
             })}
            >
                    <Text style={styles.text1}>No patches on fruit</Text>
            </Pressable>
            <Pressable style={styles.box5}>
                    <Text style={styles.text1}>Next</Text>
              </Pressable>
            </View>
          </View>

           <View style={styles.inner1}></View>
       </View>
    )
  }

  const styles = StyleSheet.create({
    header:{
        fontSize:28,
        color:'#ffffffff',
        fontFamily:'JosefinSans-SemiBold',
        textAlign:'center',
        padding:10,
        // marginBottom: 13,  
    },
    
    container:{
      flex:1,
      backgroundColor:"#6CA55D",
    },
    // contactview:{
    //   alignItems:"center",
    //   top:-80,
    // },
    textview: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      top: -750,
      left: -150,
      right: 0,
      bottom: -50,
    },
    boxcontent:{
      width:"50%",
      backgroundColor:"#ffffff",
      height:"30%",
      top:350,
      borderRadius:30,
      // position: 'absolute',
      // justifyContent: 'center',
      // alignItems: 'center',
      left:70,
    },
    box1:{
        width:"80%",
        backgroundColor:"#ffffff",
        height:"10%",
        top:130,
        borderRadius:30,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left:30,
        shadowColor: '#000000',  
        elevation: 30, 
        
    },
    box2:{
        width:"80%",
        backgroundColor:"#ffffff",
        height:"10%",
        top:200,
        borderRadius:30,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left:30,
        shadowColor: '#000000',  
        elevation: 30, 
        
    },

    box5:{
        width:112,
        backgroundColor:"#6CA55D",
        height:37,
        top:400,
        //borderRadius:30,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left:140,
        shadowColor: '#000000',  
        elevation: 30,       
    },
    boxnumber:{
        width:45,
        backgroundColor:"#ffffffff",
        height:37,
        top:0,
        //borderRadius:30,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left:120,
        shadowColor: '#000000',  
        elevation: 30,       
    },

    question:{
        fontSize:15,
        textAlign:"center",
        // position:"absolute",
        top:30,
        width:"100%",
        padding:20,
        color:"#000000",
        fontFamily:"JosefinSans-SemiBold"
    },
    box3:{
      width:"80%",
      backgroundColor:"#ffffff",
      height:"10%",
      top:270,
      borderRadius:30,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      left:30,
      shadowColor: '#000000',  
      elevation: 30, 
      
  },
    button:{
        backgroundColor:'#6CA55D',
        fontSize:15,
        textAlign:"center",
        // position:"absolute",
        alignSelf:'center',
        width:112,
        padding:20,
        color:"#000000",
        height:37,
        top:340,
        left:60,
        fontFamily:"JosefinSans-SemiBold",
        borderRadius:10,
    },
    // textbutton:{
    //     fontSize:15,
    //     color:'#000000',
    //     textAlign:'center',
    //     justifyContent:'center',
    //     alignSelf:'center',
    // },


    text1:{
        fontSize:15,
        color:'#000000',
        fontFamily:'JosefinSans-Bold',
        textAlign:'center',
        alignSelf:'center',
        justifyContent:'center'
    },
    textnumber:{
        fontSize:25,
        color:'#000000',
        fontFamily:'JosefinSans-SemiBold',
        textAlign:'center',
        alignSelf:'center',
        justifyContent:'center'
    },
    card: {  
        backgroundColor: '#6CA55D',  
        borderRadius: 8,  
        width: '100%',  
        marginVertical: 10, 
        width:360,
        height:73, 

      },  
      shadowProp: {  
        // shadowOffset: {width: -5, height: 4},  
        // shadowColor: '#000000',  
        shadowOpacity: 0.2,  
         shadowRadius: 3,  
        shadowColor: '#000000',  
        elevation: 30, 
        width:"100%", 
        
      },  

     
  })