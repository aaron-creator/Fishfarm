import React, { Component } from "react";
import { Text, View,StyleSheet } from "react-native";

class Profile extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>                       
                <Text style={styles.topLabel}>Profile</Text>
                <Text style={styles.subLabel}>You are in Profile section.</Text>
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
    topLabel:{
        fontSize:20,
        marginTop:10,
        marginLeft:20, 
        marginBottom:35, 
        textAlign:"center",
        fontWeight:"bold"
    },
    subLabel:{
        fontSize:15,
        marginLeft:20, 
        marginBottom:35, 
        textAlign:"center"
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
export default Profile;