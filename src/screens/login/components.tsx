import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import { Modal, Portal, Button, Provider } from 'react-native-paper';

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

const Cadastro = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, flex: 0.5, borderRadius: 30};

  return (
    <Provider>
      <Portal>
        {visible && <Modal visible={visible} contentContainerStyle={containerStyle}>
          <View>
            <Input label="Nome"/>
            <Input label="E-mail"/>
            <Input label="Senha"/>
            <Button style={{marginTop: 10}} onPress={() => console.log("Cadastrar!")}>
              Cadastrar
            </Button>
            <Button style={{marginTop: -10}} onPress={hideModal}>
              Fechar
            </Button>
          </View>
        </Modal>}
      </Portal>

      <Button style={{marginTop: 30}} onPress={showModal}>
        Entre para o nosso mundo!
      </Button>
    </Provider>
  );
};

export default Cadastro;
