
import React from 'react';
import { Container, CardText } from './CFC.styles';

import {Ionicons} from '@expo/vector-icons';


export function CFC() {
  return (
    <Container>
      <Ionicons name='card-outline' size={20} color= '#000' />
      <CardText>Meus Cartões</CardText>

    </Container>
  );
}
