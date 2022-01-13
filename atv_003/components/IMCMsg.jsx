import React from "react";
import { Text } from "react-native";

const Mensagem = (props) => {
    if(17 > props.IMC) return <Text style={{fontSize:25}}>Muito abaixo do peso</Text>
    if(17 <= props.IMC &&  props.IMC <= 18.49) return <Text style={{fontSize:25}}>Abaixo do peso</Text>
    if(18.5 <=  props.IMC &&  props.IMC <= 24.99) return <Text style={{fontSize:25}}>Peso normal</Text>
    if(25 <=  props.IMC &&  props.IMC <= 29.99) return <Text style={{fontSize:25}}>Acima do peso</Text>
    if(30 <=  props.IMC &&  props.IMC <= 34.99) return <Text style={{fontSize:25}}>Obesidade I)</Text>
    if(35 <=  props.IMC &&  props.IMC <= 39.99) return <Text style={{fontSize:25}}>Obesidade II (Severa)</Text>
    if(40 <  props.IMC) return <Text style={{fontSize:25}}>Obesidade III (Mórbida)</Text>
}
export default Mensagem