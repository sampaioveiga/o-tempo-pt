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
}