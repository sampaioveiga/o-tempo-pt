import { StyleSheet } from 'react-native';

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
    paddingTop: '2%',
    alignItems: 'flex-end',
    width: '90%',
  },
  headerButton: {
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  footer: {
    alignItems: 'flex-end',
    width: '90%',
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
      //backgroundColor: 'black',
      backgroundColor: 'rgba(0,0,0,0.3)',
      color: 'white',
    },
    dark: {
      //backgroundColor: 'white',
      backgroundColor: 'rgba(255,255,255,0.3)',
      color: 'black',
    },
  },
  textColor: {
    light: {
      color: 'white',
    },
    dark: {
      color: 'black',
    },
  },
};