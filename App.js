import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigation from "./src/navigation";

export default function App() {
    return (
        <>
            <SafeAreaView>
                {/* <Text>d</Text> */}
                <StatusBar backgroundColor="#3e3ad7" />
            </SafeAreaView>
            <Navigation />
        </>
    );
}

{
    /* 
     <SafeAreaView>
        <View className="  bg-green-300">
            <StatusBar style="auto" />
            <Text>Main App</Text>
        </View>;
     </SafeAreaView>
 */
}
