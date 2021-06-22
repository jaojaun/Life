import * as React from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { PerfilScreen } from '../perfil';
import { Modal, Portal, Provider } from 'react-native-paper';
import Missao from './components';
import { AdMobBanner, AdMobInterstitial, AdMobRewarded } from 'expo-ads-admob';

export interface HomeScreenProps {
}

export function HomeScreen (props: HomeScreenProps) {

    const nav = useNavigation()
    const route = useRoute()
 
    return (
      <View style={styles.full}>

        <View style={styles.info}>
          <Text style={styles.home}>Bem-vindo Aventureiro!</Text>
          <Text style={styles.exp}>Você ganhou  hoje 17 XP </Text>
        </View>

        <View style={{justifyContent: 'center', flexDirection:'row'}}>
          <Icon raised
            iconStyle={styles.icons}
            name= 'user'
            type= 'font-awesome'
            color= '#f50'
            onPress={() => nav.navigate('perfil')} 
          />
          <Icon 
            iconStyle={styles.icons}
            raised
            name= 'address-book'
            type= 'font-awesome'
            color= '#f50'
            onPress={() => nav.navigate('perso')} 
          />
          <Icon 
            iconStyle={styles.icons}
            raised
            name= 'shield'
            type= 'font-awesome'
            color= '#f50'
            onPress={() => nav.navigate('missao')} 
          />
        </View>
        <View style={styles.taskBlock}>
          <Missao/>
          <View >
            <AdMobBanner style={styles.ad}
              adUnitID="ca-app-pub-3940256099942544/6300978111"
              bannerSize="leaderboard"
            />
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  icons: {
    fontSize: 40,
  },
  full: {
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: 'white',
  },
  info: {
    height: '40%' ,
    backgroundColor: '#59db73',
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    borderRadius: 40,
  },
  taskBlock: {
    height: '50%' ,
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    borderRadius: 30,
  },
  home: {
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
  },
  nav: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
  },
  task: {
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
  },
  exp: {
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    marginTop: 190 ,
  },
  ad:{
    backgroundColor: 'black',
    marginBottom: 10
  }
})
