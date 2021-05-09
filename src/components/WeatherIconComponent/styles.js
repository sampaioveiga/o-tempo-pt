import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBorder: {
    textShadowRadius: 10, 
    textShadowOffset: {width: 0, height: 0},
  },
});

export const ThemeColors = {
  icon: {
    light: {
      color: 'white',
      backgroundColor: 'rgba(0,0,0,0.6)',
      borderRadius: 30,
    },
    dark: {
      color: 'black',
      backgroundColor: 'rgba(255,255,255,0.6)',
      borderRadius: 30,
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
  smallTextColor: {
    light: {
      color: 'white',
      backgroundColor: 'rgba(0,0,0,0.6)',
    },
    dark: {
      color: 'black',
      backgroundColor: 'rgba(255,255,255,0.6)',
    },
  },
}