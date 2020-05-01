import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Navigator({}) {
  return(
    <View style={styles.container}>
      <View style={styles.indicator}></View>
      <View style={styles.indicator}></View>
      <View style={styles.indicator}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicator: {
    backgroundColor: 'white',
    marginBottom: 10,
    marginHorizontal: 3,
    width: 10,
    height: 10,
    borderRadius: 5,
  }
});