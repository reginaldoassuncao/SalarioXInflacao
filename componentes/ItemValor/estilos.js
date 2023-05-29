import React from 'react';
import { Text, View } from 'react-native';

import estiloGlobal from '../../assets/estilos/estilos';

export default function ItemValor(props) {
    return (
        <View style={[estiloGlobal.container, props.estilo]}>
            <Text style={[estiloGlobal.texto]}>{props.ano}</Text>
            <Text>{props.valor}</Text>
        </View>
    );
}
