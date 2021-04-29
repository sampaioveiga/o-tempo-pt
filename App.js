import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';

import ForecastScreen from './src/screens/ForecastScreen/ForecastScreen';

export default function App() {
  const [ locations, setLocations ] = useState([
    1040200,
  ]);

  return(
    <View style={styles.container}>
      <ForecastScreen
        locations={locations}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});