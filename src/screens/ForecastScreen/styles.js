import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBg: {
    flex:1,
    resizeMode: 'cover',
  },
  forecastContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainer: {
    paddingTop: windowHeight*.01,
    alignItems: 'flex-end',
    width: windowWidth*.9,
  },
  headerButton: {
    backgroundColor: 'black',
    borderRadius: windowWidth*.1,
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todayContainer: {
    width: windowWidth,
  },
  nextDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: windowWidth,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    width: windowWidth,
  },
  textBorder: {
    textShadowRadius: windowWidth*.01,
    textShadowOffset: {width: 0, height: 0},
  }
});

export const ThemeColors = {
  container: {
    light: {
      backgroundColor: 'white',
      color: 'black',
    },
    dark: {
      backgroundColor: 'black',
      color: 'white',
    }
  },
  headerButton: {
    light: {
      backgroundColor: 'rgba(0,0,0,0.6)',
      color: 'white',
    },
    dark: {
      backgroundColor: 'rgba(255,255,255,0.6)',
      color: 'black',
    },
  },
  textColor: {
    light: {
      color: 'white',
      textShadowColor: 'black',
    },
    dark: {
      color: 'black',
      textShadowColor: 'white',
    },
  },
  footer: {
    light: {
      backgroundColor: 'rgba(0,0,0,0.4)',
      color: 'black',
    },
    dark: {
      backgroundColor: 'rgba(255,255,255,0.4)',
      color: 'white',
    }
  },
};