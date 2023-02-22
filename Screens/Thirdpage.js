import { View, Text ,StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
import { Image } from 'react-native';

export default function Thirdpage({navigation}) {
  return (
    <View style={{flex:1,backgroundColor:'#FAFAFA',}}>
      
     <Ionicons style={{marginTop:40,marginLeft:15}} name='chevron-back-outline' size={30} color={'#263A96'} />
     <View style={{margin:'10%',}}>
     <View style={{margin:0,top:'0%'}}>
      <Text style={{fontSize:20,fontWeight:'700',color:'#292D3D',marginBottom:10}}>Tell us about you</Text>
      <Text style={{color:'#919191',fontWeight:'500',fontSize:16}}>Let us know about you. Please{'\n'} 
      select one of the option from below.</Text>
      </View>


      <View style={{marginTop:'20%'}}>
        <Text style={{fontSize:20,fontWeight:'400',color:'#353948'}}>You are a</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
        <TouchableOpacity style={{borderColor:'#4A89DC',borderWidth:3,borderRadius:5,height:'70%',width:'45%',alignItems:'center',justifyContent:'flex-end'}}>
          <Image style={{marginBottom:20}} source={require('../assets/logimg.png')} />
          
          <TouchableWithoutFeedback >
            <View style={{ alignItems: 'center',backgroundColor: '#263A96',padding: 10,borderBottomLeftRadius:2,borderBottomRightRadius:2,width:'100%'}}>
          <Text style={{textAlign:'center',color:'#fff',fontSize:14,fontWeight:'500'}}>Specialist User</Text>
          </View>
          </TouchableWithoutFeedback>
          
        </TouchableOpacity>

        <TouchableOpacity style={{borderColor:'#AACBFF',borderWidth:2,borderRadius:5,height:'70%',width:'45%',alignItems:'center',justifyContent:'flex-end'}}>
          <Image style={{marginBottom:20}} source={require('../assets/logimg2.png')} />
          
          <TouchableWithoutFeedback >
            <View style={{ alignItems: 'center',backgroundColor: '#AACBFF',padding: 10,borderBottomLeftRadius:2,borderBottomRightRadius:2,width:'100%'}}>
          <Text style={{textAlign:'center',color:'#fff',fontSize:14,fontWeight:'500'}}>Customer / User</Text>
          </View>
          </TouchableWithoutFeedback>
          
        </TouchableOpacity>
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('OtpScreen')}>
        <Text style={{ color: '#fff',  fontSize: 14, fontWeight:'500'  }}> Next </Text>
        </TouchableOpacity>
      </View>
      
      </View>
      
    </View>
  ) 
};

const styles = StyleSheet.create({

  button: {

    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,

    // // borderWidth: 1,
     borderRadius: 25,
     elevation: 10,
      shadowColor: '#2d2d2d',
    // // color: '#fff',
     backgroundColor: '#263A96',
    // marginTop: 0,
    // marginBottom:0,
    // flexDirection: 'row',

    // justifyContent: 'center',
    // margin: 0,
  
  },

});

