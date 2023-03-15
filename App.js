

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState, useEffect} from 'react';
//  import type  from 'react';
 import {
   Button,
   FlatList,
   Linking,
   RefreshControl,
   SafeAreaView,
   ScrollView,
   SectionList,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TextInput,
   TouchableOpacity,
   Pressable,
   Alert,
   ToastAndroid,
   Modal,
   Image,
   ImageBackground,
  // Button
 } from 'react-native';
// import ScreenA  from './src/screens/ScreenA';
// import ScreenB from './src/screens/ScreenB';


//  import {
//    Colors,
//    DebugInstructions,
//    Header,
//    LearnMoreLinks,
//    ReloadInstructions,
//  } from 'react-native/Libraries/NewAppScreen';

import { firebase } from './config';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VanshButton from './src/utils/CustomButton';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Home from './src/screens/Home';
import Main from './src/screens/Main';
import Login from './src/screens/Login';
import CreateAccount from './src/screens/CreateAccount';
import Recorder from './src/screens/Recorder';
// import { Provider } from 'react-redux';
// import  {Store}  from './src/redux/store';
// import Map from './src/screens/Map';
// import Camera from './src/screens/Camera';
import 'react-native-gesture-handler';
import SelectFruit from './src/screens/SelectFruit';
import ForgetPassword from './src/screens/ForgetPassword';
import Verification from './src/screens/Verification';
import Support from './src/screens/Support';
import Question from './src/screens/Question';
import BananaQuestion1 from './src/screens/BananaQuestion1';
import BananaQuestion2 from './src/screens/BananaQuestion2';
import BananaQuestion3 from './src/screens/BananaQuestion3';
import AppleQuestion3 from './src/screens/AppleQuestion3';
import AppleQuestion2 from './src/screens/AppleQuestion2';
import AppleQuestion4 from './src/screens/AppleQuestion4';
import Dashboard from './src/screens/Dashboard';
import ReportBanana from './src/screens/ReportBanana';
import ReportApple from './src/screens/ReportApple';
// const Tab=createBottomTabNavigator();
// const Tab=createMaterialBottomTabNavigator();
// const Tab=createMaterialTopTabNavigator();
const Stack=createStackNavigator();

// const Drawer = createDrawerNavigator();
function App()
{

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user)
  {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(()=>{
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

 if (initializing) return null;

 if(!user)
 {
   return(
 
     <NavigationContainer >
       <Stack.Navigator
 
         initialRouteName='Login'
 
         screenOptions={{
           headerShown:true,
           swipeEnabled:true,
           gestureEnabled:true,
           headerTitleAlign:'center',
           headerStyle:{
             backgroundColor:'#0080ff'
           },
           headerTintColor:'#ffffff',
           headerTitleStyle:{
             fontSize:25,
             fontWeight:'bold',
           }
         }}
       >
       {/* <AnnuButton
         onPressFunction={onPressHandler}
         title={submitted?'clear':'submit'}
         color={'#00ff00'}
       />
 
       <AnnuButton
         onPressFunction={()=> {}}
         title={'Test'}
         color={'#ff00ff'}
         style={{margin:10}}
       />
         <Pressable
         onPress={onPressHandler}
         hitSlop={{top:10,bottom:10,right:10,left:10}}
         android_ripple={{color:'#771'}}
         style={({pressed}) =>[
           {backgroundColor:pressed?'#dddddd':'#005997'},
           styles.button
         ]}
       >
         <Text style={styles.text}>
           {submitted ? 'clear':'submit'}
         </Text>
       </Pressable> */}
       
         <Stack.Screen
           name="Dashboard"
           component ={Dashboard}
           options={{
             headerShown:false
           }}
         />
         <Stack.Screen
           name="Support"
           component ={Support}
           options={{
             headerShown:false
           }}
         />
         <Stack.Screen
           name="SelectFruit"
           component ={SelectFruit}
           options={{
             headerShown:false
           }}
         />
         <Stack.Screen
           name="Login"
           component ={Login}
           options={{
             headerShown:false
 
           }}
         />
         <Stack.Screen
           name="CreateAccount"
           component ={CreateAccount}
           options={{
             headerShown:false
           }}
         />
         <Stack.Screen
           name="ForgetPassword"
           component ={ForgetPassword}
           options={{
             headerShown:false
           }}
         />
         <Stack.Screen
           name="Recorder"
           component ={Recorder}
           options={{
             headerShown:false
           }}
         />
 
 
       </Stack.Navigator>
     </NavigationContainer>
 
 );
 }
 return(
   <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen
            name="Main"
            component ={Main}
            options={{
            headerShown:false
           }}
     />
     <Stack.Screen
            name="ForgetPassword"
            component ={ForgetPassword}
            options={{
            headerShown:false
           }}
     />
     <Stack.Screen
            name="Support"
            component ={Support}
            options={{
            headerShown:false
           }}
     />
     <Stack.Screen
            name="SelectFruit"
            component ={SelectFruit}
            options={{
            headerShown:false
           }}
     />
     <Stack.Screen
            name="Recorder"
            component ={Recorder}
            options={{
            headerShown:false
           }}
     />

    <Stack.Screen
            name="Question"
            component ={Question}
            options={{
            headerShown:false
           }}
     />
     <Stack.Screen
            name="BananaQuestion1"
            component ={BananaQuestion1}
            options={{
            headerShown:false
           }}
     />
     <Stack.Screen
            name="ReportBanana"
            component ={ReportBanana}
            options={{
            headerShown:false
           }}
     />
     <Stack.Screen
            name="ReportApple"
            component ={ReportApple}
            options={{
            headerShown:false
           }}
     />
     <Stack.Screen
            name="BananaQuestion2"
            component ={BananaQuestion2}
            options={{
            headerShown:false
           }}
     />
     <Stack.Screen
            name="BananaQuestion3"
            component ={BananaQuestion3}
            options={{
            headerShown:false
           }}
     />
     <Stack.Screen
            name="AppleQuestion2"
            component ={AppleQuestion2}
            options={{
            headerShown:false
           }}
     />
     <Stack.Screen
            name="AppleQuestion3"
            component ={AppleQuestion3}
            options={{
            headerShown:false
           }}
     />
     <Stack.Screen
            name="AppleQuestion4"
            component ={AppleQuestion4}
            options={{
            headerShown:false
           }}
     />
     </Stack.Navigator>
   </NavigationContainer>
 )
 
 }




//  *********************************************************************
//   return(
//     // <Provider  store={Store}>
//       <NavigationContainer>
//         <Stack.Navigator
//           // screenOptions={({route })=>({
//           //   tabBarIcon: ({focused,size,color})=>{
//           //     let iconName;
//           //     if (route.name==='ScreenA')
//           //     {
//           //       iconName='autoprefixer';
//           //       size=focused ? 25:20;
//           //       color=focused?'#f0f' :'#555';
//           //     } else if(route.name==='ScreenB'){
//           //       iconName='btc';
//           //       size=focused ? 25:20;
//           //       color=focused?'#f0f' :'#555';
//           //     }
//           //     return (
//           //       <FontAwesome5
//           //         name={iconName}
//           //         size={size}
//           //         color={color}
//           //       />  
//           //     )
//           //   }
//           // })}
//           // tabBarOptions={{
//           //   activeTintColor:'#f0f',
//           //   inactiveTintColor:'#555',
//           //   activeBackgroundColor:'#fff',
//           //   inactiveBackgroundColor:'#999',
//           //   showLabel:true,
//           //   labelStyle:{fontSize:14},
//           // }}
//           // activeColor='#f0edf6'
//           // inactiveColor='#3e2465'
//           // barStyle={{backgroundColor:'#694fad'}}
//           initialRouteName='Dashboard'
//           // drawerPosition='left'
//           // drawerType="front"
//           // edgeWidth={100}
//           // hideStatusBar={false}
//           // overlayColor='#00000090'
//           // drawerStyle={{
//           //   backgroundColor:'#6e6',
//           //   width:350,
//           // }}
//           screenOptions={{
//             headerShown:true,
//             swipeEnabled:true,
//             gestureEnabled:true,
//             headerTitleAlign:'center',
//             headerStyle:{
//               backgroundColor:'#0080ff'
//             },
//             headerTintColor:'#ffffff',
//             headerTitleStyle:{
//               fontSize:25,
//               fontWeight:'bold',
//             }
//           }}
//         >
//     {/* <VanshButton
//        onPressFunction={onPressHandler}
//        title={submitted ? 'Clear' : 'Submit'}
//        color={'#00ff00'}
//      />
//      <VanshButton
//        onPressFunction={()=>{ }}
//        title={'Test'}
//        color={'#ffcd00'}
//        style={{margin:10}}
//      />
//      <Pressable
//        onPress={onPressHandler}
//        hitSlop={{top:10,bottom:10,right:10,left:10}}
//        android_ripple={{color:'#00f'}}
//        style={({pressed})=>[
//          {backgroundColor:pressed ? '#dddddd' : '#00ffff'},
//          styles.button
//        ]}
       
//      >
//        <Text style={styles.text}>
//          {submitted ? 'Clear':'Submit'}
//        </Text>
//      </Pressable> */}
     
//           <Stack.Screen
//             name="Main"
//             component ={Main}
//             options={{
//               headerShown:false
           
//             }}
//           />
//           <Stack.Screen
//             name="Support"
//             component ={Support}
//             options={{
//               headerShown:false
          
//             }}
//           />

//         <Stack.Screen
//             name="SelectFruit"
//             component ={SelectFruit}
//             options={{
//               headerShown:false
            
//             }}
//           />

//         <Stack.Screen
//             name="Login"
//             component ={Login}
//             options={{
//               headerShown:false
           
//             }}
//           />

//         <Stack.Screen
//             name="CreateAccount"
//             component ={CreateAccount}
//             options={{
//               headerShown:false
            
//             }}
//           />

//       <Stack.Screen
//             name="ForgetPassword"
//             component ={ForgetPassword}
//             options={{
//               headerShown:false
            
//             }}
//           />

//         <Stack.Screen
//             name="Recorder"
//             component ={Recorder}
//             options={{
//               headerShown:false
            
//             }}
//           />
          
//           <Stack.Screen
//             name="Dashboard"
//             component ={Dashboard}
//             options={{
//               headerShown:false
           
//             }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
   
//   )
// }

export default App;