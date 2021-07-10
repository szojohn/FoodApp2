import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants/index';

const cart = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default cart;