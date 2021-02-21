import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class Cart extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Text>This is Cart.</Text>
                <Text>what</Text>
                <TouchableOpacity onPress ={() => console.log("Clicked")}>
                    <Text>Button</Text>
                </TouchableOpacity>
            </View>
            
        );
    }
}
export default Cart;