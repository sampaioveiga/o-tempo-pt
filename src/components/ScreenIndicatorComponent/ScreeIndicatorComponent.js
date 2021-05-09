import React, { useEffect, useState } from 'react';
import {
  useWindowDimensions,
  View
} from 'react-native';
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
      indicator.push(
        <View style={[ styles.indicator, {width: width*.035, height: width*.035}, ThemeColors.active.outer[colorScheme]]} key={i}>
          <View style={[ styles.indicator, {width: width*.03, height: width*.03}, ThemeColors.active.inner[colorScheme]]}></View>
        </View>
      );
    } else {
      indicator.push(
        <View style={[ styles.indicator, {width: width*.035, height: width*.035}, ThemeColors.nonActive.outer[colorScheme]]} key={i}>
          <View style={[ styles.indicator, {width: width*.03, height: width*.03}, ThemeColors.nonActive.inner[colorScheme]]} key={i}></View>
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