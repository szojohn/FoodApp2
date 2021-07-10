import React from 'react';
import { Image, View, Text, StyleSheet, Alert, SafeAreaView, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { currentUN, currentN, currentEM, currentPW, currentAD } from '../backend/Verification'
import home from '../styles/home';
import { icons } from '../constants/index';
import { loggingOut } from '../backend/logout';
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';

function ProfileScreen({ navigation }) {
    //admin
    if (currentAD == true) {
        return (
            <SafeAreaView style={home.container, { flexDirection: 'column' }}>
                <ScrollView>
                    <View style={{ height: 150, backgroundColor: 'transparent' }}>
                        <Image source={icons.logo} style={{ alignSelf: 'center', width: 260, height: 158, marginLeft: 10 }} />
                    </View>
                    <View style={{ height: 50, backgroundColor: 'transparent', marginBottom: 5, borderBottomWidth: 2, borderBottomColor: '#7f8fa6' }}>
                        <Text style={{ alignSelf: 'center', color: '#192a56', fontSize: 20, marginTop: 10, fontStyle: 'italic' }}>@{currentUN}</Text>
                    </View>
                    <View style={{ height: 90, borderBottomWidth: 2, borderBottomColor: '#7f8fa6' }}>
                        <Text style={{ marginTop: 8, marginLeft: 8, marginBottom: 4, color: '#7f8fa6', fontSize: 15 }}>Name</Text>
                        <Text style={{ alignSelf: 'center', color: '#192a56', fontSize: 18 }}>{currentN}</Text>
                    </View>
                    <View style={{ height: 90, borderBottomWidth: 3, borderBottomColor: '#7f8fa6', marginBottom: 10 }}>
                        <Text style={{ marginTop: 8, marginLeft: 8, marginBottom: 4, color: '#192a56', fontSize: 15 }}>Email</Text>
                        <Text style={{ alignSelf: 'center', color: '#192a56', fontSize: 18 }}>{currentEM}</Text>
                    </View>

                    <TouchableOpacity onPress={()=>navigation.navigate('ChangePw')}>
                        <View style={{ height: 70, backgroundColor: '#353b48', marginBottom: 3 }}>
                            <Text style={{ margin: 20, color: '#f5f6fa', fontSize: 20 }}><AntDesign name="key" size={24} color="#f5f6fa" />  Change Password </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ height: 70, backgroundColor: '#353b48', marginBottom: 3 }}>
                            <Text style={{ margin: 20, color: '#f5f6fa', fontSize: 20 }}><Ionicons name="add-sharp" size={24} color="#f5f6fa" />  Add Products</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ height: 70, backgroundColor: '#353b48', marginBottom: 8 }}>
                            <Text style={{ margin: 20, color: '#f5f6fa', fontSize: 20 }}><Ionicons name="ios-information-circle-outline" size={24} color="#f5f6fa" />  About Us</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => loggingOut(navigation)}>
                        <View style={{ height: 70, backgroundColor: '#2f3640' }}>
                            <Text style={{ margin: 20, color: '#f5f6fa', fontSize: 20, alignSelf: 'center' }}>Logout</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </SafeAreaView>
        )
    } else {
        //customer
        return (
            <SafeAreaView style={home.container, { flexDirection: 'column' }}>
                <ScrollView>
                    <View style={{ height: 150, backgroundColor: 'transparent' }}>
                        <Image source={icons.logo} style={{ alignSelf: 'center', width: 260, height: 158, marginLeft: 10 }} />
                    </View>
                    <View style={{ height: 50, backgroundColor: 'transparent', marginBottom: 5, borderBottomWidth: 2, borderBottomColor: '#7f8fa6' }}>
                        <Text style={{ alignSelf: 'center', color: '#192a56', fontSize: 20, marginTop: 10, fontStyle: 'italic' }}>@{currentUN}</Text>
                    </View>
                    <View style={{ height: 90, borderBottomWidth: 2, borderBottomColor: '#7f8fa6' }}>
                        <Text style={{ marginTop: 8, marginLeft: 8, marginBottom: 4, color: '#7f8fa6', fontSize: 15 }}>Name</Text>
                        <Text style={{ alignSelf: 'center', color: '#192a56', fontSize: 18 }}>{currentN}</Text>
                    </View>
                    <View style={{ height: 90, borderBottomWidth: 3, borderBottomColor: '#7f8fa6', marginBottom: 8 }}>
                        <Text style={{ marginTop: 8, marginLeft: 8, marginBottom: 4, color: '#192a56', fontSize: 15 }}>Email</Text>
                        <Text style={{ alignSelf: 'center', color: '#192a56', fontSize: 18 }}>{currentEM}</Text>
                    </View>

                    <TouchableOpacity onPress={()=>navigation.navigate('ChangePw')}>
                        <View style={{ height: 70, backgroundColor: '#353b48', marginBottom: 3 }}>
                            <Text style={{ margin: 20, color: '#f5f6fa', fontSize: 20 }}><AntDesign name="key" size={24} color="#f5f6fa" />  Change Password </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ height: 70, backgroundColor: '#353b48', marginBottom: 3 }}>
                            <Text style={{ margin: 20, color: '#f5f6fa', fontSize: 20 }}><FontAwesome name="history" size={24} color="#f5f6fa" />  Order History</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ height: 70, backgroundColor: '#353b48', marginBottom: 8 }}>
                            <Text style={{ margin: 20, color: '#f5f6fa', fontSize: 20 }}><Ionicons name="ios-information-circle-outline" size={24} color="#f5f6fa" />  About Us</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => loggingOut(navigation)}>
                        <View style={{ height: 70, backgroundColor: '#2f3640' }}>
                            <Text style={{ margin: 20, color: '#f5f6fa', fontSize: 20, alignSelf: 'center' }}>Logout</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default ProfileScreen;