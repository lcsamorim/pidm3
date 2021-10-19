import React, { Component } from "react";
import { render } from "react-dom";
import { Text, View, Image } from "react-native";


export default class Corpo extends Component{
    render(){
        return(
                <Image source={this.props.figura} style={{width:200, height:200}}/>
        )
    }
}