import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import { Avatar } from 'react-native-paper';

export interface InputRoundProps {
  texto?: string;
  senha?: boolean;
  icone: string;
  placeholder: string;
  onBlur?(): void;
  onChangeText(texto: string): void;
}

export function InputRound (props: InputRoundProps) {
    return (
      <View>
        <Text style={styles.text}>{props.texto}</Text>
        <Input 
          onBlur={props.onBlur}
          placeholder={props.placeholder} 
          leftIcon={{name:props.icone, color:'black'}}
          inputContainerStyle={styles.containerInput}
          inputStyle={{color:'black'}} 
          secureTextEntry={props.senha}
          onChangeText={(texto) => props.onChangeText(texto)}
        />
      </View>
    );
}
  //<Input 
  //  placeholder="Digite Sua Senha!" 
  //  leftIcon={{name:'lock', color:'white'}}
  //  placeholderTextColor="black"
  //  inputContainerStyle={styles.containerInput}
  //  inputStyle={{color:'black'}}
  //  rightIcon={{name:'visibility', color:'white'}}
  //  secureTextEntry={true}
  ///>
const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 20
  },
  containerInput: {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      padding: 5,
      borderRadius: 30,
      marginBottom: 5,
  }

});
const Icon = () => (
    <Avatar.Image size={70} source={require('./../../../assets/imgs/avatar.jpg')} />
  );

export default Icon
