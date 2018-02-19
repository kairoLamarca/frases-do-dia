//Import
import React from 'react';
//import { Text, AppRegistry, View, Button } from 'react-native';
import { Text, AppRegistry, View, TouchableOpacity } from 'react-native';

//Formatações
const Estilos = {
  // estiloTexto: {
  //   fontSize: 40,
  //   backgroundColor: '#08509B',
  //   //paddingTop: 15,
  //   //color: '#fff',
  //   //fontStyle: 'italic',
  //   //fontWeight: '100'//100 e 900
  //   //textAlign: 'center'
  //   //textDecorationLine: 'underline line-through'
  //   //shadowColor: '#000',
  //   //shadowOffset: { width: 0, height: 15 },
  //   //shadowOpacity: 1
  //   //shadowRadius: 2
  //   //elevation: 30
  //   height: 60,
  //   width: 60
  // },
  // estiloTexto2: {
  //   fontSize: 40,
  //   backgroundColor: '#2A48FA',
  //   height: 60,
  //   width: 60
  // },
  // estiloView: {
  //   backgroundColor: 'skyblue',
  //   height: 300,
  //   justifyContent: 'space-around',//alinhar verticalmente -- center, flex-start, flex-end, space-around, space-between
  //   alignItems: 'center',//alinhar horizontalmente
  //   flexDirection: 'column'//orientação em colunas ou linhas
  // }

  // principal: {
  //   flex: 1, //1:1 ocupa todo o espaço
  //   backgroundColor: 'cornflowerblue'
  // },
  // topo: {
  //   flex: 2,//2:11
  //   backgroundColor: 'brown'
  // },
  // conteudo: {
  //   flex: 8,//8:11
  //   backgroundColor: 'yellowgreen'
  // },
  // rodape: {
  //   flex: 1,//1:11
  //   backgroundColor: 'orangered'
  // }

  principal: {
    paddingTop: 40
  },
  botao: {
    backgroundColor: '#48BBEC',
    padding: 10,
    borderColor: '#1D8EB8',
    borderWidth: 1,
    borderRadius: 8,
    elevation: 8
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
};

const botaoPressionado = () => {
  alert('Botão pressionado');
}

//Criar o componente
const App = () => {

  //const { estiloTexto, estiloTexto2, estiloView } = Estilos;
  //const { principal, topo, conteudo, rodape } = Estilos;
  const { principal, botao, textoBotao } = Estilos;

  return (
    // <View style={principal}>
    //   <Text style={topo}>Topo</Text>
    //   <Text style={conteudo}>Conteudo</Text>
    //   <Text style={rodape}>Rodapé</Text>
    // </View>

    <View style={principal}>
      {/* <Button
        onPress={botaoPressionado}
        title="Clique aqui"
        color="#841584"
        accessibilityLabel="Clique para abrir as notícias!"
      /> */}

      <TouchableOpacity style={botao}>
        <Text style={textoBotao}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('frasesDoDia', () => App);