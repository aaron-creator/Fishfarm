import React, { Component } from "react";
import { ScrollView, Text, View , Image,StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class Mediumcard extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>

                <Image 
                source={require("../assets/fishbanner.jpg")} 
                style={{width:"90%",height:"30%",alignSelf:"center",marginTop:40, borderRadius:10}} 
                />
                        
                <Text style={{fontSize:20, marginTop:10,marginLeft:20, marginBottom:35, textAlign:"center"}}><Text style={{fontWeight:"bold"}}>FIN FISH</Text></Text>
                <Text style={{fontSize:18,marginLeft:20, marginBottom:35,textDecorationLine:"underline"}}><Text style={{fontWeight:"bold"}}>Details</Text></Text>
                <Text style={{fontSize:15,marginLeft:20, marginBottom:35}}>Rating : 4.5</Text>
                <Text style={{fontSize:15,marginLeft:20, marginBottom:35}}>Cost : Rs 40</Text>
                <View style={styles.voidspace}></View>
                <View style={styles.voidspace}></View>
                <TouchableOpacity style={styles.logbut} onPress ={()=> this.props.navigation.goBack()}>
                    <Text style={{color:"#fff", textAlign:"center",padding:5}}>Go Back</Text>
                </TouchableOpacity>
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
        justifyContent:"space-evenly",
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
export default Mediumcard;