import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';

import {
  ForecastScreen,
  SettingsScreen,
} from './src/screens';

export default function App() {
  const [ settingsVisible, setSettingsVisible ] = useState(false);
  const [ locations, setLocations ] = useState([1010500]);
  const [ activeLocation, setActiveLocation ] = useState(0);

  // ----------------------------------------------------------------- save locations to store
  remember = async () => {
    if (locations.length == 0) return;
    try {
      await SecureStore.setItemAsync(
        'locations',
        JSON.stringify(locations)
      );
    } catch (e) {
      console.log(e);
    }
  };

  // ----------------------------------------------------------------- clear locations store
  clear = async () => {
    try {
      await SecureStore.deleteItemAsync('locations');
    } catch (e) {
      console.log(e);
    }
  };
  //clear();

  // ----------------------------------------------------------------- get locations from store
  read = async () => {
    try {
      const savedLocations = await SecureStore.getItemAsync('locations');
      if (savedLocations) {
        const myJSON = JSON.parse(savedLocations);
        setLocations(myJSON);
      }
    } catch (e) {
      console.log(e);
    }
  }

  // ----------------------------------------------------------------- get saved locations on startup, open settings if empty
  useEffect(() => {
    read();
    if (locations.length == 0) setSettingsVisible(true);
  }, []);
  
  // ----------------------------------------------------------------- previous location handler
  const previousLocationHandler = () => {
    if ( activeLocation === 0 ) { return; }
    setActiveLocation(activeLocation - 1);
  };

  // ----------------------------------------------------------------- next location handler
  const nextLocationHandler = () => {
    if ( activeLocation === locations.length - 1 ) { return; }
    setActiveLocation(activeLocation + 1);
  };

  // ----------------------------------------------------------------- open/close settings screen
  const toggleSettings = () => {
    if (settingsVisible) {
      remember();
      setActiveLocation(0);
    };
    settingsVisible ? setSettingsVisible(false) : setSettingsVisible(true);
  };

  // ----------------------------------------------------------------- add location from list
  const addLocationHandler = ( localId ) => {
    setLocations([...locations, localId]);
  };

  // ----------------------------------------------------------------- remove location from list
  const removeLocationHandler = ( localId ) => {
    if (locations.length > 1 ) {
      const newLocations = locations.filter(location => location != localId);
      setLocations(newLocations);
    }
  };

  // ----------------------------------------------------------------- main return
  return(
    <View style={styles.container}>
      {
        settingsVisible ?
          <SettingsScreen
            locations={locations}
            addItemToLocations={addLocationHandler}
            removeItemFromLocations={removeLocationHandler}
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