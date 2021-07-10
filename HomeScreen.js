import React, { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View, FlatList, SafeAreaView, ScrollView } from 'react-native';
import home from '../styles/home';
import { COLORS, SIZES, FONTS, icons, images } from '../constants/index';
import { initialCurrentLocation, categoryData, restaurantData } from '../backend/homeData';
import { backReturn } from '../backend/Verification';

export default function HomeScreen({ navigation }) {

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)
    const [showMenu, setShowMenu] = React.useState(false);
    const [menu, setMenu] = React.useState(null);
    useEffect((backReturn), []);
    function onSelectCategory(category) {
        let restaurant = restaurantData.filter(a => a.categories.includes(category.id))
        setRestaurants(restaurant)
        setSelectedCategory(category)
    }
    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)
        if (category.length > 0)
            return category[0].name
        return ""
    }
    function onShowMenu(name) {
        const copyData = [...restaurantData]
        let res = copyData.filter(a => a.name.includes(name))
        let resCopy = res.slice();
        let currMenu = new Array();
        resCopy[0].menu.forEach((element) => currMenu.push(element))
        setMenu(currMenu)
        setShowMenu(true)
    }
    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50, marginTop: 25, }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifycontent: 'center',
                    }}>
                </TouchableOpacity>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <View
                        style={{
                            width: '70%',
                            height: '100%',
                            backgroundColor: COLORS.black,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius,
                        }}>
                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.h3
                            }}>{currentLocation.streetName}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center',
                    }}
                    onPress={() => navigation.navigate('Cart')}>
                    <Image
                        source={icons.cart}
                        resizeMode='contain'
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.black,
                        }} />
                </TouchableOpacity>
            </View>
        )
    }
    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: SIZES.padding,
                        ...home.shadow
                    }}
                    onPress={() => {
                        onSelectCategory(item)
                        setShowMenu(false)
                    }}>
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: (onSelectCategory?.id == item.id) ? COLORS.white : COLORS.white,
                        }}>
                        <Image
                            source={item.icon}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                            }} />
                    </View>
                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.black : COLORS.white,
                            ...FONTS.body5
                        }}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }
        return (
            <View style={{ padding: SIZES.padding * 2, }}>
                <Text style={{ ...FONTS.h1 }}>Main</Text>
                <Text style={{ ...FONTS.h1 }}>Categories</Text>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}>
                </FlatList>
            </View>
        )
    }
    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate('Cart', {
                    item,
                    currentLocation
                })}>
                <View
                    style={{ marginBottom: SIZES.padding }}>
                </View>
                <View>
                    <Image
                        source={item.photo}
                        resizeMode='cover'
                        style={{
                            width: '100%',
                            height: 200,
                            borderRadius: SIZES.radius
                        }} />
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...home.shadow
                        }}>
                        <Text
                            style={{ ...FONTS.h4 }}>
                            {item.duration}
                        </Text>
                    </View>
                </View>
                <Text
                    style={{ ...FONTS.body2 }}>
                    {item.name}
                </Text>
                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row',
                    }}>
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10,
                        }} />
                    <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>
                    <View style={{
                        flexDirection: 'row',
                        marginLeft: 10,
                    }}>
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row', }}
                                        key={categoryId}>
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{
                                            ...FONTS.h3,
                                            color: COLORS.gray,
                                        }}>
                                            .
                                        </Text>
                                    </View>
                                )
                            })
                        }
                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        ...FONTS.body3,
                                        color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.gray
                                    }}>$</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )
        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30,
                }} />
        )
    }
    function renderMenuList() {
        return (
            <ScrollView>
                {
                    menu.map((id) => (
                        <TouchableOpacity
                            key={id.menuId}
                            style={{ marginBottom: SIZES.padding * 2 }}
                            onPress={() => navigation.navigate('Cart', {
                                menuId: id.menuId,
                                name: id.name,
                                photo: id.photo,
                                description: id.description,
                                calories: id.calories,
                                price: id.price
                            })}>
                            <View
                                style={{ marginBottom: SIZES.padding }}>
                            </View>
                            <View>
                                <Image
                                    source={id.photo}
                                    resizeMode='cover'
                                    style={{
                                        width: '100%',
                                        height: 200,
                                        borderRadius: SIZES.radius
                                    }} />
                                <View
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        height: 50,
                                        width: SIZES.width * 0.3,
                                        backgroundColor: COLORS.white,
                                        borderTopRightRadius: SIZES.radius,
                                        borderBottomLeftRadius: SIZES.radius,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        ...home.shadow
                                    }}>
                                    <Text
                                        style={{ ...FONTS.h4 }}>
                                        {id.price}
                                    </Text>
                                </View>
                            </View>
                            <Text   
                                style={{...FONTS.body2}}>
                                {id.name}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        );
    }

    return (
        <SafeAreaView style={home.container}>
            {renderHeader()}
            {renderMainCategories()}
            {(!showMenu) ? renderRestaurantList() : renderMenuList()}
        </SafeAreaView>
    );
}
