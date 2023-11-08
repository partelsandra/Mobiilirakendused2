import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    container: {
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        borderWidth: 1
    },
    titleContainer: {
        marginVertical: 54
    },
    title: {
        fontSize: 40,
        fontWeight: "bold" 
    },
    innerTitle: {
        color: '#FCA34D',
        textDecorationLine: 'underline' 
    },
    textContainer: {
        textAlign: "center"
    },
    footerText: {
        color: '#4F63AC',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30
    }
})