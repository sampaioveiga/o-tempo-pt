import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default function DataUpdate({dataUpdate,}) {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Fonta IPMA</Text>
      <Text style={styles.text}>Previsão atualizada a {dataUpdate}</Text>
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