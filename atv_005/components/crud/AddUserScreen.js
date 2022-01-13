import React, {useState} from "react";
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from "react-native-web";

import firebase from "../../firebase/firebase_config";

const AddUserScreen = (props) => {

    const initialState = {nome:'', sobrenome:'', curso:'', ira:''}
    const [state, setState] = useState(initialState)

    /*const addNewUser = () => {
        console.log(state);
    }*/

    const addNewUser = async () => {
        try{
            await firebase.db.collection('users').add({
                nome: state.nome,
                sobrenome: state.sobrenome,
                curso: state.curso,
                ira: state.ira
            })
            //console.log('OK!');
            props.navigation.navigate('ListUserScreen')
        }catch(error){
            console.log(error);
        }
    }

    const handleChangeText = (value,nome)=>{
        /*if(nome==='nome') setState({'nome':value})
        else if(nome==='email') setState({'sobrenome':value})*/
        setState({...state, [nome]:value})
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.textInput}>
                <TextInput
                    placeholder='Nome'
                    value={state.nome}
                    onChangeText={(value) => handleChangeText(value,'nome')}
                />
            </View>
            <View style={styles.textInput}>
                <TextInput
                    placeholder='Sobrenome'
                    value={state.sobrenome}
                    onChangeText={(value) => handleChangeText(value,'sobrenome')}
                />
            </View>
            <View style={styles.textInput}>
                <TextInput
                    placeholder='Curso'
                    value={state.curso}
                    onChangeText={(value) => handleChangeText(value,'curso')}
                />
            </View>
            <View style={styles.textInput}>
                <TextInput
                    placeholder='IRA'
                    value={state.ira}
                    onChangeText={(value) => handleChangeText(value,'ira')}
                />
            </View>
            <View>
                <Button title='Add User' onPress={() => addNewUser()} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:35
    },
    textInput: {
        flex:1,
        padding:0,
        top:0,
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc'
    }
})

export default AddUserScreen