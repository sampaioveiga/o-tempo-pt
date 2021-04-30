import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const ThemeColors = {
  icon: {
    light: {
      color: 'white',
      backgroundColor: 'black',
    },
    dark: {
      color: 'black',
      backgroundColor: 'white',
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
}