import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Settings({closeSettingsHandler}) {
  return(
    <View>
      <Text onPress={closeSettingsHandler} style={{color: 'white', fontSize: 20, textAlign: 'right', }}>Close</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});