import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Cartao from './Cartao';

const InformacoesItem = (props) => {
    return(
        <Cartao estilos={estilos.cartao}>
            <View style={estilos.tela}>
            <Image style={estilos.imagem}
                            source={{ uri: "https://openweathermap.org/img/wn/02n.png"}}/> 
                <View>
                    <View  style={estilos.primeiraLinha}>
                        <Text style={estilos.valor}>Feels Like: {props.informacao.feels_like+ "\u00B0"}</Text>
                        
                    </View>
                    <View  style={estilos.segundaLinha}>
                        <Text style={estilos.valor}>Sunrise: {new Date(props.informacao.sunrise*1000).toLocaleTimeString()}</Text>
                        <Text style={estilos.valor}>Sunset: {new Date(props.informacao.sunset*1000).toLocaleTimeString()}</Text>
                    </View>
                </View>
            </View>
        </Cartao>
    );
}

const estilos = StyleSheet.create({
    cartao:{
        marginBottom: 5
    },
    tela: {
        flexDirection: 'row'
    },
    imagem: {
        width: 50,
        height: 50
    },
    primeiraLinha: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    segundaLinha: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#DDD'
        },
        valor: {
            marginHorizontal: 2,
    }
}

);

export default InformacoesItem;