import { StyleSheet } from "react-native";

import { Colors, colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,

        borderRadius: 8,
        width: '100%'
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        
        flex: 1
    },
    label: {
        marginBottom: 8,
        color: colors.blue,
        fontWeight: '500',
        marginVertical: 20,
    },
    eye: {
        marginHorizontal: 16,
        width: 24,
        height: 24
    }
})