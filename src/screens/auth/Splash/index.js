import React from "react";
import {
    Text,
    View,
    Image,
    Pressable
} from "react-native"
import Button from "../../../components/Button";
import Link from "../../../components/Link";
import { styles } from "./styles";


const Splash = ({navigation}) => {
    console.log('navigation => ', navigation)

const onSignup = () => {
    navigation.navigate('Signup')
}

const onSignin = () => {
    navigation.navigate('Signin')
}

    return (
        <View style={styles.container}>
            <Image resizeMode="contain" source={require('../../../assets/splash_image.png')}/>
            <Text style={styles.title}>You'll Find</Text>
            <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
            <Text style={styles.title}>Here!</Text>
            
            <Button style={{flex: 0, width: '100%'}} onPress={onSignup} title="Sign Up" />

            <Link onPress={onSignin} title="Sign in"/>
        </View>
    )
}
export default React.memo(Splash)