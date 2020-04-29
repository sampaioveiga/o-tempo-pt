import * as React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import WeatherForecast from './screens/WeatherForecast';

import { fetchWeather } from './utils/ipma_api';
import * as descriptions from './utils/weather-type-classe.json';
import * as locations from './utils/disctricts_islands.json';

export default class App extends React.Component {
  state = {
    appStatus: {
      loading: false,
      error: false,
      dataUpdate: '',
    },
    today: {
      forecast: '',
      tMin: '',
      tMax: '',
      rain: '',
    },
    tomorrow: {
      forecast: '',
      tMin: '',
      tMax: '',
      date: '',
    },
    dayAfter: {
      forecast: '',
      tMin: '',
      tMax: '',
      date: '',
    },
    loc: [1040200, 1010500],
    activeLocation: 0,
  };

  componentDidMount() {
    this.getWeather(this.state.loc[0]);
  };

  getWeather = async location => {
    this.setState({ appStatus: { loading: true }}, async () => {
      try {
        const { todayData, tomorrowData, dayAfterData, dataUpdate } = await fetchWeather(location);
        const todayForecast = descriptions.data.filter(o => o.idWeatherType === todayData.idWeatherType);
        const tomorrowForecast = descriptions.data.filter(o => o.idWeatherType === tomorrowData.idWeatherType);
        const dayAfterForecast = descriptions.data.filter(o => o.idWeatherType === dayAfterData.idWeatherType);
        
        this.setState({
          appStatus: {
            loading: false,
            error: false,
            dataUpdate: dataUpdate,
          },
          today: {
            tMin: todayData.tMin,
            tMax: todayData.tMax,
            forecast: todayForecast[0].descIdWeatherTypePT,
            rain: todayData.precipitaProb,
          },
          tomorrow: {
            tMin: tomorrowData.tMin,
            tMax: tomorrowData.tMax,
            forecast: tomorrowForecast[0].descIdWeatherTypePT,
            date: tomorrowData.forecastDate,
            rain: tomorrowData.precipitaProb,
          },
          dayAfter: {
            tMin: dayAfterData.tMin,
            tMax: dayAfterData.tMax,
            forecast: dayAfterForecast[0].descIdWeatherTypePT,
            date: dayAfterData.forecastDate,
            rain: dayAfterData.precipitaProb,
          },
        });
      } catch (e) {
        this.setState({
          appStatus: {
            loading: false,
            error: true,
          },
        })
      }
    })
  };

  changeLocationHandler = () => {
    this.setState({
      activeLocation: 1,
    });
    console.log(this.state.loc[this.state.activeLocation]);
    this.getWeather(this.state.loc[this.state.activeLocation]);
  };
  
  render() {
    const { loc, activeLocation, appStatus, today, tomorrow, dayAfter } = this.state;
    const location = locations.data.filter(o => o.globalIdLocal === loc[activeLocation]);

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text onPress={this.changeLocationHandler}>asd</Text>
        <WeatherForecast
          location={location[0].local}
          appStatus={appStatus}
          today={today}
          tomorrow={tomorrow}
          dayAfter={dayAfter}
        />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
});