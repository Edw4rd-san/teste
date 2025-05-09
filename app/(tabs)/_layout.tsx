import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons'
export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#b38adb',
                headerStyle: {
                    backgroundColor: '#6A0572',
                },
                headerShadowVisible: false,
                headerTintColor: '#fff', // Já estava duplicado, mantive um só
                tabBarInactiveBackgroundColor: '#6A0572', // Corrigido
                tabBarActiveBackgroundColor: '#9032bb',
                tabBarStyle: {
                    backgroundColor: '#25292e',
                },
            }}
        >

            <Tabs.Screen
                name="toDoList"
                options={{
                    title: 'Lista de Personagens de Anime',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'clipboard' : 'clipboard-outline'} color={color} size={24} />
                    ),
                }}
            />

            <Tabs.Screen
                name="index"
                options={{
                    title: 'Página Inicial',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'Sobre Nós',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? "information-circle" : "information-circle-outline"} color={color} size={24} />
                    ),
                }}
            />

        </Tabs>




    );
}
