import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default class Sobre extends Component{

    constructor(props){
        super(props)
        this.state = {altura:null, peso:null, apertou:false}
    }

    /*acaoBotao = ()=>{
        if(this.state.altura != null && this.state.peso != null){
            this.setState({apertou:true})
        }
        console.log(this.state.apertou);
    }*/
    render(){
        return(
            <View style={estilos.container}>
                <Text style={estilos.cabecalho}>Sobre</Text>
                <Text style={estilos.textoCorpo}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
                <View style={estilos.botao}>
                    <Button title="HOME" onPress={()=>this.props.navigation.navigate('Home', {})}/>
                </View>
            </View>
        )
    }
}
const estilos = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#e5e5e5'
        },
        cabecalho:{
            fontSize:24,
            fontWeight:'bold',
            margin:10
        },
        textoCorpo:{
            fontSize:18,
            fontWeight:'bold'
        },
        botao:{
            width:'95%',
            margin:15,
        }
    }
)