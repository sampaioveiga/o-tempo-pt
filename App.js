import * as React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import WeatherForecast from './screens/WeatherForecast';

import { fetchWeather } from './utils/ipma_api';
import * as descriptions from './utils/weather-type-classe.json';
import * as wind_speed from './utils/wind-speed-daily-classe.json';

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
      windDir: '',
      windSpeed: '',
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
    locationName: '',
    loc: [1040200, 1030300, 1010500 ],
    activeLocation: 0,
  };

  componentDidMount() {
    this.getWeather();
  };

  getWeather = async () => {
    const location = this.state.loc[this.state.activeLocation];

    this.setState({ appStatus: { loading: true }}, async () => {
      try {
        const { locationName, todayData, tomorrowData, dayAfterData, dataUpdate } = await fetchWeather(location);
        const todayForecast = descriptions.data.filter(o => o.idWeatherType === todayData.idWeatherType);
        const windSpeed = wind_speed.data.filter(o => o.classWindSpeed === todayData.classWindSpeed);
        const tomorrowForecast = descriptions.data.filter(o => o.idWeatherType === tomorrowData.idWeatherType);
        const dayAfterForecast = descriptions.data.filter(o => o.idWeatherType === dayAfterData.idWeatherType);

        this.setState({
          appStatus: {
            loading: false,
            error: false,
            dataUpdate: dataUpdate,
          },
          locationName: locationName,
          today: {
            tMin: todayData.tMin,
            tMax: todayData.tMax,
            forecast: todayForecast[0].descIdWeatherTypePT,
            rain: todayData.precipitaProb,
            windSpeed: windSpeed[0].descClassWindSpeedDailyPT,
            windDir: todayData.predWinDir,
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

  nextLocationHandler = () => {
    if ( this.state.activeLocation === this.state.loc.length -1 ) { return; }
    this.setState({
      activeLocation: this.state.activeLocation + 1,
    },
    this.getWeather
    );
  };

  previousLocationHandler = () => {
    if ( this.state.activeLocation === 0 ) { return; }
    this.setState({
      activeLocation: this.state.activeLocation - 1,
    },
    this.getWeather
    );
  };
  
  render() {
    const { locationName, appStatus, today, tomorrow, dayAfter, loc, activeLocation } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <WeatherForecast
          location={locationName}
          appStatus={appStatus}
          today={today}
          tomorrow={tomorrow}
          dayAfter={dayAfter}
          activeLocation={activeLocation}
          loc={loc}
          nextLocationHandler={this.nextLocationHandler}
          previousLocationHandler={this.previousLocationHandler}
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