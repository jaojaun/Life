import * as React from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens/home';
import LoginScreen from '../screens/login/index.funcao';
import { PerfilScreen } from '../screens/perfil';
import { PerfilPersScreen } from '../screens/PerfilPers/home';
import { MissaoScreen } from '../screens/missao/home';

const Stack = createStackNavigator();


export const MainNavigation = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
            <Stack.Screen name="login" component={ LoginScreen } options={{ headerShown:false }}/>
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="perfil" component={PerfilScreen}/>
            <Stack.Screen name="perso" component={PerfilPersScreen}/>
            <Stack.Screen name="missao" component={MissaoScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
)



