import React from "react";
import {
    Text,
    View,
    Image,
    Pressable
} from "react-native";
import Button from "../../../components/Button";
import { styles } from "./styles";

const Splash = () => {
    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require('../../../assets/splash_image.png')} />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>You’ll Find
                    <Text style={styles.innerTitle}>All you need</Text>
                    Here!</Text>
            </View>

            <Button title="Sign Up" />
            <Pressable hitSlop={20}>
                <Text style={styles.footerText}>Sign in</Text>
            </Pressable>
        </View>


    )
}

export default Splash;
