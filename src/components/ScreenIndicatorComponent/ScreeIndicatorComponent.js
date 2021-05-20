import React from 'react';
import { View } from 'react-native';
import styles, { ThemeColors } from './styles';

export default function ScreeIndicatorComponent(props) {
  const {
    numberLocations,
    activeLocation,
    colorScheme,
  } = props;
  let indicator = [];

  for(let i=0 ; i<numberLocations ; i++) {
    if (i===activeLocation) {
      indicator.push(
        <View style={[ styles.indicator, styles.indicatorOuter, ThemeColors.active.outer[colorScheme]]} key={i}>
          <View style={[ styles.indicator, styles.indicatorInner, ThemeColors.active.inner[colorScheme]]}></View>
        </View>
      );
    } else {
      indicator.push(
        <View style={[ styles.indicator, styles.indicatorOuter, ThemeColors.nonActive.outer[colorScheme]]} key={i}>
          <View style={[ styles.indicator, styles.indicatorInner, ThemeColors.nonActive.inner[colorScheme]]} key={i}></View>
        </View>
      );
    }
  }

  return (
    <View style={styles.centeredView}>
      {indicator}
    </View>
  );
};