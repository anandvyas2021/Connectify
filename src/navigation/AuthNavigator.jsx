import React from "react";

import { Button, TextInput } from "react-native-paper";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";

import LinearGradientBG from "../../common/LinearGradientBG";

export default function AuthNavigator(props) {
    return (
        // <KeyboardAvoidingView
        //     behavior={Platform.OS === "ios" ? "padding" : "height"}
        // style={{ flex: 1 }}
        // >
        <LinearGradientBG>
            <View className="h-full">
                <View className="p-5 h-1/4">
                    <Text className="!text-white">AuthNavigator</Text>
                </View>

                <View className="z-[100] rounded-t-2xl p-6 shadow-xl bg-white h-full">
                    <View className="-z-10 w-10/12">
                        <View className="absolute -top-8 rounded-t-2xl h-2 left-0 right-0 mx-auto bg-extra1"></View>
                    </View>
                    <View className="">
                        <Text className="text-black1">decs</Text>
                        <TextInput
                            mode="outlined"
                            label="Mobile Number"
                            keyboardType="numeric"
                        />
                    </View>
                </View>
                {/* <Button
                    mode="outlined"
                    onPress={() => props?.route?.params?.authHandler(true)}
                >
                    Log In
                </Button> */}
            </View>
        </LinearGradientBG>
        // </KeyboardAvoidingView>
    );
}
