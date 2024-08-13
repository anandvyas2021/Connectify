import React from "react";

import { Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function AuthNavigator(props) {
    console.log("props", props);
    return (
        <View>
            <Text>AuthNavigator</Text>
            <Button
                mode="outlined"
                onPress={() => props?.route?.params?.authHandler(true)}
            >
                Log In
            </Button>
        </View>
    );
}
