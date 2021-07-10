import React from 'react';
import { SafeAreaView, View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import auth from '../styles/auth';
import { COLORS, SIZES, FONTS, icons, images } from '../constants/index';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import { changePW } from '../backend/Verification';
import { LinearGradient } from 'expo-linear-gradient';
import home from '../styles/home';


export default function ChangePWScreen({ navigation }) {
    const [pw, setPw] = React.useState({
        password: '',
        newPass: '',
        rePassword: '',
        secureTextEntry: true,
        neSecureTextEntry: true,
        reSecureTextEntry: true,
    });

    const handlePasswordChange = (val) => {
        setPw({
            ...pw,
            password: val,
        });
    }

    const updateSecureTextEntry = () => {
        setPw({
            ...pw,
            secureTextEntry: !pw.secureTextEntry,
        });
    }

    const neHandlePwChange = (val) => {
        setPw({
            ...pw,
            newPass: val,
        });
    }

    const neUpdateSecureText = () => {
        setPw({
            ...pw,
            neSecureTextEntry: !pw.neSecureTextEntry,
        });
    }

    const reHandlePwChange = (val) => {
        setPw({
            ...pw,
            rePassword: val,
        });
    }

    const reUpdateSecureText = () => {
        setPw({
            ...pw,
            reSecureTextEntry: !pw.reSecureTextEntry,
        });
    }

    return (
        <SafeAreaView style={home.container}>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={{ ...FONTS.h1 }}>Change Password</Text>
                </View>
                <View style={styles.changeCon}>
                    <Animatable.View
                        animation='fadeInUp'>
                        <View style={styles.inputCon}>
                            <Feather
                                size={SIZES.h3}
                                name='key'
                                color={COLORS.white} />
                            <TextInput
                                style={styles.textCon}
                                secureTextEntry={pw.secureTextEntry ? true : false}
                                placeholder='Password'
                                placeholderTextColor={COLORS.white}
                                autoCapitalize='none'
                                onChangeText={(val) => handlePasswordChange(val)} />
                            <TouchableOpacity
                                onPress={updateSecureTextEntry}>
                                {pw.secureTextEntry ?
                                    <Feather
                                        name='eye-off'
                                        color={COLORS.white}
                                        size={SIZES.h3} />
                                    :
                                    <Feather
                                        name='eye'
                                        color={COLORS.white}
                                        size={SIZES.h3} />
                                }
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputCon}>
                            <Feather
                                size={SIZES.h3}
                                name='key'
                                color={COLORS.white} />
                            <TextInput
                                style={styles.textCon}
                                secureTextEntry={pw.neSecureTextEntry ? true : false}
                                placeholder='New Password'
                                placeholderTextColor={COLORS.white}
                                autoCapitalize='none'
                                onChangeText={(val) => neHandlePwChange(val)} />
                            <TouchableOpacity
                                onPress={neUpdateSecureText}>
                                {pw.secureTextEntry ?
                                    <Feather
                                        name='eye-off'
                                        color={COLORS.white}
                                        size={SIZES.h3} />
                                    :
                                    <Feather
                                        name='eye'
                                        color={COLORS.white}
                                        size={SIZES.h3} />
                                }
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputCon}>
                            <Feather
                                size={SIZES.h3}
                                name='key'
                                color={COLORS.white} />
                            <TextInput
                                style={styles.textCon}
                                secureTextEntry={pw.reSecureTextEntry ? true : false}
                                placeholder='Retype New Password'
                                placeholderTextColor={COLORS.white}
                                autoCapitalize='none'
                                onChangeText={(val) => reHandlePwChange(val)} />
                            <TouchableOpacity
                                onPress={reUpdateSecureText}>
                                {pw.reSecureTextEntry ?
                                    <Feather
                                        name='eye-off'
                                        color={COLORS.white}
                                        size={SIZES.h3} />
                                    :
                                    <Feather
                                        name='eye'
                                        color={COLORS.white}
                                        size={SIZES.h3} />
                                }
                            </TouchableOpacity>
                        </View>
                        <View style={auth.buttonContainer}>
                            <TouchableOpacity onPress={() => changePW(pw.password, pw.newPass, pw.rePassword)}>
                                <LinearGradient
                                    style={auth.button}
                                    colors={[COLORS.white, COLORS.gray]}>
                                    <Text style={auth.authButton}>Change Password</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </Animatable.View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        flex: 2, 
        flexDirection: 'column', 
        height: 50, 
        marginTop: 25,
        paddingBottom: 100,
        top: 0,
        position: 'absolute'
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.secondary,
    },
    changeCon: {
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 150,
        paddingHorizontal: 30,
        backgroundColor: COLORS.black,
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop: 60,
    },
    inputCon: {
        paddingBottom: 5,
        marginTop: 10,
        borderBottomWidth: 1,
        flexDirection: 'row',
        borderBottomColor: COLORS.white,
    },
    textCon: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 20,
        color: COLORS.white,
    },
});
