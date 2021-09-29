import React from "react";
import { Text, View } from "react-native";

export default function Aluno(){
    return(
        <View style={{alignItems:"center"}}>
            <Text style={{fontWeight:"bold", color:"#003b6f", fontSize:"30px"}}>Lucas Amorim</Text>
            <Text>21 Anos</Text>
            <Text>Pedra Branca-CE</Text>
            <Text>Design Digital</Text>
        </View>
    )
}