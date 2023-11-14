import React from "react";
import {
    Text,
    View,
    Image,
    Pressable
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

const AuthHeader = ({ title, onBackPress }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Pressable hitSlop={20} onPress={onBackPress}>
                <Image style={styles.image} source={require('../../assets/auth_back.png')} />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default React.memo(AuthHeader)