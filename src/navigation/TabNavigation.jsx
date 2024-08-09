import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Tabs/Home";
import Task from "../screens/Tabs/Task";
import Plus from "../screens/Tabs/Plus";
import Inbox from "../screens/Tabs/Inbox";
import Profile from "../screens/Tabs/Profile";

export default function TabNavigation(props) {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: "28px", color: "#ef5589" },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="home-outline"
                            color="#ef5589"
                            size={25}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Task"
                component={Task}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="list-sharp" />
                    ),
                }}
            />
            <Tab.Screen
                name="Plus"
                component={Plus}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="add-circle-outline" />
                    ),
                }}
            />
            <Tab.Screen
                name="Inbox"
                component={Inbox}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="notifications-outline" />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
