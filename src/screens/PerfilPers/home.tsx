import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Avatar, Input, Button } from 'react-native-elements';
import { List } from 'react-native-paper';
import Classe from './components';

export interface PerfilPersScreenProps {
}

export function PerfilPersScreen (props: PerfilPersScreenProps) {

    const Icon = () => (
        <Avatar size={70} source={require('./../../../assets/imgs/avatar.jpg')} />
    );

    return (
      <View >
        <View style={styles.avatar}>
          <Avatar rounded size={70} source={require('./../../../assets/imgs/avatar.jpg')} containerStyle={{ backgroundColor: '#b30086', marginTop: 20}}/>
        </View>
        <View >
          <Input label="Nome" />
          <Classe/>
          <Input label="Antecedente" placeholder="exp: Nomade" />
          <Input label="Alinhamento" placeholder="exp: Neutro Bom" />
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
avatar: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
},
});