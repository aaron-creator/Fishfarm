import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Verify from "./components/Verify";
import Favourites from "./components/Favourites";

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'FISH FARM' }}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Favourites" component={Favourites} />
        <Stack.Screen name = "Login" component = {Login} options={{ title: 'FISH FARM' }}/>
        <Stack.Screen name = "Signup" component = {Signup} options={{ title: 'FISH FARM' }}/>
        <Stack.Screen name = "Verify" component = {Verify} options={{ title: 'FISH FARM' }}/>
      </Stack.Navigator>
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
