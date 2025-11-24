import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen 
                name="index" 
                options={{ 
                    title: "Página Inicial",
                    headerShown: false,
                    tabBarIcon: ({color}) => ( 
                        <FontAwesome name="home" size={24} color={color} />
                    ),
                }}
            />

            <Tabs.Screen 
                name="pageone" 
                options={{ 
                    title: "História da Arte", 
                    headerShown: false,
                    tabBarIcon: ({color}) => ( 
                        <AntDesign name="book" size={24} color={color} />
                    ), 
                }}
            />

            <Tabs.Screen 
                name="pagetwo" 
                options={{ 
                    title: "Wiki", 
                    headerShown: false,
                    tabBarIcon: ({color}) => ( 
                        <FontAwesome name="wikipedia-w" size={24} color={color} />
                    ),  
                }}
            />

             <Tabs.Screen 
                name="mapa" 
                options={{ 
                    title: "Mapa", 
                    headerShown: false,
                    tabBarIcon: ({color}) => ( 
                        <Fontisto name="map" size={24} color={color} />
                    ),
                }}
            />

            <Tabs.Screen 
                name="aboutme" 
                options={{ 
                    title: "Sobre Mim", 
                    headerShown: false,
                    tabBarIcon: ({color}) => ( 
                        <MaterialIcons name="nature-people" size={24} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
