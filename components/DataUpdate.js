import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default function DataUpdate({ photographer, dataUpdate }) {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Pexels: {photographer}</Text>
      <Text style={styles.text}>Dados: IPMA</Text>
      <Text style={styles.text}>{dataUpdate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    fontSize: 11,
    textAlign: 'right',
  },
});