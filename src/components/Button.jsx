import React from "react";
import { Button } from "react-native-paper";
import { View, TouchableNativeFeedback, Text } from "react-native";

import LinearGradientBG from "../../common/LinearGradientBG";

export default function ButtonComponent({ label, icon, loading, onPress }) {
    return (
        <TouchableNativeFeedback onPress={onPress} useForeground>
            <View style={{ borderRadius: 12, overflow: "hidden" }}>
                <LinearGradientBG
                    colors={["#393dd9", "#9c75ed", "#f0a4ff"]}
                    style={{ borderRadius: 12 }}
                >
                    <Button
                        mode="contained"
                        loading={loading}
                        icon={icon}
                        style={{
                            paddingVertical: 5,
                            backgroundColor: "transparent",
                        }}
                    >
                        <Text
                            style={{
                                color: "#fff",
                                fontSize: 15,
                                fontWeight: "700",
                            }}
                        >
                            {label}
                        </Text>
                    </Button>
                </LinearGradientBG>
            </View>
        </TouchableNativeFeedback>
    );
}
