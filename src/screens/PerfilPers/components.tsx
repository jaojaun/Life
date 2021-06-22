import * as React from 'react';
import { View, Text} from 'react-native';
import { List, Button, Avatar } from 'react-native-paper';

const classe = () => (
  <List.AccordionGroup>
    <List.Accordion title="Classe" id="1">
      <List.Item title="Guerreiro" />
      <List.Item title="Mago" />
      <List.Item title="Lutador" />
      <List.Item title="Arqueiro" />
      <List.Item title="Assasino" />
    </List.Accordion>
  </List.AccordionGroup>
);

export default classe;