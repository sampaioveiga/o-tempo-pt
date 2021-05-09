import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  PanResponder,
  Text,
  useColorScheme,
  useWindowDimensions,
  View
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles, { ThemeColors } from './styles';

import TodayComponent from '../../components/TodayComponent/TodayComponent';
import NextDayComponent from '../../components/NextDayComponent/NextDayComponent';
import ScreenIndicatorComponent from '../../components/ScreenIndicatorComponent/ScreeIndicatorComponent';
import { fetchForecast } from '../../utils/fetchForecast';
import { fetchImage } from '../../utils/fetchImage';
import weatherDesc from '../../utils/weather-type-classe.json';

// ----------------------------------------------------------------- main function
export default function ForecastScreen(props) {
  const {
    locations,
    activeLocation,
    previousLocation,
    nextLocation,
  } = props;
  const [ loading, setLoading ] = useState(true);
  const colorScheme = useColorScheme();
  const window = useWindowDimensions();
  const location = locations[activeLocation];
  const [ updateAt, setUpdateAt ] = useState({});
  const [ day0, setDay0 ] = useState({
    idWeatherType: 0,
  });
  const [ day1, setDay1 ] = useState({});
  const [ day2, setDay2 ] = useState({});
  const [ day3, setDay3 ] = useState({});
  const [ day4, setDay4 ] = useState({});
  const [ query, setQuery ] = useState('sem info');
  const [ photo, setPhoto ] = useState({
    photo: '',
    photographer: '',
  });

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
  }, [activeLocation]);

  // ----------------------------------------------------------------- fetch bgimage
  useEffect(() => {
    const q = weatherDesc.data.filter(o => o.idWeatherType === day0.idWeatherType);
    setQuery(q[0].descIdWeatherTypePT);
    const getImage = async () => {
      try {
        const { photo, photographer } = await fetchImage(query);
        //const { photo, photographer } = await fetchImage();
        setPhoto({photo: photo, photographer: photographer});
      } catch (e) {
        console.log(e);
      }
    };
    getImage();
  }, [day0, loading]);

  // ----------------------------------------------------------------- touch input
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderRelease: (evt, gestureState) => {
      if ( gestureState.dx < 100 ) {
        nextLocation();
      } else if ( gestureState.dx > 100) {
        previousLocation();
      }
    },
  });

  // ----------------------------------------------------------------- header component
  const header = (
    <View style={styles.headerContainer}>
      <View style={[styles.headerButton, ThemeColors.headerButton[colorScheme]]}>
        <MaterialCommunityIcons name="cog" size={window.width*.1} color={ThemeColors.headerButton[colorScheme].color} />
      </View>
    </View>
  );

  // ----------------------------------------------------------------- footer component
  const footer = (
    <View style={styles.footer}>
      <View>
        <Text style={[ styles.textBorder , ThemeColors.textColor[colorScheme]]}>Pexels: {photo.photographer}</Text>
      </View>
      <View>
        <Text style={[ styles.textBorder, ThemeColors.textColor[colorScheme]]}>{updateAt}</Text>
      </View>
    </View>
  );

  // ----------------------------------------------------------------- App return
  if (loading) {
    return(
      <View style={[styles.container, ThemeColors.container[colorScheme]]}>
        <ActivityIndicator animating={loading} color={ThemeColors.container[colorScheme].color} size={"large"} />
      </View>
    );
  } else {
  return(
    <View style={styles.container} {...panResponder.panHandlers}>
      <ImageBackground
        source={{ uri: photo.photo !== '' ? photo.photo : 'https://photos.app.goo.gl/uhhKASpXpoPu3tZp8' }}
        style={styles.imgBg}
        >
        <View style={styles.forecastContainer}>
        
          {header}
        
          <TodayComponent
            locationID={locations[activeLocation]}
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

          <ScreenIndicatorComponent
            numberLocations={(locations.length)}
            activeLocation={activeLocation}
            colorScheme={colorScheme}
          />
        
          {footer}

        </View>
      </ImageBackground>
    </View>
  );
  }
};