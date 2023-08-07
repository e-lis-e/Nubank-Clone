import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, UpperView, UserIconView, OptionsIcon, TextWelcome, TotalAccount, AccView, Subtitle, AccTotal, AccTotalNotVisible } from './Header.styles';
import {Ionicons} from '@expo/vector-icons';

export function Header() {
  const [account, setAccount] = useState(false);

  return (
    <>
    <Container>
      <UpperView>
        <UserIconView>
          <Ionicons name='person-outline' size={20} color='#fff'></Ionicons>

        </UserIconView>
        <OptionsIcon>
        <TouchableOpacity onPress={() => setAccount(!account)}>
        {account ?(
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
    <TotalAccount>
        <AccView>
          <Subtitle>
            Conta
          </Subtitle>
          <Ionicons name='chevron-forward-outline' size={20} color='#908d91'/>
        </AccView>

        {account ? (<AccTotal> R$1,02</AccTotal>) : (<AccTotalNotVisible/>)}
        
      </TotalAccount>
    </>
  );
}