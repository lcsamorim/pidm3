import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const Mensagem = (props) => {
    if(17 > props.IMC) return <Text style={{fontSize:25}}>Muito abaixo do peso</Text>
    if(17 <= props.IMC &&  props.IMC <= 18.49) return <Text style={{fontSize:25}}>Abaixo do peso</Text>
    if(18.5 <=  props.IMC &&  props.IMC <= 24.99) return <Text style={{fontSize:25}}>Peso normal</Text>
    if(25 <=  props.IMC &&  props.IMC <= 29.99) return <Text style={{fontSize:25}}>Acima do peso</Text>
    if(30 <=  props.IMC &&  props.IMC <= 34.99) return <Text style={{fontSize:25}}>Obesidade I)</Text>
    if(35 <=  props.IMC &&  props.IMC <= 39.99) return <Text style={{fontSize:25}}>Obesidade II (Severa)</Text>
    if(40 <  props.IMC) return <Text style={{fontSize:25}}>Obesidade III (Mórbida)</Text>
}

export default class IMC extends Component{
    
    
    constructor(props){
        super(props)
        this.state = {altura: null, peso: null, mensagem:null}

    }

    render(){
        
        return(
            <View style={estilos.container}>
                <Text style={estilos.cabecalho}>IMC</Text>
                <TextInput placeholder="Digite sua altura" style={estilos.campo} onChangeText={(valorDoCampo)=>this.setState({altura:valorDoCampo})}></TextInput>
                <TextInput placeholder="Digite seu peso" style={estilos.campo} onChangeText={(valorDoCampo)=>this.setState({peso:valorDoCampo})}></TextInput>
                <View style={estilos.botao}>
                    <Button title="CONFIRMAR" onPress={()=>this.props.navigation.navigate('Resultado', {altura:this.state.altura, peso:this.state.peso})}/>
                    
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
        botao:{
            width:'95%',
            margin:15,
        }
    }
)