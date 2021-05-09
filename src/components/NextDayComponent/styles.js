import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  textBorder: {
    textShadowRadius: 5, 
    textShadowOffset: {width: 0, height: 0},
  },
});

export const ThemeColors = {
  container: {
    light: {
      backgroundColor: 'rgba(0,0,0,0.6)',
    },
    dark: {
      backgroundColor: 'rgba(255,255,255,0.6)',
    }
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