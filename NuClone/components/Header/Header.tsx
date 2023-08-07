import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, UpperView, UserIconView, OptionsIcon } from './Header.styles';
import {Ionicons} from '@expo/vector-icons';

export function Header() {
  return (
    <Container>
      <UpperView>
        <UserIconView>
          <Ionicons name='person-outline' size={20} color='#fff'></Ionicons>

        </UserIconView>
        <OptionsIcon>
        <TouchableOpacity>
        <Ionicons name='eye-outline' size={25} color='#fff'></Ionicons>
        </TouchableOpacity>
        <Ionicons name='help-circle-outline' size={25} color='#fff'></Ionicons>
        <Ionicons name='mail-outline' size={25} color='#fff'></Ionicons>
        </OptionsIcon>
      </UpperView>
    </Container>
  );
}