import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TodayForecast({location, today}) {
  const forecast = today.forecast;
  const rain = today.rain; 
  const tMin = today.tMin;
  const tMax = today.tMax;
  const windSpeed = today.windSpeed;
  const windDir = today.windDir;

  return(
    <View>
      <Text style={[styles.textStyle, styles.largeText]}>{location}</Text>
      <Text style={[styles.textStyle, styles.smallText]}>{forecast} { rain > 51 ? '('+rain+'%)' : '' }</Text>
      <Text style={[styles.textStyle, styles.smallText]}>{tMin}° - {tMax}°</Text>
      <Text style={[styles.textStyle, styles.smallText]}>Vento {windSpeed} {windDir}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    color: 'white',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  },
  largeText: {
    fontSize: 52,
  },
  smallText: {
    fontSize: 32,
  },
});