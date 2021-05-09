import React, { useEffect, useState } from 'react';
import {
  useWindowDimensions,
  View
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles, { ThemeColors } from './styles';

export default function ScreeIndicatorComponent(props) {
  const {
    numberLocations,
    activeLocation,
    colorScheme,
  } = props;
  const window = useWindowDimensions();
  const width = window.width;
  let indicator = [];

  for(let i=0 ; i<numberLocations ; i++) {
    if (i===activeLocation) {
      indicator.push(<View style={[ styles.indicator, {width: width*.08, height: width*.08}, ThemeColors.active[colorScheme]]} key={i}><Entypo name="dot-single" size={width*.08} color={ThemeColors.active[colorScheme].color} /></View>);
    } else {
      indicator.push(<View style={[ styles.indicator, {width: width*.08, height: width*.08}, ThemeColors.active[colorScheme]]} key={i}><Entypo name="dot-single" size={width*.08} color={ThemeColors.nonActive[colorScheme].color} /></View>);
    }
  }

  return (
    <View style={styles.centeredView}>
      {indicator}
    </View>
  );
};