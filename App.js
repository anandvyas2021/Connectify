import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    return (
        <SafeAreaView>
            <View>
                <Text>Main App</Text>
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}
