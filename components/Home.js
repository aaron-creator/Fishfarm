import React, { Component } from "react";
import { Button, Text, View ,StyleSheet,TextInput, Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.inputholder}>
                    <TextInput 
                    style={styles.txtinput}
                    type="text"
                    placeholder="Search for fish or farm"
                    />
                    <View style={{flexDirection:"row", justifyContent:"flex-end"}}>
                        <Text style={{color:"#808080", marginRight:10}} onPress={()=> console.log("Forget Password clicked")} >Forget Password?</Text>
                    </View>
                </View>
                
                <TouchableOpacity style={styles.logbut} onPress ={()=>console.log("Clicked")}>
                    <Text style={{color:"#fff", textAlign:"center",padding:5}}>Login</Text>
                </TouchableOpacity>
                <Text style={{textAlign:"center" , marginTop:15}}> ──────── or Login with ────────</Text>
                <TouchableOpacity style={styles.Googlebut} onPress ={()=>console.log("googleClicked")}>
                    <Image style={{width:20, height:20, alignSelf:"center"}} source={require("../assets/google.png")}/>
                    <Text style={{color:"black", textAlign:"center",padding:5}}>Login with Google</Text>
                </TouchableOpacity>
                <View style={styles.bottomholder}>
                    <Text style={{textAlign:"center"}}> New User ? <Text style={{color:"blue"}} onPress={()=> console.log("create Account")}>Create Account</Text></Text>
                </View>
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
        justifyContent:"flex-start",
        //backgroundColor:"red",
    },
    txtinput:{
        borderRadius: 10,
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0,
        marginTop:20,
        marginBottom:10,
        marginLeft:20,
        marginRight:20,
        backgroundColor:"#fff",
        padding:10,
        paddingLeft:0,
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
    }
});
export default Home;