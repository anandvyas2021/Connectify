import { StatusBar } from "expo-status-bar";

import { SafeAreaView } from "react-native-safe-area-context";
import Navigation from "./src/navigation";

export default function App() {
    return (
        <>
            <SafeAreaView className="h- ">
                <StatusBar style="auto" />
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
