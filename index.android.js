//Import
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Criar o componente
const App = () => {
  return (
    <Text>Frases do dia</Text>
  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('frasesDoDia', () => App);