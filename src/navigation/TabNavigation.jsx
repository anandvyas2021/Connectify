import React from "react";

import { BlurView } from "expo-blur";
import { Ionicons, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/MainApp/BottomTabs/Home";
import Task from "../screens/MainApp/BottomTabs/Task";
import Plus from "../screens/MainApp/BottomTabs/Plus";
import Inbox from "../screens/MainApp/BottomTabs/Inbox";
import Profile from "../screens/MainApp/BottomTabs/Profile";
import { withSafeArea } from "../../common/SafeAreaWrapper";
import { View, Text, StyleSheet } from "react-native";

export default function TabNavigation(props) {
    const Tab = createBottomTabNavigator();

    const tabScreens = [
        {
            name: "Home",
            key: "home",
            component: Home,
            iconName: "home",
        },
        {
            name: "Chat",
            key: "message-circle",
            component: Task,
            iconName: "message-circle",
        },
        {
            name: "Plus",
            key: "plus-circle",
            component: Plus,
            iconName: "plus-circle",
        },
        {
            name: "Inbox",
            key: "notifications",
            component: Inbox,
            iconName: "notifications",
        },
        {
            name: "Profile",
            key: "person",
            component: Profile,
            iconName: "user",
        },
    ];
    return (
        <Tab.Navigator
            screenOptions={({ route }) => {
                const tabConfig = tabScreens?.find(
                    (tab) => tab?.name === route?.name
                );
                return {
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Feather
                                name={`${tabConfig?.iconName}${
                                    focused ? "" : ""
                                }`}
                                size={28}
                                color={color}
                            />
                        );
                    },
                    tabBarShowLabel: false,
                    tabBarInactiveTintColor: "#a2a5a8",
                    tabBarActiveTintColor: "#006fef",
                    tabBarStyle: {
                        height: 60,
                        margin: 13,
                        position: "absolute",
                        borderRadius: 25,
                        borderWidth: 1,
                        borderColor: "#d1d5db",
                    },
                    // tabBarBackground: () => (
                    //     <BlurView
                    //         intensity={50}
                    //         tint="light"
                    //         style={{ flex: 1 }}
                    //     />
                    // ),
                    // tabBarBackground: () => (
                    //     <View className="bg-white absolute bottom-0 h-full w-full">
                    //         <BlurView
                    //             // style={{ height: 100 }}
                    //             blurType="light"
                    //             blurAmount={10}
                    //         ></BlurView>
                    //     </View>
                    // ),
                    tabBarLabelStyle: { fontSize: 12, fontWeight: 700 },
                };
            }}
        >
            {tabScreens?.map((tab) => (
                <Tab.Screen
                    key={tab?.key}
                    name={tab?.name}
                    component={withSafeArea(tab?.component)}
                />
            ))}
        </Tab.Navigator>
    );
}

{
    /* <Tab.Screen
                name="Home"
                key="home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name={`home-${iconType}`}
                            color="#ef5589"
                            size={25}
                        />
                    ),
                }}
            />  */
}
