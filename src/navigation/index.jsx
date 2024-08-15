import React, { useState } from "react";

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import { withSafeArea } from "../../common/SafeAreaWrapper";

export default function Navigation(props) {
    const [state, setState] = useState({ loggedIn: false });
    const Stack = createNativeStackNavigator();

    const appTheme = DefaultTheme;
    appTheme.colors.background = "#fff";

    const authHandler = (v) => {
        setState((prev) => {
            return { ...prev, loggedIn: v };
        });
    };

    return (
        <NavigationContainer theme={appTheme}>
            <Stack.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                })}
                initialRouteName="Main"
            >
                {state?.loggedIn ? (
                    <Stack.Screen name="Main" component={AppNavigator} />
                ) : (
                    <Stack.Screen
                        name="Auth"
                        component={withSafeArea(AuthNavigator)}
                        // initialParams={{ authHandler: authHandler }}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
