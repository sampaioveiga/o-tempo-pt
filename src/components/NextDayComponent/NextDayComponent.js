import React from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import styles, { ThemeColors } from './styles';
import moment from 'moment/min/moment-with-locales';
import WeatherIconComponent from '../WeatherIconComponent/WeatherIconComponent';
import WindIconComponent from '../WindIconComponent/WindIconComponent';

export default function NextDayComponent(props) {
  const {
    day,
    colorScheme,
  } = props;
  const window = useWindowDimensions();
  moment.locale('pt');

  return(
    <View style={[ styles.container, ThemeColors.container[colorScheme]]}>
      <Text style={[ {fontSize: window.width*.09}, ThemeColors.textColor[colorScheme]]}>{moment(day.forecastDate).format('ddd')}</Text>
      <View style={ styles.icons }>

        <WeatherIconComponent
          forecast={day['idWeatherType']}
          rainChance={day['precipitaProb']}
          colorScheme={colorScheme}
          size={window.width*.08}
          />
        
        {/*<WindIconComponent
          forecast={day['classWindSpeed']}
          colorScheme={colorScheme}
          size={window.width*.04}
        />*/}
        
        <View style={styles.centeredView}>
          <Text style={[ {fontSize: window.width*.05}, ThemeColors.textColor[colorScheme]]}>{day.tMax}°</Text>
          <Text style={[ {fontSize: window.width*.05}, ThemeColors.textColor[colorScheme]]}>{day.tMin}°</Text>
        </View>

      </View>      
    </View>
  );
}