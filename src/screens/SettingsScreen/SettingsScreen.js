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

import districts_islands from '../../utils/districts_islands.json';

// ----------------------------------------------------------------- item component
const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.local}</Text>
  </TouchableOpacity>
);

// ----------------------------------------------------------------- main function
export default function SettingsScreen(props) {
  const {
    locations,
    closeSettings,
  } = props;
  const colorScheme = useColorScheme();
  const window = useWindowDimensions();
  const data = districts_islands.data;
  const [selectedId, setSelectedId] = useState(null);

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
  const renderItem = ({ item }) => {
    const backgroundColor = item.local === selectedId ? '#6e3b6e' : '#f9c2ff';

    return <Item item={item} onPress={() => setSelectedId(item.local)} style={{ backgroundColor }} />;
  };

  // ----------------------------------------------------------------- main function
  return (
    <SafeAreaView style={[styles.container, ThemeColors.container[colorScheme]]}>
      
      {header}
      
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.local}
        extraData={selectedId}
        />

    </SafeAreaView>
  );
}