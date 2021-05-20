import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: windowWidth*.01,
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
    textShadowRadius: windowWidth*.02,
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