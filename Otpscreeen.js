import React, { useState, useRef } from 'react';
import { View, TextInput,Text, StyleSheet,TouchableOpacity,ScrollView } from 'react-native';

const OtpScreeen = ({navigation}) => {
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
    <View style={{marginTop:30,marginLeft:-70,}}>
    <Text style={{color:'#292D3D',fontSize: 20,fontWeight:'700',alignItems:'center',}}>
      OTP Verification
    </Text>
    <Text style={{fontSize:16,paddingTop:10}}>
    Check your SMS messages.{'\n'}
We have sent you the OTP pin at{'\n'}

<Text style={{color:'#353948',fontWeight:'700'}}>(+91) XXX XXX - XXXX</Text>
  </Text>
    </View>

  <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:150,marginTop:70}}>

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
    <View>
  <Text style={{color:'#919191',fontWeight:'500',marginBottom:200}}>
    Didn't receive any code? <Text style={{color:'#263A96',fontSize:14,fontWeight:'500'}}>Resend</Text>
  </Text>
</View>

<View>
  <TouchableOpacity  onPress={()=>navigation.navigate('Threedpage')} style={{height:38,width:295,backgroundColor:'#263A96',borderRadius:18,justifyContent:'center',marginBottom:50}}>
    <Text  style={{color:'#fff',textAlign:'center'}}>Verify Now</Text>
  </TouchableOpacity>
  
</View>




</View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  
    marginLeft:10,

  },
  input: {
    height: 50,
    width: 50,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
  },
});
export default OtpScreeen;
