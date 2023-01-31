import { View, Text ,Alert,StyleSheet,Image} from 'react-native'
import React, { useState } from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { render } from 'react-dom';

const ReportApple = ({route}) => {
  // let var1;
  if(route.params.paramKey7=="Soft")
  {
    if(route.params.paramKey8=="Red" || route.params.paramKey8=="Darkred")
    {
        if(route.params.paramKey9=="Less" || route.params.paramKey9=="More" || route.params.paramKey9=="No")
        {
            if(route.params.paramKey10=="no")
            {
                return (
                    <View style={styles.container}>
                      <View style={[styles.card, styles.shadowProp]}>  
                        <Text style={styles.header}>  
                          Banana
                        </Text>  
                      </View>
                      <View style={styles.logo}>
                      <Image style={styles.banana_logo}  source = {require('../../assets/banana_img.jpeg')}/>
                      </View>
                      <View style={styles.boxcontent}>
                      <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                            <Text style={styles.reporttxt}>Not Recommneded to buy- ADULTERATED</Text>
                            <Text style={styles.reporttxt}>Expected Survival: 1 Week</Text>
                            <Text style={styles.reporttxt}>Refrigerate: Yes</Text>
                      </View>
                    </View>
                   )
            }
            else if(route.params.paramKey10=="yes")
            {
                return (
                    <View style={styles.container}>
                      <View style={[styles.card, styles.shadowProp]}>  
                        <Text style={styles.header}>  
                          Banana
                        </Text>  
                      </View>
                      <View style={styles.logo}>
                      <Image style={styles.banana_logo}  source = {require('../../assets/banana_img.jpeg')}/>
                      </View>
                      <View style={styles.boxcontent}>
                      <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                            <Text style={styles.reporttxt}>Not Recommneded to buy - Might be ADULTERATED </Text>
                            <Text style={styles.reporttxt}>Expected Survival: 1 Week</Text>
                            <Text style={styles.reporttxt}>Refrigerate: Yes</Text>
                      </View>
                    </View>
                   )
            }
        }
    }
    else if(route.params.paramKey8=="Striped")
    {
        if(route.params.paramKey9=="Less" || route.params.paramKey9=="More" || route.params.paramKey9=="No")
        {
            if(route.params.paramKey10=="no" || route.params.paramKey10=="yes")
            {
                return (
                    <View style={styles.container}>
                      <View style={[styles.card, styles.shadowProp]}>  
                        <Text style={styles.header}>  
                          Banana
                        </Text>  
                      </View>
                      <View style={styles.logo}>
                      <Image style={styles.banana_logo}  source = {require('../../assets/banana_img.jpeg')}/>
                      </View>
                      <View style={styles.boxcontent}>
                      <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                            <Text style={styles.reporttxt}>Not Recommneded to buy</Text>
                            <Text style={styles.reporttxt}>Expected Survival: 1 Week</Text>
                            <Text style={styles.reporttxt}>Refrigerate: Yes</Text>
                      </View>
                    </View>
                   )
            }
        }
    }
    
  }
  else if(route.params.paramKey7=="Hard" || route.params.paramKey7=="Dent")
  {
    if(route.params.paramKey8=="Red" )
    {
        if(route.params.paramKey9=="Less")
        {
            if(route.params.paramKey8=="yes")
            {
                return (
                    <View style={styles.container}>
                      <View style={[styles.card, styles.shadowProp]}>  
                        <Text style={styles.header}>  
                          Banana
                        </Text>  
                      </View>
                      <View style={styles.logo}>
                      <Image style={styles.banana_logo}  source = {require('../../assets/banana_img.jpeg')}/>
                      </View>
                      <View style={styles.boxcontent}>
                      <Text style={styles.reporttxt}>Fruit: APPLE</Text>
                            <Text style={styles.reporttxt}>Not Recommneded to buy</Text>
                            <Text style={styles.reporttxt}>Expected Survival: 1-2 DAYS</Text>
                            <Text style={styles.reporttxt}>May be wilted from inside</Text>
                      </View>
                    </View>
                   )
            }
        }
    }
  }
               
         
    


}



const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#ffffff",
    // color:'#ffffff',
  },
  reporttxt:{
    color:'#000000',
    fontSize:25,
    textAlign:'left',
    padding:10,
    bottom:20,
  },
  card: {  
    backgroundColor: '#9bcca5',  
    borderRadius: 8,  
    width: '100%',  
    marginVertical: 10, 
    width:360,
    height:120, 
    marginTop:-10,

  },  
  logo:{
    // width:"20%",
    // height:"40%",
  },
  banana_logo:{
    width:200,
    height:120,
    top:65,
    alignSelf:'center',
  },
  banana_logo1:{
    width:150,
    height:120,
    top:65,
    alignSelf:'center',
  },
  boxcontent:{
    width:"80%",
    backgroundColor:"#9bcca5",
    height:350,
    top:350,
    // right:-280,
    marginLeft:-32,
    borderRadius:30,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    left:70,
  },
  header:{
    fontSize:28,
    color:'#000000',
    fontFamily:'JosefinSans-SemiBold',
    textAlign:'center',
    padding:10,
    marginTop:50,
    // marginBottom: 13,  
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
export default ReportApple