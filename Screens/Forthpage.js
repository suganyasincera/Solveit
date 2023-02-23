import { View, Text, Image, StyleSheet, TextInput, ScrollView, } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Card, } from 'react-native-paper';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';
import { TouchableOpacity } from 'react-native';



export default function Forthpage({navigation}) {

    return (
        <View style={{ flex: 1, backgroundColor: '#FAFAFA' }}>



            <Card style={{ backgroundColor: '#263A96', height: 232, width: '100%', borderBottomLeftRadius: 92, borderRadius: 0, }}>
                <Ionicons style={{ marginTop: 40, marginLeft: 15, position: 'absolute', height: 25, width: 25 }} name='chevron-back-outline' size={30} color={'#fff'} onPress={()=>navigation.navigate('OtpScreen')} />
                <View style={{ margin: 38, marginLeft: 47 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Image source={require('../assets/logocard.png')} />
                        <Text style={{ color: '#fff', fontSize: 14, fontWeight: '500' }}>Login</Text>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: '#fff', marginTop: 25 }} >20% Complete </Text>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff', marginTop: 20 }}>Personal Info</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ height: 8, width: 80, backgroundColor: '#FF9800', borderRadius: 6, marginTop: 20 }}>

                        </View>
                        <View style={{ height: 8, width: 80, backgroundColor: '#FFf', borderRadius: 6, marginTop: 20 }}>

                        </View>
                        <View style={{ height: 8, width: 80, backgroundColor: '#FFf', borderRadius: 6, marginTop: 20 }}>

                        </View>
                    </View>

                </View>
            </Card>

            <ScrollView>

                <View style={{ margin: 20 }}>
                    <Text style={{ color: '#292D3D', fontWeight: '700', fontSize: 20 }}>Sign Up</Text>
                    <Text style={{ color: '#919191', fontWeight: '500', fontSize: 16, marginTop: 10 }}>Create an account.</Text>

                    <Text style={{ marginTop: 40, fontSize: 12, fontWeight: '400', color: '#353948' }}>User Type</Text>
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ padding: 0, borderColor: '#263A96', borderWidth: 1, borderRadius: 25, height: 38, width: '48%', color: '#263A96', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#263A96', fontSize: 14, fontWeight: '400' }}> Customer / User</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ padding: 0, borderColor: '#DADADA', borderWidth: 1, borderRadius: 25, height: 38, width: '48%', color: '#263A96', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#919191', fontSize: 14, fontWeight: '400' }}>Specialist User</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <Text style={{marginTop:20,fontSize:12,fontWeight:'400',color:'#353948'}}>First Name</Text> */}

                    <View style={{ marginTop: 20, margin: 0, }}>
                        <Text style={styles.emailText}>First Name</Text>
                        <View style={styles.wrapperInput}>
                            <TextInput
                                style={styles.input}

                                placeholder="xxxxxx" />

                        </View>
                    </View>

                    <View style={{ marginTop: 20, margin: 0, }}>
                        <Text style={styles.emailText}>Last Name</Text>
                        <View style={styles.wrapperInput}>
                            <TextInput
                                style={styles.input}

                                placeholder="xxxxxx" />

                        </View>
                    </View>

                    <View style={{ marginTop: 20, margin: 0, }}>
                        <Text style={styles.emailText}>DOB</Text>
                        <View style={styles.wrapperInput}>
                            <TextInput
                                style={styles.input}
                            keyboardType={'numeric'}
                                placeholder="xxxxxx" />
                            <Ionicons name='calendar-outline' size={20} color={'#919191'} />

                        </View>
                    </View>

                    <Text style={{ marginTop: 20, fontSize: 12, fontWeight: '400', color: '#353948' }}> User Type </Text>
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ padding: 0, borderColor: '#263A96', borderWidth: 1, borderRadius: 25, height: 38, width: '48%', color: '#263A96', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#263A96', fontSize: 14, fontWeight: '400' }}> Male</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ padding: 0, borderColor: '#DADADA', borderWidth: 1, borderRadius: 25, height: 38, width: '48%', color: '#263A96', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#919191', fontSize: 14, fontWeight: '400' }}> Female </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 20, marginBottom: 20, alignItems: 'flex-end' }}>

                        <TouchableOpacity style={{ height: 51, width: 71, backgroundColor: '#263A96', borderRadius: 18, justifyContent: 'center', alignItems: 'center', }}>
                            <Ionicons name='chevron-forward-sharp' size={30} color={'#fff'} />
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>


        </View>
    )
};

const styles = StyleSheet.create({
    wrapperInput: {
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#DADADA',
        backgroundColor: '#fff',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 0,

    },

    input: {
        padding: 10,
        height: 38,
        width: '85%',

    },
    emailText: {
        color: '#353948',
        fontWeight: '400',
        fontSize: 12
    },

})