//Import
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Formatações
const Estilos = {
  estiloTexto: {
    fontSize: 30,
    backgroundColor: '#08509B',
    padding: 10,
    margin: 10
  }
};

//Criar o componente
const App = () => {
  return (
    <Text style={Estilos.estiloTexto}>Frases do dia</Text>
  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('frasesDoDia', () => App);