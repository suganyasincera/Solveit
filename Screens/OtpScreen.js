import React, { useState ,useRef} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity,ScrollView } from 'react-native';

export default function OtpScreen({navigation}) {

    const [otp, setOtp] = useState(['', '', '', '', '']);
    const otpTextInput = useRef([]);
  
    const handleOtpInputChange = (index, value) => {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
  
      if (value && index < 4) {
        otpTextInput.current[index + 1].focus();
      }
    };
  

  return (
   <View style={styles.container}>
    
    <View style={{marginTop:0,marginLeft:-70,}}>
    <Text style={{color:'#292D3D',fontSize: 20,fontWeight:'700',alignItems:'center',}}>
      OTP Verification
    </Text>
    <Text style={{fontSize:16,paddingTop:10}}>
    Check your SMS messages.{'\n'}
We have sent you the OTP pin at{'\n'}

<Text style={{color:'#353948',fontWeight:'700'}}>(+91) XXX XXX - XXXX</Text>
  </Text>
    </View>

    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',}}>

      <TextInput style={{height:62,width:50,backgroundColor:'#FFFFFF',borderRadius:6,alignItems:'center',fontSize:26,justifyContent:'center',borderColor:'#DADADA',borderWidth:1,textAlign:'center',margin:5}}
      placeholder='5'
      keyboardType='numeric'
    maxLength={1}  >
      </TextInput>
      <TextInput style={{height:62,width:50,backgroundColor:'#FFFFFF',borderRadius:6,alignItems:'center',fontSize:26,justifyContent:'center',borderColor:'#DADADA',borderWidth:1,textAlign:'center',margin:5}}
      placeholder='5'
      keyboardType='numeric' maxLength={1} >
      </TextInput>
      <TextInput style={{height:62,width:50,backgroundColor:'#FFFFFF',borderRadius:6,alignItems:'center',fontSize:26,justifyContent:'center',borderColor:'#DADADA',borderWidth:1,textAlign:'center',margin:5}}
      placeholder='5'
      keyboardType='numeric' maxLength={1} >
      </TextInput>
      <TextInput style={{height:62,width:50,backgroundColor:'#FFFFFF',borderRadius:6,alignItems:'center',fontSize:26,justifyContent:'center',borderColor:'#DADADA',borderWidth:1,textAlign:'center',margin:5}}
      placeholder='5'
      keyboardType='numeric' maxLength={1} >
      </TextInput>
      <TextInput style={{height:62,width:50,backgroundColor:'#FFFFFF',borderRadius:6,alignItems:'center',fontSize:26,justifyContent:'center',borderColor:'#DADADA',borderWidth:1,textAlign:'center',margin:5}}
      placeholder='5'
      keyboardType='numeric' maxLength={1} >
      </TextInput>
      

    </View>
<View>
  <Text style={{color:'#919191',fontWeight:'500'}}>
    Didn't receive any code? <Text style={{color:'#263A96',fontSize:14,fontWeight:'500'}}>Resend</Text>
  </Text>
</View>

<View>
  <TouchableOpacity  onPress={()=>navigation.navigate('Forthpage')} style={{height:38,width:295,backgroundColor:'#263A96',borderRadius:18,justifyContent:'center'}}>
    <Text  style={{color:'#fff',textAlign:'center'}}>Verify Now</Text>
  </TouchableOpacity>
  
</View>





    </View>
  );
  };


const styles = StyleSheet.create ({
 container:{
  flex:1,
  alignItems:'center',
  justifyContent:'space-evenly'

 },

});