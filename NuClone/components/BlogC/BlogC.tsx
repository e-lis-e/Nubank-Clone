import React, { ReactNode } from 'react';

import {Linking} from 'react-native';

import { Container } from './BlogC.styles';

type Props = {
    Text: ReactNode
    link: string
}

export function BlogC({link, Text} : Props) {
  return (
   <Container onPress={() => Linking.openURL(link)}>
    {Text}
   </Container>
  );
}