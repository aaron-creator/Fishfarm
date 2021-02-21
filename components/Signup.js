import React, { Component } from "react";
import Checkbox from 'expo-checkbox';
import { Text, View, StyleSheet,TextInput, Image, ScrollView} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class Signup extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ScrollView style={styles.container}>
                <Text style={{fontSize:20, marginTop:20,marginLeft:20}}><Text style={{fontWeight:"bold"}}>Create</Text> Account</Text>
                <View style={styles.inputholder}>
                    <TextInput 
                    style={styles.txtinput}
                    keyboardType="ascii-capable"
                    placeholder="Farm Name"
                    />
                    <TextInput 
                    style={styles.txtinput}
                    keyboardType="email-address"
                    placeholder="Email"
                    />
                    <TextInput 
                    style={styles.txtinput}
                    keyboardType="number-pad"
                    placeholder="Mobile"
                    />
                    <TextInput 
                    style={styles.txtinput}
                    secureTextEntry={true}
                    placeholder="Password"
                    />
                    <View style={{flexDirection:"row", justifyContent:"center", marginTop: 100, marginBottom: 5}}>
                        <Text style={{textAlign:"center"}}> I agree to the<Text style={{color:"blue"}} onPress={()=> console.log("create Account")}>Terms and conditions</Text></Text>
                    </View>
                </View>
                
                <TouchableOpacity style={styles.logbut} onPress ={()=>console.log("Clicked")}>
                    <Text style={{color:"#fff", textAlign:"center",padding:5}}>Create Account</Text>
                </TouchableOpacity>
                <View style={styles.bottomholder}>
                    <Text style={{textAlign:"center"}}> Already a user ? <Text style={{color:"blue"}} onPress={()=> console.log("create Account")}>Login</Text></Text>
                </View>
            </ScrollView>
            
        );
    }
}
const styles = StyleSheet.create({
    container:{
        width:"100%",
        display:"flex",
        flex:1,
        flexDirection:"column",
        //justifyContent:"flex-end",
        //backgroundColor:"red",
    },
    txtinput:{
        borderRadius: 10,
        marginTop:20,
        marginBottom:10,
        marginLeft:20,
        marginRight:20,
        backgroundColor:"#fff",
        padding:10,
    },
    inputholder:{
        width:"100%",
        flexDirection:"column",
        justifyContent:"center",
        //backgroundColor:"pink",
    },
    logbut:{
        borderRadius: 10,
        marginTop:30,
        marginBottom:10,
        marginLeft:20,
        marginRight:20,
        backgroundColor:"blue",
        padding:10,
    },
    Googlebut:{
        flexDirection:"row",
        borderRadius: 10,
        marginTop:30,
        marginBottom:10,
        marginLeft:20,
        marginRight:20,
        backgroundColor:"#fff",
        padding:10,
        justifyContent:"center",
    },
    bottomholder:{
        flexDirection:"column",
        marginTop:30,
        marginBottom:5,
    },
    checkbox: {
        margin: 8,
      },
});
export default Signup;