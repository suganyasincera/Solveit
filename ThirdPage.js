import { Ionicons } from '@expo/vector-icons';
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
 <ScrollView>
    <Ionicons style={{color:'#263A96',marginLeft:15,margin:40}}  onPress={()=>navigation.navigate('FourthPage')} name='chevron-back-outline'  size={25} />
    <View style={{margin:'10%'}}>
    <View style={{margin:'0%',}}>
    <Text style={{color:'#292D3D',fontSize: 20,fontWeight:'700',alignItems:'center', }}>
      OTP Verification
    </Text>
    <Text style={{fontSize:16,paddingTop:10}}>
    Check your SMS messages.{'\n'}
We have sent you the OTP pin at{'\n'}

<Text style={{color:'#353948',fontWeight:'700'}}>(+91) XXX XXX - XXXX</Text>
  </Text>
    </View>

    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:'30%'}}>

      {otp.map((value, index) => (
        <TextInput
          key={index}
          style={styles.input}
          maxLength={1}
          keyboardType="numeric"
          value={value}
          onChangeText={(text) => handleOtpInputChange(index, text)}
          ref={(ref) => (otpTextInput.current[index] = ref)}
        />
      ))}
  </View>
<View style={{marginTop:'20%',justifyContent:'center',alignItems:'center'}}>
  <Text style={{color:'#919191',fontWeight:'500'}}>
    Didn't receive any code? <Text style={{color:'#263A96',fontSize:14,fontWeight:'500'}}>Resend</Text>
  </Text>
</View>

<View style={{marginTop:'70%'}}>
  <TouchableOpacity  onPress={()=>navigation.navigate('FourthPage')} style={{height:38,width:295,backgroundColor:'#263A96',borderRadius:18,justifyContent:'center'}}>
    <Text  style={{color:'#fff',textAlign:'center'}}>Verify Now</Text>
  </TouchableOpacity>
  
</View>



</View>
</ScrollView>
    </View>
  );
  };


const styles = StyleSheet.create ({
 container:{
  flex:1,

  

 },
 input:{
  height:62,
  width:50,
  backgroundColor:' #FFFFFF',
  borderWidth:1,
  borderColor:'#DADADA',
  textAlign:'center',
  fontSize:26,
  margin:5,
  borderRadius:6,



 },

});