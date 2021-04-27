import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Navigator({items, activeItem}) {
  const item = [];
  for ( let i=0; i<items; i++ ) {
    if (i===activeItem) {
      item.push(<View key={i} style={[styles.indicator, styles.activeIndicator]}></View>);
    } else {
      item.push(<View key={i} style={styles.indicator}></View>);
    }
  };

  return(
    <View style={styles.container}>
      {item}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicator: {
    backgroundColor: 'grey',
    marginBottom: 10,
    marginHorizontal: 3,
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  activeIndicator: {
    backgroundColor: 'white',
  },
});