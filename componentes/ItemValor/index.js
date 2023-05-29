import React from 'react';
import { Text, View } from 'react-native';

import estiloGlobal from '../../assets/estilos/estilos';
import estiloValor from './estilos';

export default function ItemValor(props) {
    return (
        <View style={[estiloGlobal.container, props.estilo]}>
            <Text style={estiloValor.textoValores}>{props.ano}</Text>
            <Text style={estiloValor.textoValores}>{props.Salario}</Text>
            <Text style={estiloValor.textoValores}>{props.CrescSalarial}</Text>
            <Text style={estiloValor.textoValores}>{props.valor}</Text>  
            <Text style={estiloValor.textoValores}>{props.StatusSalario}</Text>            
        </View>
    );
}