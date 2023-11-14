import React from "react";
import {
    TouchableOpacity,
    Text,
} from "react-native";
import { Styles } from "./styles";

const Button = ({title, onPress}) => {

    return(
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={Styles.container}>
            <Text style={Styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default React.memo(Button)