import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from '../screens/Home';
import About from '../screens/About';

const Tab=createBottomTabNavigator();

export default function TabNavigator(){
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerShown:false
            }} >
                <Tab.Screen name='Home' component={Home} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} /> }} />

                <Tab.Screen name='About' component={About} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="information-circle" size={size} color={color} /> }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}