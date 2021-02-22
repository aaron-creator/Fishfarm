import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class Cart extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>                       
                <Text style={{fontSize:20, marginTop:10,marginLeft:20, marginBottom:35, textAlign:"center"}}><Text style={{fontWeight:"bold"}}>Cart</Text></Text>
                <Text style={{fontSize:15,marginLeft:20, marginBottom:35, textAlign:"center"}}>You are in Cart section.</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
   
    container:{
        width:"100%",
        display:"flex",
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        paddingTop:10,
        //backgroundColor:"red",
    },
    logbut:{
        borderRadius: 10,
        marginTop:10,
        marginBottom:20,
        marginLeft:20,
        marginRight:20,
        backgroundColor:"blue",
        padding:10,
    },
    voidspace:{
        width:"100%",
        height:130,
        //backgroundColor:"yellow",
    },
});
export default Cart;