import * as React from 'react';
import { ActivityIndicator, ImageBackground, StyleSheet, Text, View } from 'react-native';

import TodayForecast from '../components/TodayForecast';
import DayAfterForecast from '../components/DayAfterForecast';
import DataUpdate from '../components/DataUpdate';

export default function WeatherForecast({location, appStatus, today, tomorrow, dayAfter}) {
  let image = require('../assets/hail.png');
  const loading = appStatus.loading;
  const error = appStatus.error;
  const dataUpdate = appStatus.dataUpdate;

  return(
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.imageContainer}
        imageStyle={styles.image}
      >
        <View style={styles.forecastContainer}>
          <View>
            <Text style={{color: 'white', fontSize: 20, textAlign: 'right', }}>Settings</Text>
          </View>
          <View>
            <ActivityIndicator animating={loading} color={"white"} size={"large"} />
            {!loading && (
              <View>
                {error && (
                  <Text style={styles.errorText}>Erro ao obter dados</Text>
                )}

                {!error && (
                  <View>
                    <TodayForecast location={location} today={today} />
                    <View style={styles.dayAfterContainer}>
                      <DayAfterForecast forecast={tomorrow}/>
                      <DayAfterForecast forecast={dayAfter} />
                    </View>
                  </View>
                )}
              </View>
            )}
          </View>
          <View>
            <DataUpdate dataUpdate={dataUpdate} />
          </View>
        </View>
      </ImageBackground>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  forecastContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  errorText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  },
  dayAfterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});