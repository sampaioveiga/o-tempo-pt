import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  todayContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rainContainer: {
    flexDirection: 'row',
  },
});

export const ThemeColors = {
  todayContainer: {
    light: {
      backgroundColor: 'rgba(0,0,0,0.3)',
    },
    dark: {
      backgroundColor: 'rgba(255,255,255,0.3)',
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