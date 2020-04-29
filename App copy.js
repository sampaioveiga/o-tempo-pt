import * as React from 'react';
import { ActivityIndicator, ImageBackground, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';

import { fetchWeather } from './utils/ipma_api';
import * as descriptions from './utils/weather-type-classe.json';
import * as locations from './utils/disctricts_islands.json';

export default class App extends React.Component {
  state = {
    loading: false,
    error: false,
    location: 'Bragança',
    forecast: 'Céu limpo',
    minTemp: '-',
    maxTemp: '-',
    dataUpdate: '-',
  };

  componentDidMount() {
    this.getWeather(1040200);
  };

  getWeather = async location => {
    this.setState({ loading: true }, async () => {
      try {
        const { todayForecast, dataUpdate } = await fetchWeather(location);
        const todayDesc = descriptions.data.filter(o => o.idWeatherType === todayForecast.idWeatherType);
        
        this.setState({
          loading: false,
          error: false,
          minTemp: todayForecast.tMin,
          maxTemp: todayForecast.tMax,
          dataUpdate,
          forecast: todayDesc[0].descIdWeatherTypePT,
        });
      } catch (e) {
        this.setState({
          loading: false,
          error: true,
        })
      }
    })
  };
  
  render() {
    let image  = require('./assets/hail.png');
    const { loading, error, location, forecast, maxTemp, minTemp, dataUpdate } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={image}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >     
          <View style={styles.forecastContainer}> 
            <ActivityIndicator animating={loading} color={"white"} size={"large"} />
            {!loading && (
              <View>
                {error && (
                  <Text style={[styles.textStyle, styles.largeText]}>Erro na ligação</Text>
                )}

                {!error &&(
                  <View>
                    <View>
                    <Text style={[styles.textStyle, styles.largeText]}>{location}</Text>
                    <Text style={[styles.textStyle, styles.smallText]}>{forecast}</Text>
                    <Text style={[styles.textStyle, styles.smallText]}>{`${Math.round(minTemp)}°`} - {`${Math.round(maxTemp)}°`}</Text>
                    </View>
                    <View style={styles.footnote}>
                      <Text style={[styles.textStyle, styles.footnomeText]}>Actualização: {dataUpdate}</Text>
                    </View>
                  </View>
                )}  
              </View>
            )}
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
    //position: 'absolute',
    bottom: 0,
    right: 0,
  },
  smallText: {
    fontSize: 18,
  },
  footnomeText: {
    fontSize: 11,
    textAlign: 'right',
  }
});