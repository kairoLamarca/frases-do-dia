//Import
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';

//Formatações
const Estilos = {
  estiloTexto: {
    fontSize: 40,
    backgroundColor: '#08509B',
    //paddingTop: 15,
    //color: '#fff',
    //fontStyle: 'italic',
    //fontWeight: '100'//100 e 900
    //textAlign: 'center'
    //textDecorationLine: 'underline line-through'
    //shadowColor: '#000',
    //shadowOffset: { width: 0, height: 15 },
    //shadowOpacity: 1
    //shadowRadius: 2
    //elevation: 30
    height: 60,
    width: 60
  },
  estiloView: {
    backgroundColor: 'skyblue',
    height: 300,
    justifyContent: 'center',//alinhar verticalmente
    alignItems: 'flex-end'//alinhar horizontalmente
  }
};

//Criar o componente
const App = () => {
  const { estiloTexto, estiloView } = Estilos;
  return (
    <View style={estiloView}>
      <Text style={estiloTexto}></Text>
    </View>
  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('frasesDoDia', () => App);