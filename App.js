import * as React from 'react';
import { ActivityIndicator, ImageBackground, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    loading: false,
    error: false,
    location: 'Bragança',
    forecast: 'Céu limpo',
    minTemp: 4,
    maxTemp: 18,
    dateTime: '13:30 23/04/2020',
  };
  
  render() {
    let image  = require('./assets/clear.png');
    const { loading, error, location, forecast, maxTemp, minTemp, dateTime } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={image}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >      
            <ActivityIndicator animating={loading} color={"white"} size={"large"} />
            {!loading && (
              <View style={styles.forecastContainer}>
                <Text style={[styles.textStyle, styles.largeText]}>{location}</Text>
                <Text style={[styles.textStyle, styles.smallText]}>{forecast}</Text>
                <Text style={[styles.textStyle, styles.smallText]}>{`${Math.round(minTemp)}°`} - {`${Math.round(maxTemp)}°`} </Text>
              </View>
            )}
            <View style={styles.footnote}>
              <Text style={[styles.textStyle, styles.footnomeText]}>Actualização: {dateTime}</Text>
            </View>
        </ImageBackground>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
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
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  },
  largeText: {
    fontSize: 44,
  },
  footnote: {
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  smallText: {
    fontSize: 18,
  },
  footnomeText: {
    fontSize: 11,
    textAlign: 'right',
  }
});
