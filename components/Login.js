import React, { Component } from "react";
import { Text, View, StyleSheet,Image,SafeAreaView } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

class Login extends Component{
 
    constructor(props){
        super(props);

        this.onSelectInput = this.onSelectInput.bind(this);
        this.onDeselectInput = this.onDeselectInput.bind(this);
        this.state={
            bgcolor:"#ededed",
            passvalue:true,
        };
    }
    onSelectInput(){
        this.setState({bgcolor:"blue"});
    }
    onDeselectInput(){
        this.setState({bgcolor:"#ededed"});
    }
    onDisablePassword(){
        this.setState({passvalue:false});
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Image 
                    style={styles.logoimg}
                    source={require("../assets/logo.jpg")}
                    />
                    <Text style={{fontWeight:"bold",fontSize:20, lineHeight:70}}>FISH FARM</Text>
                </View>
                <View style={styles.inputholder}>
                    <TextInput 
                    style={[styles.txtinput,{borderColor:this.state.bgcolor}]}
                    type="text"
                    placeholder="Farm Name/ Email"
                    onFocus={this.onSelectInput}
                    onBlur={this.onDeselectInput}
                    />
                    <TextInput 
                    style={[styles.txtinput,{borderColor:this.state.bgcolor}]}
                    type="text"
                    placeholder="Password"
                    secureTextEntry={this.state.passvalue}
                    onFocus={this.onSelectInput}
                    onBlur={this.onDeselectInput}
                    />
                    <View style={{flexDirection:"row", justifyContent:"flex-end"}}>
                        <Text style={{color:"#808080", marginRight:10}} onPress={()=> console.log("Forget Password clicked")} >Forget Password?</Text>
                    </View>
                </View>
                
                <TouchableOpacity style={styles.logbut} onPress ={()=> this.props.navigation.navigate("Dashboard")}>
                    <Text style={{color:"#fff", textAlign:"center",padding:5}}>Login</Text>
                </TouchableOpacity>
                <Text style={{textAlign:"center" , marginTop:10}}> ──────── or Login with ────────</Text>
                <TouchableOpacity style={styles.Googlebut} onPress ={()=>console.log("googleClicked")}>
                    <Image style={{width:20, height:20, alignSelf:"center"}} source={require("../assets/google.png")}/>
                    <Text style={{color:"black", textAlign:"center",padding:5}}>Login with Google</Text>
                </TouchableOpacity>
                <View style={styles.bottomholder}>
                    <Text style={{textAlign:"center"}}> New User ? <Text style={{color:"blue"}} onPress={()=> this.props.navigation.navigate("Signup")}>Create Account</Text></Text>
                </View>
            </SafeAreaView>
            
        );
    }
}
const styles = StyleSheet.create({
    header:{
        width:"100%",
        justifyContent:"flex-start",
        //backgroundColor:"green",
        flexDirection:"row",
        padding:10,
        marginBottom:100,    
    },
    logoimg:{
        width:50,
        height:20,
        alignSelf:"center",
    },
    container:{
        width:"100%",
        display:"flex",
        flex:1,
        flexDirection:"column",
        marginTop:20,
        justifyContent:"space-between",
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
        borderWidth:2,
        borderColor:"#ededed",
    },
    inputholder:{
        width:"100%",
        flexDirection:"column",
        justifyContent:"flex-end",
        //backgroundColor:"pink",
    },
    logbut:{
        borderRadius: 10,
        //marginTop:30,
        marginBottom:5,
        marginLeft:20,
        marginRight:20,
        backgroundColor:"blue",
        padding:10,
    },
    Googlebut:{
        flexDirection:"row",
        borderRadius: 10,
        //marginTop:30,
        marginBottom:5,
        marginLeft:20,
        marginRight:20,
        backgroundColor:"#fff",
        padding:10,
        justifyContent:"center",
    },
    bottomholder:{
        flexDirection:"column",
        marginTop:15,
        marginBottom:5,
    }
});
export default Login;