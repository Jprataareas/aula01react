import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Criando um objeto com propriedades
const pessoa ={ nome: 'Juliana Prata', idade:38, cidade:'Rio de Janeiro'};

// Componente funcional personalizado

function SaudacaoPersonalizada ({saudacao= "Olá", nome ="Usuário", style})
 {
  return(
  <View style= {[styles.saudacaoContainer, style]}> 
  <Text> {saudacao}, {nome}!</Text>
  </View>
);
}
const Saudacao = ({nome}) => {
  return (
    <View style= {styles.container}>
      <Text> Olá, {nome}!</Text>
      </View>
  );
};

const ExibirPessoa = ({nome, idade, cidade})=> {
  return (
    <View style= {styles.container}>
      <Text>Nome:{nome}</Text>
      <Text>Idade:{idade}</Text>
       <Text>Cidade:{cidade}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.appContainer}>
      {/* Use o componente funcional personalizado com estilos personalizados */}
      <SaudacaoPersonalizada saudacao= "Bom dia" nome= {pessoa.nome}
      style={ styles.saudacaoPersonalizada}/>
        <Saudacao nome={pessoa.nome}/>
        <ExibirPessoa {...pessoa}/>
         </View>
      );
};

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    backgroundColor:'#ffff',
    alignItems: 'center',
  },
  saudacaoContainer: {
    alignItems: 'center',
    marginBottom:10,
    padding:10,
  },
  
  saudacaoPersonalizada:{
    backgroundColor: 'lightblue',
    padding:10,
  },

  container:{
    alignItems: 'center',
    justifyContent: 'center',

  },
});
