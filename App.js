import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Button, FlatList , Keyboard, Text} from 'react-native';
import InformacoesItem from './components/InformacoesItem';

export default function App() {
 
  const [cidade, setCidade] = useState('');
  const capturarCidade = (cidade) => {
    setCidade(cidade);
  }

  const [informacoes, setInformacoes] = useState('');

  const obtemInformacoes = () => {
    setInformacoes('');
    const target = endPoint + cidade + "&appid=" + apiKey;
    fetch(target)
    .then((dados) => {
      return dados.json()
      
    })
    .then((dados) =>{
      var lat = dados.city.coord.lat
      var lon = dados.city.coord.lon
      
      const target2 = endPoint1 + "lat=" + lat + "&lon=" + lon + "&exclude=hourly,daily&appid=" + apiKey;
      fetch(target2)
      .then((dados) => {
        return dados.json()
      })
      .then((dados) => {
        let current = dados.current
        console.log(current)
        setInformacoes(current)
      })
      Keyboard.dismiss()
    });
  }


  const endPoint = "https://api.openweathermap.org/data/2.5/forecast?lang=pt&units=metric&q=";
  const apiKey = "d83fe601f342c400527574c99427fef5";

  const endPoint1 = "https://api.openweathermap.org/data/2.5/onecall?";
 

  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <TextInput 
          style={styles.cidade} 
          placeholder="Digite o nome de uma cidade"
          value={cidade}
          onChangeText={capturarCidade}/>
        <Button 
          title="Procurar"
          onPress={obtemInformacoes}/>
      </View>
      <View>
        {
          <InformacoesItem informacao={informacoes}></InformacoesItem>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    flexDirection: 'column'
  },
  cidade : {
    padding: 10,
    borderBottomColor: '#BB96F3',
    borderBottomWidth: 2,
    textAlign: 'left',
    flexGrow: 0.9
  },
  entrada: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  }
});
