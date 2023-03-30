import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Firstpage from './Screens/Firstpage';
import Secondpage from './Screens/Secondpage';

import Thirdpage from './Screens/Thirdpage';
import OtpScreen from './Screens/OtpScreen';
import Forthpage from './Screens/Forthpage';
import Page6 from './Screens/Page6';
import Page7 from './Screens/Page7';
import Page8 from './Screens/Page8';
import DashboardSpecial from './Screens/DashboardSpecial';
import DashboardCustomer from './Screens/DashboardCustomer';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='Firstpage'  component={Firstpage} />
        <Stack.Screen name='Secondpage' component={Secondpage} />
        <Stack.Screen name='Thirdpage'  component={Thirdpage} />
        <Stack.Screen name='OtpScreen'  component={OtpScreen} />
        <Stack.Screen name='Forthpage'  component={Forthpage} />
        <Stack.Screen name='Page6'      component={Page6} />
        <Stack.Screen name='Page7'      component={Page7}/>
        <Stack.Screen name='Page8'      component={Page8}/>
        <Stack.Screen name='DashboardSpecial'      component={DashboardSpecial}/>
        <Stack.Screen name='DashboardCustomer' component={DashboardCustomer} />
     

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
