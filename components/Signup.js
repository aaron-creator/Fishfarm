import React, { Component } from "react";
import Checkbox from 'expo-checkbox';
import { Text, View, StyleSheet,TextInput, Image, ScrollView} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class Signup extends Component{
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
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Image 
                    style={styles.logoimg}
                    source={require("../assets/logo.jpg")}
                    />
                    <Text style={{fontWeight:"bold",fontSize:20, lineHeight:70}}>FISH FARM</Text>
                </View>
                <Text style={{fontSize:20, marginTop:20,marginLeft:20}}><Text style={{fontWeight:"bold"}}>Create</Text> Account</Text>
                <View style={styles.inputholder}>
                    <TextInput 
                    style={[styles.txtinput,{borderColor:this.state.bgcolor}]}
                    keyboardType="ascii-capable"
                    placeholder="Farm Name"
                    onFocus={this.onSelectInput}
                    onBlur={this.onDeselectInput}
                    />
                    <TextInput 
                    style={[styles.txtinput,{borderColor:this.state.bgcolor}]}
                    keyboardType="email-address"
                    placeholder="Email"
                    onFocus={this.onSelectInput}
                    onBlur={this.onDeselectInput}
                    />
                    <TextInput 
                    style={[styles.txtinput,{borderColor:this.state.bgcolor}]}
                    keyboardType="number-pad"
                    placeholder="Mobile"
                    onFocus={this.onSelectInput}
                    onBlur={this.onDeselectInput}
                    />
                    <TextInput 
                    style={[styles.txtinput,{borderColor:this.state.bgcolor}]}
                    secureTextEntry={this.state.passvalue}
                    placeholder="Password"
                    onFocus={this.onSelectInput}
                    onBlur={this.onDeselectInput}
                    />
                    <View style={{flexDirection:"row", justifyContent:"center", marginTop: 50, marginBottom: 5}}>
                        <Text style={{textAlign:"center"}}> I agree to the<Text style={{color:"blue"}} onPress={()=> console.log("create Account")}>Terms and conditions</Text></Text>
                    </View>
                </View>
                
                <TouchableOpacity style={styles.logbut} onPress ={()=>console.log("Clicked")}>
                    <Text style={{color:"#fff", textAlign:"center",padding:5}}>Create Account</Text>
                </TouchableOpacity>
                <View style={styles.bottomholder}>
                    <Text style={{textAlign:"center"}}> Already a user ? <Text style={{color:"blue"}} onPress={()=> this.props.navigation.navigate("Login")}>Login</Text></Text>
                </View>
            </ScrollView>
            
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
        marginBottom:50,    
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
        borderWidth:2,
        borderColor:"#ededed",
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