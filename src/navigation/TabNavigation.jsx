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

    const tabScreens = [
        {
            name: "Home",
            key: "home",
            component: Home,
            iconName: "home",
        },
        {
            name: "Task",
            key: "list",
            component: Task,
            iconName: "list",
        },
        {
            name: "Plus",
            key: "add-circle",
            component: Plus,
            iconName: "add-circle",
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
            iconName: "person",
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
                            <Ionicons
                                name={`${tabConfig?.iconName}-${
                                    focused ? "sharp" : "outline"
                                }`}
                                size={size}
                                color={color}
                            />
                        );
                    },
                    tabBarInactiveTintColor: "#a2a5a8",
                    tabBarActiveTintColor: "#ef5589",
                    tabBarStyle: { paddingVertical: 2 },
                    tabBarLabelStyle: { fontSize: 12 },
                };
            }}
        >
            {tabScreens?.map((tab) => (
                <Tab.Screen
                    key={tab?.key}
                    name={tab?.name}
                    component={tab?.component}
                />
            ))}
            {/* <Tab.Screen
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
            />  
              <Tab.Screen
                name="Task"
                key="list"
                component={Task}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="list-sharp" />
                    ),
                }}
            />
            <Tab.Screen
                name="Plus"
                key="add-circle"
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
            */}
        </Tab.Navigator>
    );
}
