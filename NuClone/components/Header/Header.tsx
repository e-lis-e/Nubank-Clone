import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, UpperView, UserIconView, OptionsIcon, TextWelcome } from './Header.styles';
import {Ionicons} from '@expo/vector-icons';

export function Header() {
  const [balance, setBalance] = useState(false);

  return (
    <Container>
      <UpperView>
        <UserIconView>
          <Ionicons name='person-outline' size={20} color='#fff'></Ionicons>

        </UserIconView>
        <OptionsIcon>
        <TouchableOpacity onPress={() => setBalance(!balance)}>
        {balance ?(
          <Ionicons name='eye-outline' size={25} color='#fff' style={{marginRight: 16}}></Ionicons>
        ) : (
          <Ionicons name='eye-off-outline' size={25} color='#fff' style={{marginRight: 16}}></Ionicons>
        )}
        </TouchableOpacity>
        <Ionicons name='help-circle-outline' size={25} color='#fff'style={{marginRight: 16}}></Ionicons>
        <Ionicons name='mail-outline' size={25} color='#fff'></Ionicons>
        </OptionsIcon>
      </UpperView>
      <TextWelcome>
        Olá, Elise
      </TextWelcome>
    </Container>
  );
}