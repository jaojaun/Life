import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableNativeFeedbackBase, ToastAndroid } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Input, Button } from 'react-native-elements';
import { InputRound } from './components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation, useRoute } from '@react-navigation/core';
import Cadastro from './components';
import { AdMobBanner,AdMobInterstitial,AdMobRewarded } from 'expo-ads-admob';

export interface LoginScreenProps {}

export default function LoginScreen (props: LoginScreenProps) {

    const nav = useNavigation()
    const [ erro, setErro ] = React.useState('')
    //const ( invisivel, setInvisivel) = React.useState(true);
    //Para visualização da senha! /\

    //Função de logar
    const logar = async ({email, senha}:any) => {
        setErro('')
        await new Promise((resolve) => setTimeout(() => resolve(' '), 1000))

        console.log('email', email);
        console.log('senha', senha);
        if (email.trim() == 'teste@teste.com' && senha == '123456')
            nav.navigate('home', {screen: 'listar'})
        else    
            setErro('Email ou senha incorreta')
    }



    return (
        <ImageBackground source={require('./../../../assets/imgs/background.png')}
        style={styles.background}>

            <Formik 
                initialValues={{ email:'' , senha: '' }}
                validationSchema = {Yup.object().shape({
                    email: Yup.string().required('O campo email é obrigatório')
                        .email('O campo precisa ser um email válido'),
                    senha: Yup.string().required('O campo senha é obrigatório')
                        .min(6, 'A senha precisa ter no minimo 6 caracteres')
                })}
                onSubmit={logar}
            >
                {({handleChange, handleSubmit, errors, isSubmitting, touched, handleBlur}) => (
                    <View style={styles.container}>
                        <Text style={styles.logo }>RPGLife</Text>
                        
                        <InputRound 
                            icone="person" 
                            placeholder="Digite Seu E-mail!"
                            onBlur={() => {
                                handleBlur('email')
                                if (errors.email) {
                                    ToastAndroid.show(errors.email, 2000)
                                }
                            }}
                            onChangeText={handleChange('email')}
                        />
                        {touched.email && <Text style={styles.erro}>{errors.email}</Text>}
                        <InputRound 
                            icone="lock" 
                            placeholder="Digite sua Senha!" 
                            senha={true}
                            onBlur={() => {
                                handleBlur('senha')
                                if (errors.senha) {
                                    ToastAndroid.show(errors.senha, 2000)
                                }
                            }}
                            onChangeText={handleChange('senha')}
                            
                        />
                        {touched.senha && <Text style={styles.erro}>{errors.senha}</Text>}
                        
                        <Text style={styles.erroLogin}>{erro}</Text>
                        <Button title="Logar" loading={isSubmitting} disabled={isSubmitting} onPress={() => handleSubmit()}
                            buttonStyle={{borderRadius: 25}} raised={false}/>
                        <Cadastro/>
                        <AdMobBanner
                            adUnitID="ca-app-pub-3940256099942544/6300978111"
                            bannerSize="leaderboard"
                        />
                    </View>
                )}
            </Formik>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    erroLogin: {
        textAlign:'center',
        fontSize: 20,
        color: 'red',
        marginTop: -30
    },
    background: {
        width: '100%',
        height: '100%'
    },
    erro: {
        color: 'black',
        marginTop: 10,
        textAlign: 'right',
        marginRight: 30,
        marginBottom: 10,
        fontSize: 15
    },
    container: {
        flex:1,
        padding: 10,
        marginTop: 160,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    logo: { 
        color: 'black', 
        fontSize: 50,
        textAlign:'center'
    },
    cadastreSe: {
        color: 'white',
        fontSize: 20,
        textDecorationLine: 'underline',
        margin: 30,
        textAlign: 'center'
    }
});

