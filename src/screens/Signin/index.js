import React, {useState} from "react";
import { View, Text} from "react-native";
import AuthHeader from "../../components/AuthHeader";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import { styles } from "./styles";
import Separator from "../../components/Seperator";
import GoogleLogin from "../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = ({navigation}) => {
    const [checked, setChecked] = useState(false);

    const onSignup = () => {
        navigation.navigate('Signup')
    }

    const onBack = () => {
        navigation.goBack()
    }
    return (
        <SafeAreaView style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign In"/>
            <Input label="Email" placeholder="example@gmail.com" />
            <Input isPassword label="Password" placeholder="******" />
            <Button style={styles.button} title="Sign In"/>
            <Separator text="Or sign in with" />
            <GoogleLogin />
            <Text onPress={onSignup} style={styles.footerText}>Don't have an account?
                <Text style={styles.footerLink}> Sign Up</Text>
            </Text>
        </SafeAreaView>
    )
}

export default SignIn