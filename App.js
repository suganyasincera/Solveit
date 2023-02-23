import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Firstpage from './Screens/Firstpage';
import Secondpage from './Screens/Secondpage';

import Thirdpage from './Screens/Thirdpage';
import OtpScreen from './Screens/OtpScreen';
import Forthpage from './Screens/Forthpage';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
<NavigationContainer>
  <Stack.Navigator screenOptions={{ headerShown: false }} >
    <Stack.Screen name='Firstpage' component={Firstpage} />
    <Stack.Screen name='Secondpage' component={Secondpage} />
    <Stack.Screen name='Thirdpage' component={Thirdpage} />
    <Stack.Screen name='OtpScreen' component={OtpScreen} />
    <Stack.Screen name='Forthpage' component={Forthpage} />

  </Stack.Navigator>
</NavigationContainer>


  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
