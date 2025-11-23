import { Slot } from "expo-router";
import { View, Text } from "react-native";
import { useFonts, MedievalSharp_400Regular } from "@expo-google-fonts/medievalsharp";

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    MedievalSharp_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Carregando fontes...</Text>
      </View>
    );
  }

  return <Slot />;
}
