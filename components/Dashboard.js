import React, {Component} from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home";
import Favourites from "./Favourites";
import Cart from "./Cart"
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

class Dashboard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Favourites" component={Favourites} />
                <Tab.Screen name="Cart" component={Cart} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        );      
    }
}
export default Dashboard;