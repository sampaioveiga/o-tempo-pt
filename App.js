import * as React from 'react';
import { Button, StatusBar, StyleSheet, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import WeatherForecast from './screens/WeatherForecast';
import Settings from './screens/Settings';

import { fetchWeather } from './utils/ipma_api';
import { fetchImage } from './utils/fetchImage';
import * as descriptions from './utils/weather-type-classe.json';
import * as wind_speed from './utils/wind-speed-daily-classe.json';

export default class App extends React.Component {
  state = {
    appStatus: {
      loading: false,
      error: false,
      dataUpdate: '',
      openSettings: false,
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
    savedLocations: '',
    activeLocation: 0,
    query: '',
    photo: '',
    photographer: '',
  };

  componentDidMount() {
    this.read();
  };

  read = async () => {
    try {
      const savedLocations = await SecureStore.getItemAsync('locations');

      if (savedLocations) {
        const myJson = JSON.parse(savedLocations);
        this.setState({
          savedLocations: myJson,
        },
          this.getWeather
        )
      } else {
        this.openSettingsHandler();
      };
    } catch (e) {
      console.log(e);
    }
  };

  remember = async () => {
    const { savedLocations } = this.state;
    
    try {
      await SecureStore.setItemAsync(
        'locations',
        JSON.stringify(savedLocations)
      );
    } catch (e) {
      console.log(e);
    }
  };

  clear = async () => {
    try {
      await SecureStore.deleteItemAsync('locations');
    } catch (e) {
      console.log(e);
    }
  };

  getWeather = async () => {
    const location = this.state.savedLocations[this.state.activeLocation];

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
          query: todayForecast[0].descIdWeatherTypePT,
        },
          this.getImage,
        );
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

  getImage = async () => {
    const query = this.state.query;
    
    try {
      const { photo, photographer } = await fetchImage(query);
      this.setState({
        photo: photo,
        photographer: photographer,
      });
    } catch (e) {
      console.log(e);
    }
  };

  openSettingsHandler = () => {
    this.setState({
      appStatus: {
        openSettings: true,
      },
    });
  };

  closeSettingsHandler = () => {
    this.remember();
    this.setState({
      appStatus: {
        openSettings: false,
      },
    },
    this.getWeather
    );
  };

  nextLocationHandler = () => {
    if ( this.state.activeLocation === this.state.savedLocations.length -1 ) { return; }
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

  addLocationHandler = id => {
    this.setState({
      savedLocations: [...this.state.savedLocations, id],
    });
  };

  removeLocationHandler = id => {
    const locations = this.state.savedLocations.filter(location => location !== id);
    this.setState({ savedLocations: locations });
  };
  
  render() {
    const { locationName, appStatus, today, tomorrow, dayAfter, savedLocations, activeLocation, photo, photographer } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {!appStatus.openSettings && (
          <WeatherForecast
            location={locationName}
            appStatus={appStatus}
            today={today}
            tomorrow={tomorrow}
            dayAfter={dayAfter}
            activeLocation={activeLocation}
            savedLocations={savedLocations}
            nextLocationHandler={this.nextLocationHandler}
            previousLocationHandler={this.previousLocationHandler}
            openSettingsHandler={this.openSettingsHandler}
            photo={photo}
            photographer={photographer}
          />
        )}
        {appStatus.openSettings && (
          <Settings
            savedLocations={savedLocations}
            closeSettingsHandler={this.closeSettingsHandler}
            addLocation={this.addLocationHandler}
            removeLocation={this.removeLocationHandler}
          />
        )}
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