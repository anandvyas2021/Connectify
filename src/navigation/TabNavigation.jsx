import React from "react";

// import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/MainApp/BottomTabs/Home";
import Task from "../screens/MainApp/BottomTabs/Task";
import Plus from "../screens/MainApp/BottomTabs/Plus";
import Inbox from "../screens/MainApp/BottomTabs/Inbox";
import Profile from "../screens/MainApp/BottomTabs/Profile";
import { withSafeArea } from "../../common/SafeAreaWrapper";

export default function TabNavigation(props) {
    const Tab = createBottomTabNavigator();

    const tabScreens = [
        {
            name: "Home",
            key: "home",
            component: Home,
            icon: "home-sharp",
            focusedIcon: "home-outline",
        },
        {
            name: "Chat",
            key: "message-circle",
            component: Task,
            icon: "chatbox-ellipses-sharp",
            focusedIcon: "chatbox-ellipses-outline",
        },
        {
            name: "Plus",
            key: "plus-circle",
            component: Plus,
            icon: "add-circle-sharp",
            focusedIcon: "add-circle-outline",
        },
        {
            name: "Inbox",
            key: "notifications",
            component: Inbox,
            icon: "notifications-sharp",
            focusedIcon: "notifications-outline",
        },
        {
            name: "Profile",
            key: "person",
            component: Profile,
            icon: "person-circle-sharp",
            focusedIcon: "person-circle-outline",
        },
    ];

    return (
        <Tab.Navigator
            screenOptions={({ route }) => {
                const tabConfig = tabScreens?.find(
                    (tab) => tab?.name === route?.name
                );
                const isPlus = route?.name === "Plus";

                return {
                    headerShown: false,
                    tabBarInactiveTintColor: "#a2a5a8",
                    tabBarActiveTintColor: "#016ef0",
                    tabBarStyle: styles.tabBar,
                    tabBarItemStyle: styles.tabItem,
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Ionicons
                                name={
                                    focused
                                        ? tabConfig?.icon
                                        : tabConfig?.focusedIcon
                                }
                                size={isPlus ? 40 : focused ? 30 : size}
                                color={color}
                            />
                        );
                    },
                    tabBarIconStyle: isPlus ? { ...styles.tabIcon1 } : null,
                    // tabBarShowLabel: false,
                    tabBarLabel: ({ focused, color }) => {
                        return isPlus ? null : (
                            <Text
                                style={{ color, fontSize: 12, fontWeight: 700 }}
                            >
                                {route?.name}
                            </Text>
                        );
                    },
                    tabBarBadge: route?.name === "Chat" ? 2 : null,
                    tabBarBadgeStyle: styles?.tabBadge,

                    // tabBarBackground: () => (
                    //     <BlurView
                    //         intensity={50}
                    //         tint="light"
                    //         style={{ flex: 1 }}
                    //     />
                    // ),
                };
            }}
        >
            {tabScreens?.map((tab) => (
                <Tab.Screen
                    key={tab?.key}
                    name={tab?.name}
                    component={withSafeArea(tab?.component)}
                    options={
                        {
                            //     tabBarButton: (props) =>
                            //         tab?.name === "Plus" ? (
                            //             <CustomTabBarButton {...props} />
                            //         ) : null,
                        }
                    }
                />
            ))}
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        minHeight: 60,
        overflow: "hidden",
        margin: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#d1d5db",
    },
    tabItem: {
        paddingBottom: 5,
        paddingTop: 5,
        paddingHorizontal: 2,
    },
    tabIcon1: { top: -0, zIndex: 100 },
    tabBadge: {
        fontSize: 13,
        fontWeight: 800,
    },
});
