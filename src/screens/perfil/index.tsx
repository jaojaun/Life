import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import { Avatar, Input } from 'react-native-elements';
import { Button } from 'react-native-paper';
import  Icon  from './components';

export interface PerfilScreenProps {
}

export function PerfilScreen (props: PerfilScreenProps) {
  return (
    <View style={styles.backgorund }>
      <View style={styles.avatar}>
        <Icon/>
      </View>
      <View style={styles.dados}>
        <Input label="Nome" />
        <Input label="E-mail" />
        <Input label="Idade" placeholder="22" />
        <Input label="Peso" placeholder="Kg" />
        <Input label="Altura" placeholder="cm" />
        <Button onPress={() => console.log("Salvar!")}>
          Salvar
        </Button>
      </View>
      <View style={{ alignItems: 'center', marginTop: 100 }}>
        <Text>Aplicativo feito por João Neto!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgorund: {
      textAlign:'center',
      fontSize: 60,
      color: 'black',
      height: '100%',
  },
  avatar: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dados:{
    padding: 10,
    marginTop: 20,
    borderRadius: 30,
  },
})
