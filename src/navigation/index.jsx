import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./TabNavigation";

export default function Navigation(props) {
    return (
        <NavigationContainer>
            <TabNavigation />
        </NavigationContainer>
    );
}
