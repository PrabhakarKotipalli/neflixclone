import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { BlurView } from 'expo-blur';
import { Ionicons,Entypo ,MaterialIcons} from '@expo/vector-icons';
import Home from "./screens/Home"
import Profile from "./screens/Profile"





export default function App() {
  const Tab = createBottomTabNavigator()
  const bottomBarColor = "#1f1f1e"
  return (
    
      <NavigationContainer>
      
      <Tab.Navigator      >
    
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown:false,
          tabBarLabel: 'Home',
          tabBarBackground:()=><View style = {{backgroundColor:"black"}}/>,
          tabBarActiveBackgroundColor:bottomBarColor,
          tabBarInactiveBackgroundColor:bottomBarColor,
          tabBarActiveTintColor:"white",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />




<Tab.Screen
        name="Games"
        component={Profile}
        options={{
          tabBarLabel: 'Games',
          tabBarActiveBackgroundColor:bottomBarColor,
          tabBarInactiveBackgroundColor:bottomBarColor,
          tabBarActiveTintColor:"white",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="game-controller-sharp" size={24} color={color} />
          ),
        }}
      />


<Tab.Screen
        name="News"
        component={Profile}
        options={{
          tabBarLabel: 'New & Hot',
          tabBarActiveBackgroundColor:"black",
          tabBarInactiveBackgroundColor:"black",
          tabBarActiveTintColor:"white",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="video-collection" size={24} color={color} />
          ),
        }}
      />

<Tab.Screen
        name="Laughs"
        component={Profile}
        options={{
          tabBarLabel: 'Fast Laughs',
          headerShown:false,
          tabBarActiveBackgroundColor:"black",
          tabBarInactiveBackgroundColor:"black",
          tabBarActiveTintColor:"white",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="emoji-happy" size={24} color={color} />
          ),
        }}
      />





<Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarActiveBackgroundColor:"black",
          tabBarInactiveBackgroundColor:"black",
          tabBarActiveTintColor:"white",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" size={24} color={color} />
          ),
        }}
      />

      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
