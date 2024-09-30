import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { makeStyle } from './styles'; // Atualize o caminho conforme necessário

export function Footer() {
  const styles = makeStyle();

  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>
        Gostaria de apoiar o projeto?{' '}
      </Text>
      <TouchableOpacity onPress={() => { /* ação ao clicar */ }}>
        <Text style={styles.footerLink}>clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
}
