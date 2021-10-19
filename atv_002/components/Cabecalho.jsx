import React, { Component } from "react";
import { render } from "react-dom";
import { Text, View } from "react-native";

export default class Cabecalho extends Component{
    render(){
        return(
            <View>
                <Text>Nome: {this.props.nome}</Text>
                <Text>Curso: {this.props.curso}</Text>
            </View>
        )
    }
}