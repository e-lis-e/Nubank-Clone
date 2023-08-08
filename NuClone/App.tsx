
import React from 'react';
import { Text, StyleSheet } from 'react-native'
import { BlogCView, CFCView, Container, BlogCItem, CFunction, CFunctionRow, Touchable } from './App.styles';
import { Header } from './components/Header/Header';
import { CFC } from './components/CFC/CFC';
import { BlogC } from './components/BlogC/BlogC';
import { ScrollView } from 'react-native';
import {Ionicons} from '@expo/vector-icons';



export default function App() {
  return (
    <Container>
      <ScrollView contentContainerStyle={{paddingBottom: 50}}>
      <Header />
      <CFCView>
        <CFC />
      </CFCView>
      <BlogCView>
        <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 24 }} showsHorizontalScrollIndicator={false}>
          <BlogCItem>

            <BlogC link='https://www.google.com'
              Text={
                <Text style={styles.textBlack}>Pague
                  <Text style={styles.textPurple}> boletos no crédito </Text>
                  em até 12x, direto pelo app.</Text>} />

          </BlogCItem>
          <BlogCItem>

            <BlogC link='https://www.google.com'
              Text={
                <Text style={styles.textBlack}>
                  <Text style={styles.textPurple}> Aumente seu limite do cartão </Text>
                  hoje com o Nu Limite Garantido</Text>} />
          </BlogCItem>

          <BlogCItem>
            <BlogC link='https://www.google.com'
              Text={
                <Text style={styles.textBlack}>
                  <Text style={styles.textPurple}> Convide amigos para o Nubank </Text>
                  e desbloqueie brasões incríveis.</Text>} />
          </BlogCItem>

        </ScrollView>
      </BlogCView>
      <CFunction>
        <CFunctionRow>
          <Text style={styles.writingTitle}>Cartão de Crédito</Text>
          <Ionicons name='chevron-forward' size={15} color={"#c2bebe"}/>
        </CFunctionRow>
        <Text style={styles.textGray}>Fatura atual</Text>
        <Text style={styles.title}>R$ 196,68</Text>
        <Text style={styles.textGray}>Limite disponível de R$ 5.000,00</Text>
        <Text style={styles.textGray}>Limite adicional para Pix e boletos: <Text style={styles.textPurple}> R$500,00</Text></Text>

        <Touchable>
          <Text style={styles.textButton}>Parcelar compras</Text>
        </Touchable>
      </CFunction>
      <CFunction>
      <CFunctionRow>
          <Text style={styles.writingTitle}>Empréstimo</Text>
          <Ionicons name='chevron-forward' size={15} color={"#c2bebe"}/>
        </CFunctionRow>
        <Text style={styles.textGray}>Valor disponível de até</Text>
        <Text style={styles.title}>R$ 10.000,00</Text>
      </CFunction>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  textBlack: {
    color: '#000'
  },
  textPurple: {
    color: '#820ad1'
  },
  title:{
    fontSize: 20,
    fontWeight:'bold',
    marginTop: 6

  },
  writingTitle:{
    fontSize: 20,
    fontWeight:'bold',

  },
  subtitle:{
    fontSize: 16,
    fontWeight: 'bold'
  },
  textGray: {
    color: '#c2bebe',
    fontWeight: 'bold',
    marginTop: 8

  },
  textButton: {
    fontSize: 14,
    fontWeight: 'bold'

  }
})