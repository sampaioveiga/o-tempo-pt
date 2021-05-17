import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
  View
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles, { ThemeColors } from './styles';

import district_Islands from '../../utils/districts_islands.json';


// ----------------------------------------------------------------- main function
export default function SettingsScreen(props) {
  const {
    locations,
    closeSettings,
  } = props;
  const colorScheme = useColorScheme();
  const window = useWindowDimensions();


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

  // ----------------------------------------------------------------- item component
  const Item = ({ title }) => (
    <View>
      <Text>{title}</Text>
    </View>
  );

  // ----------------------------------------------------------------- flatlist item component
  const renderItem = ({ item }) => <Item title={item} />;

  // ----------------------------------------------------------------- main function
  return (
    <SafeAreaView style={[styles.container, ThemeColors.container[colorScheme]]}>
      {header}
      
      <FlatList
        data={locations}
        renderItem={renderItem}
        keyExtractor={item => item}
        />

    </SafeAreaView>
  );
}