import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Corpo from './components/Corpo';
import Cabecalho from './components/Cabecalho';
import Disciplina from './components/Disciplina';

import imagem from "./imagem.png"


export default function App() {
  return (
    <View style={styles.container} >
      <Cabecalho nome="Mini Freddie Mercury Prateado" curso="Cover do Mini Freddie Mercury Prateado"/>
      <Corpo figura={imagem}/>
      <Disciplina disciplina="Como ficar tamanho mini"/>
      <Disciplina disciplina="Como se parecer com o freddie mercury"/>
      <Disciplina disciplina="Como ficar prateado"/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
