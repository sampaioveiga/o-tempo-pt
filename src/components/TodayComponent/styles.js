import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '70%',
  },
});

export const ThemeColors = {
  container: {
    light: {
      backgroundColor: 'rgba(0,0,0,0.4)',
    },
    dark: {
      backgroundColor: 'rgba(255,255,255,0.4)',
    }
  },
  textColor: {
    light: {
      color: 'white',
    },
    dark: {
      color: 'black',
    },
  },
  rainIcon: {
    light: {
      color: 'white',
      backgroundColor: 'black',
    },
    dark: {
      color: 'black',
      backgroundColor: 'white',
    },
  },
}