import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    return (
        <SafeAreaView>
            <View className="max-h-screen bg-green-300">
                <StatusBar style="auto" />
                <Text>Main App</Text>
            </View>
        </SafeAreaView>
    );
}
