

import { Slot } from "expo-router";
import {useFonts, MedievalSharp_400Regular} from "@expo-google-fonts/medievalsharp"
import { Text, View } from "react-native";

export default function RootLayout(){

     const [fontsLoaded] = useFonts({
    MedievalSharp_400Regular,
  });

    if (!fontsLoaded){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading Fonts...</Text>
            </View>
        )
    }

    return <Slot />;
}
