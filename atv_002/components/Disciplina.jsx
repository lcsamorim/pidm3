import React, { Component } from "react";
import { render } from "react-dom";
import { Text, View } from "react-native";

export default class Disciplina extends Component{
    render(){
        return(
                    <Text>Disciplina: {this.props.disciplina}</Text>
                
        )
    }
}