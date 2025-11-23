import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Fontisto from "@expo/vector-icons/Fontisto";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Página Inicial",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="pageone"
        options={{
          title: "Obrigatório",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="tag" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="pagetwo"
        options={{
          title: "Livre",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="free-code-camp" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="mapa"
        options={{
          title: "Mapa",
          tabBarIcon: ({ color }) => (
            <Fontisto name="map" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="aboutme"
        options={{
          title: "Sobre Mim",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="nature-people" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
