import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import IMCCalc from "./IMCCalc";

export default class EntradaComBotao extends Component{

    constructor(props){
        super(props)
        this.state = {altura:null, peso:null, apertou:false}
    }

    acaoBotao = ()=>{
        if(this.state.altura != null && this.state.peso != null){
            this.setState({apertou:true})
        }
        console.log(this.state.apertou);
    }
    renderizarCalculo(){
        
        if(this.state.apertou){
            return(
                <IMCCalc altura={this.state.altura} peso={this.state.peso}></IMCCalc>
            )
        }
    }
    render(){
        return(
            <View style={estilos.container}>
                <Text style={estilos.cabecalho}>Calculadora de IMC</Text>
                <TextInput placeholder="Digite sua altura" style={estilos.campo} onChangeText={(valorDoCampo)=>this.setState({altura:valorDoCampo})}></TextInput>
                <TextInput placeholder="Digite seu peso" style={estilos.campo} onChangeText={(valorDoCampo)=>this.setState({peso:valorDoCampo})}></TextInput>
                <View style={estilos.botao}>
                    <Button title="CONFIRMAR" onPress={this.acaoBotao}/>
                </View>
                {this.renderizarCalculo()}
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
        campo:{
            height:45,
            width:'95%',
            borderColor: 'gray',
            borderWidth:2,
            marginTop:3,
            paddingLeft:20,
            fontSize:20
        },
        botao:{
            width:'95%',
            margin:15,
        }
    }
)