
import React from 'react';
import { Text, StyleSheet } from 'react-native'
import { BlogCView, CFCView, Container, BlogCItem } from './App.styles';
import { Header } from './components/Header/Header';
import { CFC } from './components/CFC/CFC';
import { BlogC } from './components/BlogC/BlogC';
import { ScrollView } from 'react-native';



export default function App() {
  return (
    <Container>
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

    </Container>
  );
}

const styles = StyleSheet.create({
  textBlack: {
    color: '#000'
  },
  textPurple: {
    color: '#820ad1'
  }
})