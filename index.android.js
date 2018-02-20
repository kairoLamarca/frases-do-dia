//Import
import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity, Alert } from 'react-native';

//Formatações
const Estilos = {

  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {

  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);

  //frases
  var frases = Array();
  frases[0] = 'Que eu não perca o equilíbrio, mesmo sabendo que inúmeras forças querem que eu caia.';
  frases[1] = 'Em tempos de crise, sábios constroem pontes, enquanto tolos preferem barreiras.';
  frases[2] = 'Um brinde aos nossos defeitos. Porque com as nossas qualidades ninguém se importa mesmo.';
  frases[3] = 'Falta de coragem causa perda de momentos incríveis. Arrisque sempre!';
  frases[4] = 'Que sejamos capazes de enxergar algo de bom em cada momento ruim que nos acontecer.';

  var fraseEscolhida = frases[numeroAleatorio];

  Alert.alert('', fraseEscolhida);

}

//Criar o componente
const App = () => {

  const { principal, botao, textoBotao } = Estilos;

  return (
    <View style={principal}>
      <Image source={require('./imgs/logo.png')} />
      <TouchableOpacity
        onPress={gerarNovaFrase}
        style={botao}>
        <Text style={textoBotao}>Nova frase</Text>
      </TouchableOpacity>
    </View>
  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('frasesDoDia', () => App);