// import { DrawerActions, DrawerRouter, NavigationContainer } from "@react-navigation/native";
// import React, { useState,useEffect } from "react";
// import {
//     StyleSheet,
//     Text,
//     View,
//     ScrollView,
//     Image,
//     Alert,
//     TextInput,
//     ImageBackground,
//     Button,
//     Pressable,
//     // CustomButton,
//   } from 'react-native';
//   // import { createDrawerNavigator } from "@react-navigation/drawer";
//   // import { NavigationContainer } from "@react-navigation/native";
//   // import { ImageBackground } from "react-native";
// // import CustomButton from '../utils/CustomButton';

// // import AsyncStorage from "@react-native-async-storage/async-storage";
// // import SQLite from 'react-native-sqlite-storage';
// // import { useSelector, useDispatch } from "react-redux";
// // import { setName,setAge } from "../redux/actions";
// // import PushNotification from "react-native-push-notification";

// // const db =SQLite.openDatabase(
// //     {
// //         name:'MainDB',
// //         location:'default',
// //     },
// //     ()=>{ },
// //     error=>{console.log(error)}
// // );
// // const Drawer = createDrawerNavigator();
// // const Drawer = createDrawerNavigator();

//   export default function SelectFruit({navigation})
//   {


//     return (

        
//         <ScrollView
//             style={styles.container}
//         >
//             <Text style={styles.text}>Fruits</Text>
//             <View style={styles.scroll}>
                
//                 <Text style={styles.text}>
//                     Select Fruit
//                 </Text>
//                 <Pressable style={styles.inner1} title={"Apple"} color={"#D9D9D9"} height={106}>
                    
//                 </Pressable>

//                 <Pressable style={styles.inner2} title={"Banana"} color={"#A7B7AE"}>
                    
//                 </Pressable>

//                 <Pressable style={styles.inner3} title={"Cherry"} color={"#9BCCA5"}>
                    
//                 </Pressable>
                
//             </View>
            
//        </ScrollView>

//     )
//   }

//   const styles = StyleSheet.create({
    
//     container:{
//       flex:1,
//       backgroundColor:"#6CA55D",
//     },
//     contain:{
//         backgroundColor:"#6CA55D",
//     },
//     scroll:{
//         backgroundColor:"#6CA55D",
//         top:20,
//         // flex:1,
//     },
//     inner1:{
//         backgroundColor:"#D9D9D9",
//         height:106,
//         width:313,
//         alignSelf:"center",
//         borderRadius:30,
//     },
    
//     inner2:{
//         backgroundColor:"#A7B7AE",
//         height:106,
//         width:313,
//         borderRadius:30,
//         top:70,
//         alignSelf:"center"
//     },
//     inner3:{
//         backgroundColor:"#9BCCA5",
//         height:106,
//         width:313,
//         borderRadius:30,
//         top:50,
//         alignSelf:"center"
//     },
//     // innerinner:{
//     //     backgroundColor:'#ffffff',
//     //     height:514,
//     //     top:30,
//     //     width:'100%',
//     //     borderRadius:40,

//     // },
//     text:{
//         fontSize:28,
//         color:'#000000',
//         fontFamily:'JosefinSans-SemiBold',
//         textAlign:'center',
//         top:10,
//         marginTop:20,
//         marginBottom:20,
//     },
//     // login_logo:{
//     //     width: 677,
//     //     height: 469,
//     //     left: -158,
//     //     top: -83,
//     //     marginBottom:-450,
//     //     alignItems:'center',
        
//     // },
//     // textmail:{
//     //     fontFamily:'JosefinSans-SemiBold',
//     //     color:'#000000',
//     //     top:30,
//     //     left:58,
//     //     fontSize:25,
//     //     padding:5,
//     // },
//     // input:{
//     //     top:30,
//     //     borderColor:'#9BCCA5',
//     //     borderWidth:1,
//     //     borderRadius:15,
//     //     width:'70%',
//     //     left:55,
//     // },
//     // forget:{
//     //     fontFamily:'JosefinSans-SemiBold',
//     //     color:'#000000',
//     //     left:60,
//     //     top:35,
//     //     fontSize:15,
//     // },
//     // button:{
//     //     backgroundColor:"#9BCCA5",
//     //     borderRadius:15,
//     //     top:65,
//     //     width: 146,
//     //     height: 48,
//     //     left: 120,
//     //     alignItems:'center',

//     // },
//     // stylebutton:{
//     //     fontFamily:'JosefinSans-SemiBold',
//     //     fontSize:20,
//     //     color:'#000000',
//     //     textAlign:'center',
//     //     top:9,
//     // },
//     // textnew:{
//     //     color:'#000000',
//     //     textAlign:'center',
//     //     top:70,
//     //     fontFamily:'JosefinSans-SemiBold',
//     //     textAlign:'center',
//     // }

    
     
//   })

// *********************************************************************************************************
// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   ScrollView,
//   RefreshControl,
//   Button,
// } from 'react-native';
// import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

// // const SelectFruit = () => {
// export default function SelectFruit({navigation})
// {


// //   const [Items, setItems] = useState([ 
// //     { key: 1, item: 'Apple' },
// //     { key: 2, item: 'Banana' },
// //     { key: 3, item: 'Cherry' },
// //     { key: 4, item: 'Chickoo' },
// //     { key: 5, item: 'Mango' },
// //     { key: 6, item: 'Watermelon' },
// //     { key: 7, item: 'Papaya' },
// //     { key: 8, item: 'Tomato' },
// //     { key: 44, item: 'Pineapple' },
// //     { key: 68, item: 'Lichi' },
// //     { key: 0, item: 'Orange' },
// //   ]);
// //   const [Refreshing, setRefreshing] = useState(false);

// //   const onRefresh = () => {
// //     setRefreshing(true);
// //     setItems([...Items, { key: 69, item: 'Item 69' }]);
// //     setRefreshing(false);
// //   }

//   return (
    
 
//     <ScrollView
//       style={styles.body}
//     //   refreshControl={
//     //     <RefreshControl
//     //       refreshing={Refreshing}
//     //       onRefresh={onRefresh}
//     //       colors={['#ff00ff']}
//     //     />
//     //   }
//     >
//         <View style={[styles.card, styles.shadowProp]}>  
//           <Text style={styles.header}>  
//             Select Fruits
//           </Text>  
//         </View>
//         <View style={styles.buttons}>
//           <Button title={"Apple"} color="#D9D9D9" >
//           </Button>
//         </View>
        
        
        

        
//         {/* <Text style={styles.headerin}>Fruit</Text> */}
//       {/* {
//         Items.map((object) => {
//           return (
//             <View style={styles.item} key={object.key}>
//               <Text style={styles.text}>{object.item}</Text>
//             </View>
//           )
//         })
//       } */}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//     header:{
//         fontSize:28,
//         color:'#ffffffff',
//         fontFamily:'JosefinSans-SemiBold',
//         textAlign:'center',
//         padding:10,
//         // marginBottom: 13,  
//     },
//     buttons:{
//       width:"80%",
//       alignSelf:"center",
//       borderRadius:50,
//     },
//     fruit:{
//       backgroundColor:"#D9D9D9",
//       width:"80%",
//       height:"50%",
//       alignSelf:"center",
//       borderRadius:12,
//       top:20,
//     },
//     text1:{
//       fontSize:28,
//       alignSelf:"center",
//     },
//     headerin:{
//         fontSize:28,
//         color:'#ffffffff',
//         fontFamily:'JosefinSans-SemiBold',
//         textAlign:'left',
//         padding:10,
//     },
//   body: {
//     // flex: 1,
//     // flexDirection: 'column',
//     backgroundColor: '#6CA55D',
//   },
//   item: {
//     margin: 10,
//     backgroundColor: '#D9D9D9',
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf:'center',
//     height: 106,
//     width:316,
//     borderRadius:25,
//   },
//   text: {
//     color: '#000000',
//     margin: 10,
//     fontSize:28,
//     fontFamily:'JosefinSans-SemiBold',
//     textAlign:'center',

//   },
//   card: {  
//     backgroundColor: '#6CA55D',  
//     borderRadius: 8,  
//     width: '100%',  
//     marginVertical: 10, 
//     // width:360,
//     height:73, 
   

//   },  
//   shadowProp: {  
//     // shadowOffset: {width: -5, height: 4},  
//     // shadowColor: '#000000',  
//     // shadowOpacity: 0.2,  
//     // shadowRadius: 3,  
//     shadowColor: '#000000',  
//     elevation: 30, 
//     width:"100%", 

//   },  
// });

// **********************************************************************************
// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   ScrollView,
//   RefreshControl,
//   TouchableOpacity,
//   TurboModuleRegistry,
// } from 'react-native';

// const SelectFruit = () => {
// //   const onPressHandler = () => {
// //     navigation.navigate('Main')
// //     //navigation.goBack();
// // }
  

//   const [Items, setItems] = useState([
//     { key: 1, item: 'Apple' },
//     { key: 2, item: 'Banana' },
//     { key: 3, item: 'Cherry' },
//     { key: 4, item: 'Chickoo' },
//     { key: 5, item: 'Mango' },
//     { key: 6, item: 'Watermelon' },
//     { key: 7, item: 'Papaya' },
//     { key: 8, item: 'Tomato' },
//     { key: 44, item: 'Pineapple' },
//     { key: 68, item: 'Lichi' },
//     { key: 0, item: 'Orange' },
//   ]);
//   const [Refreshing, setRefreshing] = useState(false);

// //   const onRefresh = () => {
// //     setRefreshing(true);
// //     setItems([...Items, { key: 69, item: 'Item 69' }]);
// //     setRefreshing(false);
// //   }
//   const recordVideo=()=>{
//     navigation.navigate("camera")
//   }

//   return (
    
 
//     <ScrollView
//       style={styles.body}
//     //   refreshControl={
//     //     <RefreshControl
//     //       refreshing={Refreshing}
//     //       onRefresh={onRefresh}
//     //       colors={['#ff00ff']}
//     //     />
//     //   }
//     >
//           <View style={[styles.card, styles.shadowProp]}>  
//           <Text style={styles.header}>  
//             Select Fruits
//           </Text>  
//         </View>
        
//         {/* <Text style={styles.headerin}>Fruit</Text> */}
//       {/* {
//         Items.map((object) => {
//           return (
//             <View style={styles.item} key={object.key}>
//               <Text style={styles.text}>{object.item}</Text>
//             </View>
//           )
//         })
//       } */}
//       <View style={styles.container}>
//           <TouchableOpacity style={styles.item} onPress={()=>recordVideo}>
//             <Text style={styles.text}>
//               Apple
//             </Text>

//           </TouchableOpacity>

//           <TouchableOpacity style={styles.item}>
//             <Text style={styles.text}>
//               Banana
//             </Text>

//           </TouchableOpacity>

//           <TouchableOpacity style={styles.item}>
//             <Text style={styles.text}>
//               Mango
//             </Text>

//           </TouchableOpacity>

//           <TouchableOpacity style={styles.item}>
//             <Text style={styles.text}>
//               Kiwi
//             </Text>

//           </TouchableOpacity>

//           <TouchableOpacity style={styles.item}>
//             <Text style={styles.text}>
//               Orange
//             </Text>

//           </TouchableOpacity>

//           <TouchableOpacity style={styles.item}>
//             <Text style={styles.text}>
//               Watermelon
//             </Text>

//           </TouchableOpacity>

//           <TouchableOpacity style={styles.item}>
//             <Text style={styles.text}>
//               Tomaato
//             </Text>

//           </TouchableOpacity>

//           <TouchableOpacity style={styles.item}>
//             <Text style={styles.text}>
//               Grapes
//             </Text>

//           </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//     header:{
//         fontSize:28,
//         color:'#ffffffff',
//         fontFamily:'JosefinSans-SemiBold',
//         textAlign:'center',
//         padding:10,
//         // marginBottom: 13,  
//     },
//     // headerin:{
//     //     fontSize:28,
//     //     color:'#ffffffff',
//     //     fontFamily:'JosefinSans-SemiBold',
//     //     textAlign:'left',
//     //     padding:10,
//     // },
//   body: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#6CA55D',
//   },
//   item: {
//     margin: 10,
//     backgroundColor: '#D9D9D9',
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf:'center',
//     height: 106,
//     width:316,
//     borderRadius:15,
//   },
//   text: {
//     color: '#000000',
//     margin: 10,
//     fontSize:28,
//     fontFamily:'JosefinSans-SemiBold',
//     textAlign:'center',

//   },
//   card: {  
//     backgroundColor: '#6CA55D',  
//     borderRadius: 8,  
//     width: '100%',  
//     marginVertical: 10, 
//     width:360,
//     height:73, 
   

//   },  
//   shadowProp: {  
//     // shadowOffset: {width: -5, height: 4},  
//     // shadowColor: '#000000',  
//     // shadowOpacity: 0.2,  
//     // shadowRadius: 3,  
//     shadowColor: '#000000',  
//     elevation: 30, 
//     width:"100%", 
//     //alignSelf:'top',
//   },  
// });

// export default SelectFruit;

// ****************************************************************
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SelectFruit = ({navigation}) => {
const recordVideoapple=()=>{
  navigation.navigate("Recorder",{
    paramkeyapple:seclectapple
  })
};

const recordVideobanana=()=>{
  navigation.navigate("Recorder",{
    paramkeyapple:selectbanana
  })
};


const seclectapple="apple"
const selectbanana="banana"

  return (
    
 
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.item} 
        onPress={()=>recordVideoapple()}>
          <Text style={styles.text}>
            Apple
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>
            Mango
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}
        onPress={()=>recordVideobanana()}
        >
          <Text style={styles.text}>
            Banana
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>
            Tomato
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>
            Orange
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>
            Banana
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>
            Watermelon
          </Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    header:{
        fontSize:28,
        color:'#ffffffff',
        fontFamily:'JosefinSans-SemiBold',
        textAlign:'center',
        padding:10,
        // marginBottom: 13,  
    },
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#6CA55D',
  },
  item: {
    margin: 10,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    height: 106,
    width:316,
    borderRadius:15,
  },
  text: {
    color: '#000000',
    margin: 10,
    fontSize:28,
    fontFamily:'JosefinSans-SemiBold',
    textAlign:'center',

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
    // shadowOpacity: 0.2,  
    // shadowRadius: 3,  
    shadowColor: '#000000',  
    elevation: 30, 
    width:"100%", 
    //alignSelf:'top',
  }, 
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#6CA55D',  
  } 
});

export default SelectFruit;