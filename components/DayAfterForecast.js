import * as React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default function DayAfterForecast({forecast}) {
  const day = forecast.date;
  const description = forecast.forecast;
  const rain = forecast.rain;
  const tMin = forecast.tMin;
  const tMax = forecast.tMax;

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.textTitle]}>{day}</Text>
      <Text style={styles.text}>{description} { rain > 51 ? '('+rain+'%)' : '' }</Text>
      <Text style={styles.text}>{tMin}° - {tMax}°</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'white',
    borderWidth: 0,
    padding: 5,
    marginTop: 5,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    fontSize: 16,
    width: (Dimensions.get('window').width-100)/2,
  },
  textTitle: {
    fontWeight: 'bold',
  },
});