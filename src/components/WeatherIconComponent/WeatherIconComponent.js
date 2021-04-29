import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles, { ThemeColors } from './styles';

export default function WeatherIconComponent(props) {
  const {
    forecast,
    rainChance,
    colorScheme,
    size,
  } = props;

  const noInfo = (
    <View>
      <MaterialCommunityIcons name="beaker-question" size={size} color={ThemeColors.icon[colorScheme].color} />
      <Text style={[ThemeColors.textColor[colorScheme], {fontSize: size*.5}]} >{rainChance}%</Text>
    </View>
  );

  const clearSky = (
    <View>
      <MaterialCommunityIcons name="weather-sunny" size={size} color={ThemeColors.icon[colorScheme].color} />
      <Text style={[ThemeColors.textColor[colorScheme], {fontSize: size*.5}]} >{rainChance}%</Text>
    </View>
  );

  const partlyCloudy = (
    <View>
      <MaterialCommunityIcons name="weather-partly-cloudy" size={size} color={ThemeColors.icon[colorScheme].color} />
      <Text style={[ThemeColors.textColor[colorScheme], {fontSize: size*.5}]} >{rainChance}%</Text>
    </View>
  );

  const cloudy = (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <MaterialCommunityIcons name="weather-cloudy" size={size} color={ThemeColors.icon[colorScheme].color} />
      <Text style={[ThemeColors.textColor[colorScheme], {fontSize: size*.5}]} >{rainChance}%</Text>
    </View>
  );

  const partlyRainy = (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <MaterialCommunityIcons name="weather-partly-rainy" size={size} color={ThemeColors.icon[colorScheme].color} />
      <Text style={[ThemeColors.textColor[colorScheme], {fontSize: size*.5}]} >{rainChance}%</Text>
    </View>
  );

  const rainy = (
    <View>
      <MaterialCommunityIcons name="weather-rainy" size={size} color={ThemeColors.icon[colorScheme].color} />
      <Text style={[ThemeColors.textColor[colorScheme], {fontSize: size*.5}]} >{rainChance}%</Text>
    </View>
  );

  const pouring = (
    <View>
      <MaterialCommunityIcons name="weather-pouring" size={size} color={ThemeColors.icon[colorScheme].color} />
      <Text style={[ThemeColors.textColor[colorScheme], {fontSize: size*.5}]} >{rainChance}%</Text>
    </View>
  );

  const hazy = (
    <View>
      <MaterialCommunityIcons name="weather-hazy" size={size} color={ThemeColors.icon[colorScheme].color} />
      <Text style={[ThemeColors.textColor[colorScheme], {fontSize: size*.5}]} >{rainChance}%</Text>
    </View>
  );

  const fog = (
    <View>
      <MaterialCommunityIcons name="weather-fog" size={size} color={ThemeColors.icon[colorScheme].color} />
      <Text style={[ThemeColors.textColor[colorScheme], {fontSize: size*.5}]} >{rainChance}%</Text>
    </View>
  );

  const snow = (
    <View>
      <MaterialCommunityIcons name="weather-snowy" size={size} color={ThemeColors.icon[colorScheme].color} />
      <Text style={[ThemeColors.textColor[colorScheme], {fontSize: size*.5}]} >{rainChance}%</Text>
    </View>
  );

  const lightning = (
    <View>
      <MaterialCommunityIcons name="weather-lightning" size={size} color={ThemeColors.icon[colorScheme].color} />
      <Text style={[ThemeColors.textColor[colorScheme], {fontSize: size*.5}]} >{rainChance}%</Text>
    </View>
  );

  const lightningRainy = (
    <View>
      <MaterialCommunityIcons name="weather-lightning-rainy" size={size} color={ThemeColors.icon[colorScheme].color} />
      <Text style={[ThemeColors.textColor[colorScheme], {fontSize: size*.5}]} >{rainChance}%</Text>
    </View>
  );

  const hail = (
    <View>
      <MaterialCommunityIcons name="weather-hail" size={size} color={ThemeColors.icon[colorScheme].color} />
      <Text style={[ThemeColors.textColor[colorScheme], {fontSize: size*.5}]} >{rainChance}%</Text>
    </View>
  );

  switch (forecast) {
    case 1:
      return(clearSky);
      break;
    case 2: 
      return(partlyCloudy);
      break;
    case 3: 
      return(partlyCloudy);
      break;
    case 4: 
      return(cloudy);
      break;
    case 5: 
      return(cloudy);
      break;
    case 6: 
      return(partlyRainy);
      break;
    case 7: 
      return(partlyRainy);
      break;
    case 8: 
      return(rainy);
      break;
    case 9: 
      return(rainy);
      break;
    case 10: 
      return(rainy);
      break;
    case 11: 
      return(pouring);
      break;
    case 12: 
      return(rainy);
      break;
    case 13: 
      return(rainy);
      break;
    case 14: 
      return(rainy);
      break;
    case 15: 
      return(partlyRainy);
      break;
    case 16: 
      return(hazy);
      break;
    case 17: 
      return(fog);
      break;
    case 18: 
      return(snow);
      break;
    case 19: 
      return(lightning);
      break;
    case 20: 
      return(lightningRainy);
      break;
    case 21:
      return(hail);
      break;
    case 22: 
      return(snow);
      break;
    case 23: 
      return(lightningRainy);
      break;
    case 24: 
      return(cloudy);
      break;
    case 25: 
      return(partlyCloudy);
      break;
    case 26: 
      return(fog);
      break;
    case 27: 
      return(partlyCloudy);
      break;
    default:
      return(noInfo);
  }

  
}