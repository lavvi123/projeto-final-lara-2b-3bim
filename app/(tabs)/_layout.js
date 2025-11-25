import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";


export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen 
                name="index" 
                options={{ 
                    title: "Página Inicial",
                    headerShown: false,
                    tabBarIcon: ({color}) => ( 
                        <MaterialCommunityIcons name="script-text" size={26} color={color} />
                    ),
                }}
            />

            <Tabs.Screen 
                name="pageone" 
                options={{ 
                    title: "História da Arte", 
                    headerShown: false,
                    tabBarIcon: ({color}) => ( 
                        <FontAwesome5 name="palette" size={24} color={color} />
                    ), 
                }}
            />

            <Tabs.Screen 
                name="pagetwo" 
                options={{ 
                    title: "Personagens", 
                    headerShown: false,
                    tabBarIcon: ({color}) => ( 
                        <MaterialCommunityIcons name="sword-cross" size={26} color={color} />
                    ),  
                }}
            />

            <Tabs.Screen 
                name="aboutme" 
                options={{ 
                    title: "Sobre Mim", 
                    headerShown: false,
                    tabBarIcon: ({color}) => ( 
                        <MaterialCommunityIcons name="leaf" size={26} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}