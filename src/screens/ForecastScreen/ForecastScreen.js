import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Text,
  useColorScheme,
  useWindowDimensions,
  View
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles, { ThemeColors } from './styles';

import TodayComponent from '../../components/TodayComponent/TodayComponent';
import NextDayComponent from '../../components/NextDayComponent/NextDayComponent';
import { fetchForecast } from '../../utils/fetchForecast';

// ----------------------------------------------------------------- main function
export default function ForecastScreen(props) {
  const {
    locations,
  } = props;
  const [ loading, setLoading ] = useState(true);
  const colorScheme = useColorScheme();
  const window = useWindowDimensions();
  const location = locations[0];
  const [ updateAt, setUpdateAt ] = useState({});
  const [ day0, setDay0 ] = useState({});
  const [ day1, setDay1 ] = useState({});
  const [ day2, setDay2 ] = useState({});
  const [ day3, setDay3 ] = useState({});
  const [ day4, setDay4 ] = useState({});

  // ----------------------------------------------------------------- fetch Forecast for location
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchForecast(location);
        setDay0(response.data[0]);
        setDay1(response.data[1]);
        setDay2(response.data[2]);
        setDay3(response.data[3]);
        setDay4(response.data[4]);
        setUpdateAt(response.dataUpdate);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [location]);

  // ----------------------------------------------------------------- header component
  const header = (
    <View style={styles.headerContainer}>
      <View style={[styles.headerButton, ThemeColors.headerButton[colorScheme]]}>
        <MaterialCommunityIcons name="cog" size={window.width*.1} color={ThemeColors.headerButton[colorScheme].color} />
      </View>
    </View>
  );

  // ----------------------------------------------------------------- header component
  const footer = (
    <View style={styles.footer}>
      <Text style={ThemeColors.textColor[colorScheme]}>useColorScheme(): {colorScheme}</Text>
      <Text style={ThemeColors.textColor[colorScheme]}>{updateAt}</Text>
    </View>
  )

  // ----------------------------------------------------------------- App return
  if (loading) {
    return(
      <View style={[styles.container, ThemeColors.container[colorScheme]]}>
        <ActivityIndicator animating={loading} color={ThemeColors.container[colorScheme].color} size={"large"} />
      </View>
    );
  } else {
  return(
    <View style={styles.container}>
      <ImageBackground
        //source={require('../../../assets/SplitShire-The-Walking-Bob-06.webp')}
        source={require('../../../assets/SplitShire-21-8659.webp')}
        style={styles.imgBg}
        >
        <View style={styles.forecastContainer}>
        
          {header}
        
          <TodayComponent
            locationID={locations[0]}
            day={day0}
            colorScheme={colorScheme}
            />

          <View style={styles.nextDaysContainer}>
            <NextDayComponent
              day={day1}
              colorScheme={colorScheme}
              />
            <NextDayComponent
              day={day2}
              colorScheme={colorScheme}
              />
            <NextDayComponent
              day={day3}
              colorScheme={colorScheme}
              />
            <NextDayComponent
              day={day4}
              colorScheme={colorScheme}
              />
            
          </View>
        
          {footer}

        </View>
      </ImageBackground>
    </View>
  );
  }
};