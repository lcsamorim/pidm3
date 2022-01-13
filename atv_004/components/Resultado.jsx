import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const Mensagem = (props) => {
    if(17 > props.IMC) return <Text style={{fontSize:25}}>Muito abaixo do peso</Text>
    if(17 <= props.IMC &&  props.IMC <= 18.49) return <Text style={{fontSize:25}}>Abaixo do peso</Text>
    if(18.5 <=  props.IMC &&  props.IMC <= 24.99) return <Text style={{fontSize:25}}>Peso normal</Text>
    if(25 <=  props.IMC &&  props.IMC <= 29.99) return <Text style={{fontSize:25}}>Acima do peso</Text>
    if(30 <=  props.IMC &&  props.IMC <= 34.99) return <Text style={{fontSize:25}}>Obesidade I)</Text>
    if(35 <=  props.IMC &&  props.IMC <= 39.99) return <Text style={{fontSize:25}}>Obesidade II (Severa)</Text>
    if(40 <  props.IMC) return <Text style={{fontSize:25}}>Obesidade III (Mórbida)</Text>
}

export default class Resultado extends Component {

    constructor(props) {
        super(props)
        this.state = { imc: (this.props.route.params.peso / (this.props.route.params.altura * this.props.route.params.altura))}

    }
    render() {
        
        return (
            <View style={estilos.container}>
                <Text style={estilos.cabecalho}>Resultado</Text>
                <Text style={estilos.cabecalho}>{this.state.imc}</Text>
                <Mensagem IMC={(this.props.route.params.peso / (this.props.route.params.altura * this.props.route.params.altura))}></Mensagem>
                <View style={estilos.botao}>
                    <Button title="HOME" onPress={() => this.props.navigation.navigate('Home', {})} />
                </View>

            </View>
        )
    }
}
const estilos = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e5e5e5'
        },
        cabecalho: {
            fontSize: 24,
            fontWeight: 'bold',
            margin: 10
        },
        textoCorpo: {
            fontSize: 18,
            fontWeight: 'bold'
        },
        botao: {
            width: '95%',
            margin: 15,
        }
    }
)