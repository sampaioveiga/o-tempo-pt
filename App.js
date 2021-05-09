import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';

import ForecastScreen from './src/screens/ForecastScreen/ForecastScreen';

export default function App() {
  const [ locations, setLocations ] = useState([
    1030300,
    1040200,
    1121400,
  ]);
  const [ activeLocation, setActiveLocation ] = useState(0);

  // ----------------------------------------------------------------- previous location handler
  const previousLocationHandler = () => {
    if ( activeLocation === 0 ) { return; }
    setActiveLocation(activeLocation - 1);
  };

  // ----------------------------------------------------------------- next location handler
  const nextLocationHandler = () => {
    if ( activeLocation === locations.length -1 ) { return; }
    setActiveLocation(activeLocation + 1);
  };

  // ----------------------------------------------------------------- main return
  return(
    <View style={styles.container}>
      <ForecastScreen
        locations={locations}
        activeLocation={activeLocation}
        previousLocation={previousLocationHandler}
        nextLocation={nextLocationHandler}
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