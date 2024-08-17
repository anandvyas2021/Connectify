import React from "react";
import authBanner from "../../assets/authBanner.svg";

import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { Image } from "expo-image";

import LinearGradientBG from "../../common/LinearGradientBG";
import { Input, ButtonComponent, CountryInput } from "../components";

export default function AuthNavigator(props) {
    return (
        <KeyboardAvoidingView
            className="h-full"
            // behavior="position"
            keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            // style={{ flex: 1 }}
        >
            <LinearGradientBG>
                <View className="h-full">
                    <View className="items-center p-5 h-2/5">
                        {/* <Text className="!text-white">AuthNavigator</Text> */}
                        <Image
                            source={authBanner}
                            style={{ width: 200, height: 200 }}
                        />
                    </View>

                    <View className="z-[100] rounded-t-3xl p-6 shadow-xl bg-white h-full">
                        <View className="-z-10 w-11/12">
                            <View className="absolute -top-9 rounded-t-2xl h-3 left-0 right-0 mx-auto bg-extra1"></View>
                        </View>
                        <View className="flex-1">
                            <View className="w-full items-center mb-10">
                                <Text
                                    className="text-[27px] mb-1 font-extrabold text-black2"
                                    // style={{ fontFamily: "primary-font-bold" }}
                                >
                                    Welcome Back
                                </Text>
                                <Text className="text-sm font-semibold text-black3">
                                    Enter your details below
                                </Text>
                            </View>
                            <View className="w-full">
                                <View className="mb-10">
                                    <CountryInput
                                        label="Mobile Number"
                                        mode="outlined"
                                        type="numeric"
                                    />
                                </View>
                                <View>
                                    <ButtonComponent
                                        label="Log In"
                                        // onPress={() =>
                                        //     console.log("Button Pressed")
                                        // }
                                    />
                                </View>
                            </View>
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
        </KeyboardAvoidingView>
    );
}
