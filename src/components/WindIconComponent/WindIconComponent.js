import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles, { ThemeColors } from './styles';

export default function WindIconComponent(props) {
  const {
    forecast,
    colorScheme,
    size,
  } = props;

  const noInfo = (
    <View>
      <MaterialCommunityIcons name="beaker-question" size={size} color={ThemeColors.icon[colorScheme].color} />
    </View>
  );

  const weak = (
    <View>
      <MaterialCommunityIcons name="weather-windy" size={size} color={ThemeColors.icon[colorScheme].color} />
      <MaterialCommunityIcons name="gauge-empty" size={size} color={ThemeColors.icon[colorScheme].color} />
    </View>
  );

  const moderate = (
    <View>
      <MaterialCommunityIcons name="weather-windy-variant" size={size} color={ThemeColors.icon[colorScheme].color} />
      <MaterialCommunityIcons name="gauge-low" size={size} color={ThemeColors.icon[colorScheme].color} />
    </View>
  );

  const strong = (
    <View>
      <MaterialCommunityIcons name="weather-windy-variant" size={size} color={ThemeColors.icon[colorScheme].color} />
      <MaterialCommunityIcons name="gauge" size={size} color={ThemeColors.icon[colorScheme].color} />
    </View>
  );

  const veryStrong = (
    <View>
      <MaterialCommunityIcons name="weather-windy-variant" size={size} color={ThemeColors.icon[colorScheme].color}/>
      <MaterialCommunityIcons name="gauge-full" size={size} color={ThemeColors.icon[colorScheme].color} />
    </View>
  );

  switch (forecast) {
    case 1:
      return(weak);
      break;
    case 2: 
      return(moderate);
      break;
    case 3: 
      return(strong);
      break;
    case 4: 
      return(veryStrong);
      break;
    default:
      return(noInfo);
  }

  
}