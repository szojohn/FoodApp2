import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SimpleAnimation } from 'react-native-simple-animations';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import auth from '../styles/auth';
import { COLORS, SIZES, icons } from '../constants/index';
import { loginUser } from '../backend/Verification';


export default function authScreen({ navigation }) {
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
    });
    const textInputChange = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
            });
        }
        else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
            });
        }
    }
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        });
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        });
    }

    return (
        <View style={auth.container}>
            <View style={auth.header}>
                <View style={auth.header}>
                    <View style={auth.logoContainer}>
                        <SimpleAnimation
                            delay={500}
                            duration={1000}
                            fade staticType='zoom'>
                            <Image
                                style={auth.logo}
                                source={icons.logo} />
                        </SimpleAnimation>
                    </View>
                </View>
            </View>
            <Animatable.View
                style={auth.footer}
                animation='fadeInUp'>
                <View style={auth.inputContainer}>
                    <FontAwesome
                        size={SIZES.h3}
                        name='user-o'
                        color={COLORS.white} />
                    <TextInput
                        style={auth.textInput}
                        placeholder='Username'
                        autoCapitalize='none'
                        placeholderTextColor={COLORS.white}
                        onChangeText={(val) => textInputChange(val)} />
                    {data.check_textInputChange ?
                        <Animatable.View
                            animation='bounceIn'>
                            <Feather
                                name='check-circle'
                                color={COLORS.green}
                                size={SIZES.h3} />
                        </Animatable.View>
                        : null}
                </View>
                <View style={auth.inputContainer}>
                    <Feather
                        size={SIZES.h3}
                        name='key'
                        color={COLORS.white} />
                    <TextInput
                        style={auth.textInput}
                        secureTextEntry={data.secureTextEntry ? true : false}
                        placeholder='Password'
                        placeholderTextColor={COLORS.white}
                        autoCapitalize='none'
                        onChangeText={(val) => handlePasswordChange(val)} />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ?
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
                    <TouchableOpacity onPress={() => loginUser(data.username, data.password, navigation)}>
                        <LinearGradient
                            style={auth.button}
                            colors={[COLORS.white, COLORS.gray]}>
                            <Text style={auth.authButton}>Login</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <Text style={auth.text}>
                    {`Don't have an Account?\t\t`}
                    <Text onPress={() => navigation.navigate('Register')} style={auth.registerButton}>
                        Register now.
                    </Text>
                </Text>
            </Animatable.View>
        </View>
    );
}
