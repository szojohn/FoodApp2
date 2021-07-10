import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, TouchableOpacity, View, } from 'react-native';
import { COLORS, icons} from '../constants/index';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Svg, { Path } from 'react-native-svg';

const Tab=createBottomTabNavigator();
const TabBarCustomButton=({accessibilityState, children, onPress})=> {
    var isSelected=accessibilityState.selected
    if(isSelected)  {
        return(
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                    <View style={{ flex: 1, backgroundColor: COLORS.black }}></View>
                    <Svg
                        width={72}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={COLORS.black}
                        />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: COLORS.black }}></View>
                </View>
                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: COLORS.black
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    }
    else {
        return(
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: 50,
                    backgroundColor: COLORS.black
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}
const CustomTabBar=(props)=>{
    return(
        <View>
            <View style={{
                bottom: 0,
                left: 0,
                right: 0,
                height: 0,
                backgroundColor: COLORS.white,
                position: 'absolute',
            }}>
            </View>
        <BottomTabBar {...props.props}/>
        </View>
    )
} 

export default function Tabs({navigation}) {
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    borderTopWidth: 0,
                    elevation: 0,
                    backgroundColor: 'transparent',
                }
            }}
            tabBar={(props)=>(
                <CustomTabBar
                    props={props}
                />
            )}>
            <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon:({focused})=> (
                        <Image
                            source={icons.home}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.gray
                            }}/>
                    ),
                    tabBarButton:(props)=> (
                        <TabBarCustomButton
                            {...props}/>
                    )
            }}/>
            <Tab.Screen
                name='Cart'
                component={CartScreen}
                options={{
                    tabBarIcon:({focused})=> (
                        <Image
                            source={icons.cart}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.gray
                            }}/>
                    ),
                    tabBarButton:(props)=> (
                        <TabBarCustomButton
                            {...props}/>
                    )
            }}/>
            <Tab.Screen
                name='Favorites'
                component={FavoriteScreen}
                options={{
                    tabBarIcon:({focused})=> (
                        <Image
                            source={icons.heart}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.gray
                            }}/>
                    ),
                    tabBarButton:(props)=> (
                        <TabBarCustomButton
                            {...props}/>
                    )
            }}/>
            <Tab.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    tabBarIcon:({focused})=> (
                        <Image
                            source={icons.personcircle}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.white : COLORS.gray
                            }}/>
                    ),
                    tabBarButton:(props)=> (
                        <TabBarCustomButton
                            {...props}/>
                    )
            }}/>
        </Tab.Navigator>
    )
}