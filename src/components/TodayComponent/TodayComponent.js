import React from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles, { ThemeColors } from './styles';

import districts_islands from '../../utils/districts_islands.json';
import wind_speed from '../../utils/wind-speed-daily-classe.json';

export default function TodayComponent(props) {
  const {
    locationID,
    day,
    colorScheme,
  } = props;
  const window = useWindowDimensions();
  const location = districts_islands.data.filter(o => o.globalIdLocal === locationID);
  const wind = wind_speed.data.filter(o => o.classWindSpeed === day.classWindSpeed);

  return (
    <View style={[styles.todayContainer, ThemeColors.todayContainer[colorScheme]]}>
      <Text style={[ { fontSize: window.width*.2 }, ThemeColors.textColor[colorScheme]]}>{location[0]['local']}</Text>
      <View style={styles.rainContainer}>
        <MaterialCommunityIcons name="weather-rainy" size={window.width*.12} color={ThemeColors.rainIcon[colorScheme].color} >
          
        </MaterialCommunityIcons>
      </View>
      <Text style={[{ fontSize: window.width*.1 }, ThemeColors.textColor[colorScheme]]}>{day['tMin']}° · {day['tMax']}°</Text>
      <Text style={[{ fontSize: window.width*.1 }, ThemeColors.textColor[colorScheme]]}>Vento {wind[0]['descClassWindSpeedDailyPT']}</Text>
    </View>
  );
}