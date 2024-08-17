import React from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import PhoneInput from "react-native-phone-number-input";

export function CountryInput({ label, mode, type, value, disabled }) {
    return (
        <View>
            <Text style={{ fontSize: 12, fontWeight: "700" }}>{label}</Text>
            <PhoneInput
                defaultCode="IN"
                label={label}
                theme={{ colors: { primary: "#4c4556" } }}
                mode={mode}
                keyboardType={type}
                onChangeCountry={(text) => {
                    console.log(text);
                }}
                value={value}
                disabled={disabled}
                countryPickerProps={{ disabled: true }}
                layout="first"
                containerStyle={{
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: "#c6c4ca",
                }}
                textContainerStyle={{
                    borderTopRightRadius: 12,
                    borderBottomRightRadius: 12,
                    borderLeftWidth: 1,
                    borderColor: "#c6c4ca",
                }}
                textInputStyle={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#4c4556",
                }}
            />
        </View>
    );
}

export function Input({ label, mode, type, value, disabled }) {
    return (
        <TextInput
            label={label}
            theme={{ colors: { primary: "#4c4556" } }}
            mode={mode}
            keyboardType={type}
            value={value}
            disabled={disabled}
            style={{ height: 60 }}
            contentStyle={{
                fontSize: 18,
                fontWeight: "700",
                color: "#4c4556",
            }}
            outlineStyle={{ borderRadius: 12, borderColor: "#c6c4ca" }}
        />
    );
}
