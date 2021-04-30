import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles, { ThemeColors } from './styles';

export default function WindIconComponent(props) {
  const {
    windSpeed,
    windDir,
    colorScheme,
    size,
  } = props;

  const noInfo = (
    <View style={styles.centeredView}>
      <MaterialCommunityIcons name="beaker-question" size={size} color={ThemeColors.icon[colorScheme].color} />
      <MaterialCommunityIcons name="beaker-question" size={size} color={ThemeColors.icon[colorScheme].color} />
    </View>
  );

  const weak = (
    <View style={styles.centeredView}>
      <MaterialCommunityIcons name="fan-minus" size={size} color={ThemeColors.icon[colorScheme].color} />
      <Text style={[ThemeColors.textColor[colorScheme], {fontSize: size*.5}]}>{windDir}</Text>
    </View>
  );

  const moderate = (
    <View style={styles.centeredView}>
      <MaterialCommunityIcons name="fan" size={size} color={ThemeColors.icon[colorScheme].color} />
      <MaterialCommunityIcons name="weather-windy" size={size} color={ThemeColors.icon[colorScheme].color} />
    </View>
  );

  const strong = (
    <View style={styles.centeredView}>
      <MaterialCommunityIcons name="fan-plus" size={size} color={ThemeColors.icon[colorScheme].color} />
      <MaterialCommunityIcons name="weather-windy" size={size} color={ThemeColors.icon[colorScheme].color} />
    </View>
  );

  const veryStrong = (
    <View style={styles.centeredView}>
      <MaterialCommunityIcons name="fan-alert" size={size} color={ThemeColors.icon[colorScheme].color} />
      <MaterialCommunityIcons name="weather-windy" size={size} color={ThemeColors.icon[colorScheme].color} />
    </View>
  );

  switch (windSpeed) {
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