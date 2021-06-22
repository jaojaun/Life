import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Status from './components';
import SubStatus from './components';

export interface MissaoScreenProps {
}

export function MissaoScreen (props: MissaoScreenProps) {
    return (
      <View style={styles.Status}>
        <Text>Força</Text>
        <Status/>
        <Text>Destreza</Text>
        <Status/>
        <Text>Constituição</Text>
        <Status/>
        <Text>Inteligencia</Text>
        <Status/>
        <Text>Sabedoria</Text>
        <Status/>
        <Text>Carisma</Text>
        <Status/>
        <Text>SubStatus</Text>
        <Text>Acrobacia</Text>
        <SubStatus/>
        <Text>Atletismo</Text>
        <SubStatus/>
        <Text>Musica</Text>
        <SubStatus/>
        <Text>Intuição</Text>
        <SubStatus/>
        <Text>Natureza</Text>
        <SubStatus/>
        <Text>Medicina</Text>
        <SubStatus/>
      </View>
    );
}

const styles = StyleSheet.create({
    Status: {
        marginTop: 20,
        marginHorizontal: 10,
        flexDirection: 'column',
    },
});


