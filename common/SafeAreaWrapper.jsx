import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export const withSafeArea = (Component) => (props) => {
    return (
        <SafeAreaView>
            <Component {...props} />
        </SafeAreaView>
    );
};

export const SafeAreaTabScreen = ({ component: Component, ...props }) => {
    return (
        <Tab.Screen {...props}>
            {(screenProps) => (
                <SafeAreaView>
                    <Component {...screenProps} />
                </SafeAreaView>
            )}
        </Tab.Screen>
    );
};
