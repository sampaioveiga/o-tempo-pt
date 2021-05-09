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
  textBorder: {
    textShadowRadius: 10, 
    textShadowOffset: {width: 0, height: 0},
  }
});

export const ThemeColors = {
  container: {
    light: {
      //backgroundColor: 'rgba(0,0,0,0.5)',
    },
    dark: {
      //backgroundColor: 'rgba(255,255,255,0.5)',
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