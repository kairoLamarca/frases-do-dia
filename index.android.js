//Import
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Formatações
const Estilos = {
  estiloTexto: {
    fontSize: 20,
    backgroundColor: '#08509B',
    paddingTop: 15,
    //shadowColor: '#000',
    //shadowOffset: { width: 0, height: 15 },
    //shadowOpacity: 1
    //shadowRadius: 2
    elevation: 30
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