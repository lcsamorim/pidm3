import React, { Component } from "react";
import { StyleSheet, View, Text,TextInput, Button } from "react-native";
export default class Cadastro extends Component{

    constructor(props){
        super(props)
        this.state = {nome:null, idade:null, email:null}
    }

    render(){
        return(
            <View style={estilos.container}>
                <Text style={estilos.cabecalho}>Cadastro</Text>
                <TextInput placeholder="Digite seu nome" id="nome" style={estilos.campo} onChangeText={(valorDoCampo)=>this.setState({nome:valorDoCampo})}></TextInput>
                <TextInput placeholder="Digite sua idade" style={estilos.campo} onChangeText={(valorDoCampo)=>this.setState({idade:valorDoCampo})}></TextInput>
                <TextInput placeholder="Digite seu email" style={estilos.campo} onChangeText={(valorDoCampo)=>this.setState({email:valorDoCampo})}></TextInput>
                <View style={estilos.botao}>
                    <Button title="CONFIRMAR" onPress={()=>this.props.navigation.navigate('Modal', {nome:this.state.nome, idade:this.state.idade, email:this.state.email})}/>
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
        campo:{
            height:45,
            width:'95%',
            borderColor: 'gray',
            borderWidth:2,
            marginTop:3,
            paddingLeft:20,
            fontSize:20
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