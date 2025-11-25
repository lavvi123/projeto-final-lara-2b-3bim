import { Tabs } from "expo-router";
import { Animated, Platform } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRef } from "react";

function AnimatedIcon({ children }) {
  const scale = useRef(new Animated.Value(1)).current;

  const animateIn = () => {
    Animated.spring(scale, {
      toValue: 1.25,
      useNativeDriver: true,
      tension: 120,
      friction: 6,
    }).start();
  };

  const animateOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      tension: 120,
      friction: 6,
    }).start();
  };

  return (
    <Animated.View
      style={{
        transform: [{ scale }],
      }}
      onTouchStart={animateIn}
      onTouchEnd={animateOut}
      {...(Platform.OS === "web"
        ? {
            onMouseEnter: animateIn,
            onMouseLeave: animateOut,
          }
        : {})}
    >
      {children}
    </Animated.View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#E8DCC2", // PERGAMINHO
          borderTopColor: "#8B6F47", // marrom queimado
          borderTopWidth: 3,
          height: 65,
        },
        tabBarActiveTintColor: "#BFA64C", // dourado suave
        tabBarInactiveTintColor: "#5E4A2F", // marrom manuscrito
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Página Inicial",
          tabBarIcon: ({ color, size }) => (
            <AnimatedIcon>
              <MaterialCommunityIcons
                name="script-text"
                size={26}
                color={color}
              />
            </AnimatedIcon>
          ),
        }}
      />

      <Tabs.Screen
        name="pageone"
        options={{
          title: "História da Arte",
          tabBarIcon: ({ color, size }) => (
            <AnimatedIcon>
              <FontAwesome5 name="palette" size={24} color={color} />
            </AnimatedIcon>
          ),
        }}
      />

      <Tabs.Screen
        name="pagetwo"
        options={{
          title: "Personagens",
          tabBarIcon: ({ color, size }) => (
            <AnimatedIcon>
              <MaterialCommunityIcons name="sword-cross" size={26} color={color} />
            </AnimatedIcon>
          ),
        }}
      />

      <Tabs.Screen
        name="aboutme"
        options={{
          title: "Sobre Mim",
          tabBarIcon: ({ color, size }) => (
            <AnimatedIcon>
              <MaterialCommunityIcons name="leaf" size={26} color={color} />
            </AnimatedIcon>
          ),
        }}
      />
    </Tabs>
  );
}
