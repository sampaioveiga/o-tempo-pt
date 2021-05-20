import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  Switch,
  Text,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
  View
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles, { ThemeColors } from './styles';

import districts_islands from '../../utils/districts_islands.json';

// ----------------------------------------------------------------- item component
const ItemRenderer = ({ index, label, selected, onUpdateValue, localId }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{label}</Text>
    <Switch value={selected} onValueChange={(value) => onUpdateValue(index, value, localId)} />
  </View>
);

// ----------------------------------------------------------------- main function
export default function SettingsScreen(props) {
  const {
    locations,
    addItemToLocations,
    removeItemFromLocations,
    closeSettings,
  } = props;
  const [ allData, setAllData ] = useState(districts_islands.data);
  const colorScheme = useColorScheme();
  const window = useWindowDimensions();

  // ----------------------------------------------------------------- activate switch on selected locations
  useEffect(() => {
    if (locations.length === 0) return;
    locations.forEach(local => {
      const index = allData.findIndex(item => item.globalIdLocal === local);
      allData[index].selected = true;
    });
  }, [locations]);

  // ----------------------------------------------------------------- update switch
  onUpdateValue = (index, value, localId) => {
    if (locations.length <= 1 && !value) return;
    allData[index].selected = value;
    value ? addItemToLocations(localId) : removeItemFromLocations(localId);
  }

  // ----------------------------------------------------------------- header component
  const header = (
    <View style={[styles.header, ThemeColors.header[colorScheme]]}>
      <View>
        <Text style={ThemeColors.headerText[colorScheme]}>Meteo</Text>
      </View>
      <TouchableOpacity
        onPress={closeSettings}
        style={[styles.headerButton, ThemeColors.headerButton[colorScheme]]}
        >
        <MaterialCommunityIcons name="home" size={window.width*.1} color={ThemeColors.headerButton[colorScheme].color} />
      </TouchableOpacity>
    </View>
  );

  // ----------------------------------------------------------------- flatlist item component
  renderItem = ({ item, index }) => (
    <ItemRenderer key={index} index={index} selected={item.selected} label={item.local} onUpdateValue={onUpdateValue} localId={item.globalIdLocal} />
  )

  // ----------------------------------------------------------------- main function
  return (
    <SafeAreaView style={[styles.container,]}>

      {header}
      
      <FlatList
        data={allData}
        renderItem={renderItem}
        keyExtractor={item => item.local}
        />

    </SafeAreaView>
  );
}