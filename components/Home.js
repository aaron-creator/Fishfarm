import React, { Component } from "react";
import { Button, Text, View ,StyleSheet,TextInput, Image} from "react-native";
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            favitem:false,
            heartimg:require("../assets/heart.png")
        };        
    }
    onHeartSelected(){
        this.setState({favitem:true,heartimg: require("../assets/heart_selected.png")});
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image 
                    style={styles.logoimg}
                    source={require("../assets/logo.jpg")}
                    />
                    <TouchableOpacity style={styles.notifybtn}>
                        <Image 
                        source={require("../assets/bell.png")} 
                        style={{width:20,height:20,alignSelf:"center",marginTop:5}} 
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputholder}>
                    <TextInput 
                    style={styles.txtinput}
                    type="text"
                    placeholder="Search for fish or farm"
                    />
                </View>
                <ScrollView>

                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <Text style={{color:"black",fontWeight:"bold", marginLeft:15}} >Farms around you</Text>
                            <Text style={{color:"#808080", marginRight:20}} >View All</Text>
                    </View>
                    <ScrollView horizontal={true}  style={styles.scroll1}>
                        
                        <TouchableOpacity style={styles.smallcard} onPress={()=> console.log("Small Card Pressed")}>
                            <Image 
                            source={require("../assets/pic1.png")} 
                            style={{width:40,height:40,alignSelf:"center",marginTop:5}} 
                            />
                            <Text style={{fontSize:10,textAlign:"center",marginTop:5}}>Angel Fisheries</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.smallcard} onPress={()=> console.log("Pressed")}>
                            <Image 
                            source={require("../assets/pic1.png")} 
                            style={{width:40,height:40,alignSelf:"center",marginTop:5}} 
                            />
                            <Text style={{fontSize:10,textAlign:"center",marginTop:5}}>Jomel's Fisheries</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.smallcard} onPress={()=> console.log("Pressed")}>
                            <Image 
                            source={require("../assets/pic1.png")} 
                            style={{width:40,height:40,alignSelf:"center",marginTop:5}} 
                            />
                            <Text style={{fontSize:10,textAlign:"center",marginTop:5}}>Farmin Fisheries</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.smallcard} onPress={()=> console.log("Pressed")}>
                            <Image 
                            source={require("../assets/pic1.png")} 
                            style={{width:40,height:40,alignSelf:"center",marginTop:5}} 
                            />
                            <Text style={{fontSize:10,textAlign:"center",marginTop:5}}>Jarvis Fisheries</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.smallcard} onPress={()=> console.log("Pressed")}>
                            <Image 
                            source={require("../assets/pic1.png")} 
                            style={{width:40,height:40,alignSelf:"center",marginTop:5}} 
                            />
                            <Text style={{fontSize:10,textAlign:"center",marginTop:5}}>Angel Fisheries</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.smallcard} onPress={()=> console.log("Pressed")}>
                            <Image 
                            source={require("../assets/pic1.png")} 
                            style={{width:40,height:40,alignSelf:"center",marginTop:5}} 
                            />
                            <Text style={{fontSize:10,textAlign:"center",marginTop:5}}>Angel Fisheries</Text>
                        </TouchableOpacity>
                        
                    </ScrollView>


                    <ScrollView horizontal={true} style={styles.scroll2}>
                        <TouchableOpacity style={styles.bigcard} onPress={()=> console.log("Pressed")}>
                            <Image 
                            source={require("../assets/fishbanner.jpg")} 
                            style={{width:246,height:146,alignSelf:"center",marginTop:2, borderRadius:10}} 
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bigcard} onPress={()=> console.log("Pressed")}>
                            <Image 
                            source={require("../assets/fishbanner.jpg")} 
                            style={{width:246,height:146,alignSelf:"center",marginTop:2, borderRadius:10}} 
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bigcard} onPress={()=> console.log("Pressed")}>
                            <Image 
                            source={require("../assets/fishbanner.jpg")} 
                            style={{width:246,height:146,alignSelf:"center",marginTop:2, borderRadius:10}} 
                            />
                        </TouchableOpacity>
                        
                    </ScrollView>
                    <Text style={{textAlign:"left" ,fontWeight:"bold", marginTop:15, marginLeft:15}}>Recommended for you</Text>
                    
                    <View style={styles.recommended}>
                        <TouchableWithoutFeedback style={styles.mediumcard} onPress={() => this.props.navigation.navigate("Mediumcard")} >
                                <Image 
                                source={require("../assets/pic1.png")} 
                                style={{width:50,height:50,alignSelf:"flex-start",marginTop:15, marginLeft:15}} 
                                />
                                <View style={{flexDirection:"column",justifyContent:"center"}} >
                                    <Text style={{fontSize:15,fontWeight:"bold", textAlign:"left",paddingLeft:10}}>Fin Fish</Text>
                                    <Text style={{fontSize:15,textAlign:"left",paddingLeft:10}}>4.5 <Text style={{fontSize:13, fontWeight:"normal", color:"grey"}}> Min Buy 5 pieces lenght 3cm</Text></Text>
                                    <Text style={{fontSize:15, fontWeight:"bold", textAlign:"left",paddingLeft:10}}>Rs 40 <Text style={{fontSize:15 , fontWeight:"normal", color:"grey"}}>/Piece</Text></Text>
                                </View>
                                <TouchableOpacity  style={styles.heartholder} onPress={() => this.onHeartSelected()}>
                                    <Image source={this.state.heartimg}
                                    style={styles.hearticon}
                                    />
                                </TouchableOpacity>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback style={styles.mediumcard} onPress={() => this.props.navigation.navigate("Mediumcard")} >
                                <Image 
                                source={require("../assets/pic1.png")} 
                                style={{width:50,height:50,alignSelf:"flex-start",marginTop:15, marginLeft:15}} 
                                />
                                <View style={{flexDirection:"column",justifyContent:"center"}} >
                                    <Text style={{fontSize:15,fontWeight:"bold", textAlign:"left",paddingLeft:10}}>Fin Fish</Text>
                                    <Text style={{fontSize:15,textAlign:"left",paddingLeft:10}}>4.5 <Text style={{fontSize:13, fontWeight:"normal", color:"grey"}}> Min Buy 5 pieces lenght 3cm</Text></Text>
                                    <Text style={{fontSize:15, fontWeight:"bold", textAlign:"left",paddingLeft:10}}>Rs 40 <Text style={{fontSize:15 , fontWeight:"normal", color:"grey"}}>/Piece</Text></Text>
                                </View>
                                <TouchableOpacity  style={styles.heartholder} onPress={() => console.log("heart selected")}>
                                    <Image source={require("../assets/heart.png")}
                                    style={styles.hearticon}
                                    />
                                </TouchableOpacity>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback style={styles.mediumcard} onPress={() => this.props.navigation.navigate("Mediumcard")} >
                                <Image 
                                source={require("../assets/pic1.png")} 
                                style={{width:50,height:50,alignSelf:"flex-start",marginTop:15, marginLeft:15}} 
                                />
                                <View style={{flexDirection:"column",justifyContent:"center"}} >
                                    <Text style={{fontSize:15,fontWeight:"bold", textAlign:"left",paddingLeft:10}}>Fin Fish</Text>
                                    <Text style={{fontSize:15,textAlign:"left",paddingLeft:10}}>4.5 <Text style={{fontSize:13, fontWeight:"normal", color:"grey"}}> Min Buy 5 pieces lenght 3cm</Text></Text>
                                    <Text style={{fontSize:15, fontWeight:"bold", textAlign:"left",paddingLeft:10}}>Rs 40 <Text style={{fontSize:15 , fontWeight:"normal", color:"grey"}}>/Piece</Text></Text>
                                </View>
                                <TouchableOpacity  style={styles.heartholder} onPress={() => console.log("heart selected")}>
                                    <Image source={require("../assets/heart_selected.png")}
                                    style={styles.hearticon}
                                    />
                                </TouchableOpacity>
                        </TouchableWithoutFeedback>
                    </View>
                </ScrollView>
            </View>
            
        );
    }
}
const styles = StyleSheet.create({
    header:{
        width:"100%",
        justifyContent:"space-between",
        //backgroundColor:"green",
        flexDirection:"row",
        padding:10,
        marginBottom:5,  
        marginTop:10,  
    },
    logoimg:{
        width:50,
        height:20,
        alignSelf:"center",
        marginTop:20
    },
    container:{
        width:"100%",
        display:"flex",
        flex:1,
        flexDirection:"column",
        //justifyContent:"flex-start",
        //backgroundColor:"red",
    },
    notifybtn:{
        borderRadius:10,
        backgroundColor:"#fff",
        width:35,
        height:35,
        alignSelf:"center",
        marginTop:20,
    },
    smallcard:{
        borderRadius:10,
        backgroundColor:"#fff",
        width:65,
        height:85,
        alignSelf:"center",
        marginTop:15,
        margin:5,
    },
    mediumcard:{
        flexDirection:"row",
        borderRadius:10,
        backgroundColor:"#fff",
        width:340,
        height:80,
        alignSelf:"center",
        marginTop:5,
        margin:5,
    },
    bigcard:{
        borderRadius:10,
        backgroundColor:"#fff",
        width:250,
        height:150,
        alignSelf:"center",
        marginTop:5,
        margin:5,
    },
    scroll1:{
        flexDirection: "row",
        marginLeft:10,
        marginBottom:10,
        //backgroundColor:"yellow",
    },
    scroll2:{
        marginLeft:10,
        marginBottom:10,
        //backgroundColor:"purple"
    },
    recommended:{
        flexDirection:"column",
        width:"100%",
        //backgroundColor:"lightblue"
    },
    heartholder:{
        margin:20,
        width:40,
        height:40,
        justifyContent:"center",
        alignItems:"center",
        
    },
    hearticon:{
        width :25,
        height:25,
    },
    txtinput:{
        borderRadius: 10,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        marginTop:5,
        marginBottom:10,
        marginLeft:20,
        marginRight:20,
        backgroundColor:"#fff",
        padding:10,
        paddingLeft:10,
    },
    inputholder:{
        width:"100%",
        flexDirection:"column",
        justifyContent:"center",
        //backgroundColor:"pink",
    },
    
});
export default Home;