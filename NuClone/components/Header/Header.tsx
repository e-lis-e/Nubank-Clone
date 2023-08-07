import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Container, UpperView, UserIconView, OptionsIcon, TextWelcome, TotalAccount, AccView, Subtitle, AccTotal, AccTotalNotVisible, OptionView,OptionIcon, OptionText } from './Header.styles';
import {Ionicons} from '@expo/vector-icons';
import { ScrollView } from 'react-native';

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

      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{marginLeft: 24, paddingRight: 50}}>
          <OptionView>
            <OptionIcon>
            <Ionicons name='grid-outline' size={25} color='#000'/>
            </OptionIcon>
            <OptionText>
              Pix
            </OptionText>
          </OptionView>

          <OptionView>
            <OptionIcon>
            <Ionicons name='barcode-outline' size={25} color='#000'/>
            </OptionIcon>
            <OptionText>
              Pagar
            </OptionText>
          </OptionView>

          <OptionView>
            <OptionIcon>
            <Ionicons name='arrow-up-circle-outline' size={25} color='#000'/>
            </OptionIcon>
            <OptionText>
              Transferir
            </OptionText>
          </OptionView>

          <OptionView>
            <OptionIcon>
            <Ionicons name='arrow-down-circle-outline' size={25} color='#000'/>
            </OptionIcon>
            <OptionText>
              Depositar
            </OptionText>
          </OptionView>

          <OptionView>
            <OptionIcon>
            <Ionicons name='phone-portrait-outline' size={25} color='#000'/>
            </OptionIcon>
            <OptionText>
              Recarga
            </OptionText>
          </OptionView>

          <OptionView>
            <OptionIcon>
            <Ionicons name='heart-outline' size={25} color='#000'/>
            </OptionIcon>
            <OptionText>
              Doação
            </OptionText>
          </OptionView>

          <OptionView>
            <OptionIcon>
            <Ionicons name='cellular-outline' size={25} color='#000'/>
            </OptionIcon>
            <OptionText>
              Investir
            </OptionText>
          </OptionView>
        </ScrollView>
      </View>
    </>
  );
}