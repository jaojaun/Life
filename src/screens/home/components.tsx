import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

const Missao = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, flex: 1, borderRadius: 30};

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Descrição da Missão</Text>
        </Modal>
      </Portal>

      <Button style={{marginTop: 30}} onPress={showModal}>
        Descrição
      </Button>
    </Provider>
  );
};

export default Missao;