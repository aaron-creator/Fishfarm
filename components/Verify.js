import React, {Component} from "react";
import { Text, View,TouchableOpacity,Image, StyleSheet} from "react-native";

class Verify extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image 
                    style={styles.logoimg}
                    source={require("../assets/logo.jpg")}
                    />
                    <Text style={{fontWeight:"bold",fontSize:20, lineHeight:70}}>FISH FARM</Text>
                </View>
                <Text style={{fontSize:20, marginTop:10,marginLeft:10, marginBottom:35}}><Text style={{fontWeight:"bold"}}>Enter</Text> OTP</Text>
                <View style={styles.inputholder}>
                    <View style={{backgroundColor:"none"}}>
                        <Text style={{margin:15,marginBottom:2}}>───────    ───────    ───────    ───────</Text>
                    </View>
                    <View style={{flexDirection:"row", justifyContent:"space-between", marginBottom:30}}>
                        <Text style={{color:"#808080", marginLeft: 15}} onPress={()=> console.log("Forget Password clicked")} >Enter OTP sent to XXXXXXX786</Text>
                        <Text style={{color:"blue", fontWeight: "bold", marginRight: 18}} onPress={()=> console.log("RESEND OTP")} >Resend</Text>
                    </View>
                </View>
                <View style={styles.voidspace}></View>
                <View style={styles.voidspace}></View>
                <TouchableOpacity style={styles.logbut} onPress ={()=> this.props.navigation.navigate("Login")}>
                    <Text style={{color:"#fff", textAlign:"center",padding:5}}>Verify</Text>
                </TouchableOpacity>
            </View>
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
        marginBottom:80,    
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
        justifyContent:"center",
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
        marginTop:50,
        marginBottom:20,
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
    voidspace:{
        width:"100%",
        height:130,
        //backgroundColor:"yellow",
    },
    bottomholder:{
        flexDirection:"column",
        marginTop:40,
        marginBottom:5,
    }
});
export default Verify;