import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import { Text } from "react-native";

export default function App() {
    const [loaded, error] = useFonts({
        "primary-font": require("./assets/fonts/PTSans-Regular.ttf"),
        "primary-font-bold": require("./assets/fonts/PTSans-Bold.ttf"),
    });
    if (!loaded) {
        return <Text>Loading</Text>;
    }
    return (
        <>
            <SafeAreaView>
                {/* <Text style={{ fontFamily: "primary-font"}}>Text</Text> */}
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
