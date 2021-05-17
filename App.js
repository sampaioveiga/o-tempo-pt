import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';

import {
  ForecastScreen,
  SettingsScreen,
} from './src/screens';


export default function App() {
  const [ settingsVisible, setSettingsVisible ] = useState(false);
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

  const toggleSettings = () => {
    settingsVisible ? setSettingsVisible(false) : setSettingsVisible(true);
  };

  // ----------------------------------------------------------------- main return
  return(
    <View style={styles.container}>
      {
        settingsVisible ?
          <SettingsScreen
            locations={locations}
            closeSettings={toggleSettings}
          />
        :
          <ForecastScreen
            locations={locations}
            activeLocation={activeLocation}
            previousLocation={previousLocationHandler}
            nextLocation={nextLocationHandler}
            openSettings={toggleSettings}
          />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});