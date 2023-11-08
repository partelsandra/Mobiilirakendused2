import { StyleSheet } from "react-native";

import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        width: '100%',
    },
    inputContainer: {
        borderColor: colors.grey,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        borderRadius: 14,
        paddingHorizontal: 16,
        flex: 1
    },
    label: {
        color: colors.blue,
        fontWeight: '500',
    },
    agreeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 20
    },
    agreeText: {
        color: colors.blue,
        marginHorizontal: 14
    },
    agreeTextBold: {
        color: colors.blue,
        marginHorizontal: 14,
        fontWeight: 'bold'

    },
    button: {
        marginTop: 40,
        marginVertical: 20
    },
    footerText: {
        color: colors.blue,
        textAlign: 'center',
        paddingBottoms: 20
    },
    footerLink: {
        fontWeight: 'bold'
    }
})