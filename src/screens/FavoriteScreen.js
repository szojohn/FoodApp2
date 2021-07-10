import React from 'react';
import { Text, StyleSheet, TouchableOpacity, FlatList, View, Image, SafeAreaView } from 'react-native';
import { userProfile } from '../backend/userProfile';
import { COLORS, SIZES, FONTS, icons, images } from '../constants/index';
import home from '../styles/home';
import { faveArray } from '../backend/Verification'
import { currentFave } from '../backend/userProfile';
import { render } from 'react-dom';
import { LinearGradient } from 'expo-linear-gradient';

export default function FavoriteScreen({ navigation }) {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.flatstyle}>
                <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

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
                        }}
                    />
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
                        padidngRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
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

    function renderFavorites() {
        return (
            <View style={{ padding: SIZES.padding * 2, }}>
                <Text style={{ ...FONTS.h1 }}>Your</Text>
                <Text style={{ ...FONTS.h1 }}>Recent Orders</Text>
                <View style={{ marginTop: 25, }}>
                    <FlatList
                        data={faveArray}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        contentContainerStyle={{
                            paddingHorizontal: SIZES.padding * 2,
                        }}>
                    </FlatList>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderFavorites()}
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    item: {
        color: COLORS.white,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    flatstyle: {
        padding: SIZES.padding,
        backgroundColor: COLORS.black,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginBottom: 25,
    }
});