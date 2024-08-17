import React from "react";

import { LinearGradient } from "expo-linear-gradient";

export default function LinearGradientBG({
    children,
    className,
    style,
    colors,
}) {
    return (
        <LinearGradient
            className={`flex-1 h-full ${className}`}
            style={style}
            colors={colors ?? ["#3531d5", "#5a56dc", "#7c7ae4"]}
            // colors={["#4c669f", "#3b5998", "#192f6a"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        >
            {children}
        </LinearGradient>
    );
}
