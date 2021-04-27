import React from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles, { ThemeColors } from './styles';
import moment from 'moment/min/moment-with-locales';

export default function NextDayComponent(props) {
  const {
    day,
    colorScheme,
  } = props;
  const window = useWindowDimensions();
  moment.locale('pt');

  return(
    <View>
      <Text>{moment(day.forecastDate).format('dddd')}</Text>
      <Text>{day.tMin}° · {day.tMax}°</Text>
    </View>
  );
}