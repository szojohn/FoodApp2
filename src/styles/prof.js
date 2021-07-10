import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants/index';

const prof = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secondary,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        width: 150,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    inputContainer: {
        paddingBottom: 5,
        marginTop: 10,
        borderBottomWidth: 1,
        flexDirection: 'row',
        borderBottomColor: COLORS.white,
    },
    logoContainer: {
        top: 50,
        position: 'absolute',
        alignItems: 'center',
    },

    header: {
        flex: 2,
        alignItems: 'center',
    },
    footer: {
        flex: 0.25,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 150,
        paddingHorizontal: 30,
        backgroundColor: COLORS.black,
        alignItems: 'center',
        justifyContent: 'center'

    },
    authButton: {
        color: COLORS.black,
        fontWeight: 'bold',
    },
    logo: {
        width: 250,
        height: 250,
    },
    registerButton: {
        color: COLORS.green,
        fontWeight: 'bold',
    },
    text: {
        paddingTop: SIZES.h3,
        fontSize: SIZES.body3,
        color: COLORS.white,
        flexDirection: 'row',
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 20,
        color: COLORS.white,
    },
})

export default prof;