import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
export default class Home extends Component{

    
    render(){
        return(
            <View style={estilos.container}>
                <Text style={estilos.cabecalho}>ATV 4</Text>
                <View style={estilos.botao}>
                    <Button title="CADASTRO" onPress={()=>this.props.navigation.navigate('Cadastro', {})}/>
                </View>
                <View style={estilos.botao}>
                    <Button title="IMC" onPress={()=>this.props.navigation.navigate('IMC', {})}/>
                </View>
                <View style={estilos.botao}>
                    <Button title="SOBRE" onPress={()=>this.props.navigation.navigate('Sobre', {})}/>
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
        botao:{
            width:'95%',
            margin:15,
        }
    }
)