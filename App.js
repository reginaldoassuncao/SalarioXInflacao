import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Salario from './componentes/Salario';
import Inflacao from './componentes/Inflacao';
import SalarioInflacao from './componentes/SalarioInflacao';

import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Abas = createBottomTabNavigator();

export default class App extends React.Component {
  render() {

    return (
      <NavigationContainer >
        <Abas.Navigator screenOptions={{
          tabBarActiveTintColor: '#2DA9E6',
        }}>
          <Abas.Screen name="Salário" component={Salario} options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="attach-money" size={24} color={color} />
            ),
          }} />
          <Abas.Screen name="Inflação" component={Inflacao} options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="trending-up" size={24} color={color} />
            ),
          }} />
          <Abas.Screen name="Salário x Inflação" component={SalarioInflacao} options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="compare-arrows" size={24} color={color} />
            ),
          }} />
        </Abas.Navigator>
      </NavigationContainer>
    );
  }
}