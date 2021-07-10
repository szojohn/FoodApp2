import React from 'react';
import { Image, View, Text, StyleSheet, Alert, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { userProfile } from '../backend/userProfile';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { currentUN, currentN, currentEM, currentPW, currentAD } from '../backend/Verification'
import home from '../styles/home';
import auth from '../styles/auth';
import Feather from 'react-native-vector-icons/Feather';
import { icons, COLORS, FONTS, SIZES } from '../constants/index';
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
import { loggingOut } from '../backend/logout';

export default function ProfileScreen({ navigation }) {

    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 50,
                    marginTop: 25,
                    marginBottom: 25,
                }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        marginTop: 10,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.goBack()}>
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }} />
                </TouchableOpacity>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <View
                        style={{
                            width: '70%',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding * 3,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.black
                        }}>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        width: 50,
                        marginTop: 10,
                        padidngRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}>
                    <Image
                        source={icons.list}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderIntro() {
        return (
            <View
                style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h1 }}>Your</Text>
                <Text style={{ ...FONTS.h1 }}>Profile</Text>
            </View>
        )
    }

    function renderProfile() {
        return (
            <SafeAreaView style={home.container, {
                flexDirection: 'column',
                marginTop: 25
            }}>
                <ScrollView>
                    <View
                        style={{
                            marginTop: 20,
                            width: 300,
                            height: 60,
                            paddingVertical: 10,
                            paddingHorizontal: 15,
                            borderWidth: 2,
                            borderRadius: 50,
                            borderColor: COLORS.black,
                            alignSelf: 'center',
                            alignItems: 'center',
                        }}>
                        <TextInput
                            style={{
                                flex: 1,
                                ...FONTS.body4,
                            }}
                            placeholder='Username'
                            placeholderTextColor={COLORS.gray}
                            editable={false}>
                        </TextInput>
                        <TextInput
                            style={{
                                flex: 1,
                                color: COLORS.black,
                                ...FONTS.body2,
                            }}
                            placeholder={currentUN}
                            placeholderTextColor={COLORS.black}
                            editable={false}>
                        </TextInput>

                    </View>
                    <View
                        style={{
                            marginTop: 20,
                            width: 300,
                            height: 60,
                            paddingVertical: 10,
                            paddingHorizontal: 15,
                            borderWidth: 2,
                            borderRadius: 50,
                            borderColor: COLORS.black,
                            alignSelf: 'center',
                            alignItems: 'center',
                        }}>
                        <TextInput
                            style={{
                                flex: 1,
                                ...FONTS.body4,
                            }}
                            placeholder='Name'
                            placeholderTextColor={COLORS.gray}
                            editable={false}>
                        </TextInput>
                        <TextInput
                            style={{
                                flex: 1,
                                color: COLORS.black,
                                ...FONTS.body2,
                            }}
                            placeholder={currentN}
                            placeholderTextColor={COLORS.black}
                            editable={false}>
                        </TextInput>

                    </View>
                    <View
                        style={{
                            marginTop: 20,
                            width: 300,
                            height: 60,
                            paddingVertical: 10,
                            paddingHorizontal: 15,
                            borderWidth: 2,
                            borderRadius: 50,
                            borderColor: COLORS.black,
                            alignSelf: 'center',
                            alignItems: 'center',
                        }}>
                        <TextInput
                            style={{
                                flex: 1,
                                ...FONTS.body4,
                            }}
                            placeholder='Email Address'
                            placeholderTextColor={COLORS.gray}
                            editable={false}>
                        </TextInput>
                        <TextInput
                            style={{
                                flex: 1,
                                color: COLORS.black,
                                ...FONTS.body2,
                            }}
                            placeholder={currentEM}
                            placeholderTextColor={COLORS.black}
                            editable={false}>
                        </TextInput>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

    function renderOptions() {
        return (
            <SafeAreaView
                style={home.container, {
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 25
                }}>
                <View
                    style={{
                        flexDirection: 'column',
                    }}>
                    <TouchableOpacity>
                        <LinearGradient
                            style={{
                                marginTop: 20,
                                marginLeft: 20,
                                marginRight: 20,
                                width: 150,
                                height: 40,
                                borderRadius: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            colors={[COLORS.black, COLORS.black]}>
                            <Text
                                style={{
                                    color: COLORS.white,
                                    fontWeight: 'bold',
                                }}>Change Password</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <LinearGradient
                            style={{
                                marginTop: 20,
                                marginLeft: 20,
                                marginRight: 20,
                                width: 150,
                                height: 40,
                                borderRadius: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            colors={[COLORS.black, COLORS.black]}>
                            <Text
                                style={{
                                    color: COLORS.white,
                                    fontWeight: 'bold',
                                }}>Order History</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <LinearGradient
                            style={{
                                marginTop: 20,
                                marginLeft: 20,
                                marginRight: 20,
                                width: 150,
                                height: 40,
                                borderRadius: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            colors={[COLORS.black, COLORS.black]}>
                            <Text
                                style={{
                                    color: COLORS.white,
                                    fontWeight: 'bold',
                                }}>About Us</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => loggingOut(navigation)}>
                        <LinearGradient
                            style={{
                                marginTop: 20,
                                marginLeft: 20,
                                marginRight: 20,
                                width: 150,
                                height: 40,
                                borderRadius: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            colors={[COLORS.black, COLORS.black]}>
                            <Text
                                style={{
                                    color: COLORS.white,
                                    fontWeight: 'bold',
                                }}>Sign Out</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderIntro()}
            {renderProfile()}
            {renderOptions()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
})
