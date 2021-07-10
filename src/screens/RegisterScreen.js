import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SimpleAnimation } from 'react-native-simple-animations';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import register from '../styles/auth';
import { COLORS, SIZES, icons} from '../constants/index';
import { registerUser } from '../backend/Verification';

export default function loginScreen({navigation}) {
    const [data, setData]=React.useState({
        name: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        check_textInputChange: false,
        secureTextEntry: true,
    });
    const nameInput=(val)=>{
        setData({
            ...data,
            name: val
        });
    }
    const emailInput=(val)=>{
        setData({
            ...data,
            email: val
        });
    }
    const textInputChange=(val)=>{
        if(val.length != 0) {
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
    const handlePasswordChange=(val)=>{
        setData({
            ...data,
            password: val,
        });
    }
    const updateSecureTextEntry=()=>{
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        });
    }
    
    return (
        <View style={register.container}>
            <View style={register.header}>
                <View style={register.header}>
                    <View style={register.logoContainer}>
                        <SimpleAnimation
                            delay={500}
                            duration={1000}
                            fade staticType='zoom'>
                            <Image
                                style={register.logo}
                                source={icons.logo}/>
                        </SimpleAnimation>
                    </View>
                </View>
            </View>
            <Animatable.View 
                style={register.footer}
                animation='fadeInUp'>
                <View style={register.inputContainer}>
                    <FontAwesome
                        size={SIZES.h3}
                        name='user-o'
                        color={COLORS.white}/>
                    <TextInput
                        style={register.textInput}
                        placeholder='Full Name'
                        autoCapitalize='words'
                        placeholderTextColor={COLORS.white}
                        onChangeText={(val)=> nameInput(val)}/>
                </View>
                <View style={register.inputContainer}>
                    <FontAwesome
                        size={SIZES.h3}
                        name='at'
                        color={COLORS.white}/>
                    <TextInput
                        style={register.textInput}
                        keyboardType='email-address'
                        placeholder='Email Address'
                        autoCapitalize='none'
                        placeholderTextColor={COLORS.white}
                        onChangeText={(val)=> emailInput(val)}/>
                </View>
                <View style={register.inputContainer}>
                    <FontAwesome
                        size={SIZES.h3}
                        name='user-o'
                        color={COLORS.white}/>
                    <TextInput
                        style={register.textInput}
                        placeholder='Username'
                        autoCapitalize='none'
                        placeholderTextColor={COLORS.white}
                        onChangeText={(val)=> textInputChange(val)}/>
                        { data.check_textInputChange ?
                            <Animatable.View
                                animation='bounceIn'>
                                <Feather
                                    name='check-circle'
                                    color={COLORS.green}
                                    size={SIZES.h3}/>
                            </Animatable.View>
                        : null } 
                </View>
                <View style={register.inputContainer}>
                    <Feather
                        size={SIZES.h3}
                        name='key'
                        color={COLORS.white}/>
                    <TextInput
                        style={register.textInput}
                        secureTextEntry={data.secureTextEntry ? true : false}
                        placeholder='Password'
                        placeholderTextColor={COLORS.white}
                        autoCapitalize='none'
                        onChangeText={(val)=> handlePasswordChange(val)}/>
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                            <Feather
                            name='eye-off'
                            color={COLORS.white}
                            size={SIZES.h3}/>
                        :
                            <Feather
                            name='eye'
                            color={COLORS.green}
                            size={SIZES.h3}/>
                        }
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>registerUser(data.name, data.email, data.username, data.password, navigation)}>
                        <LinearGradient
                            style={register.button}
                            colors={[COLORS.white, COLORS.gray]}>
                            <Text style={register.loginButton}>Register</Text>
                        </LinearGradient>
                    </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}
