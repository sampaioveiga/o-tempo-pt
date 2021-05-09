import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  centeredView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const ThemeColors = {
  active: {
    outer: {
      light: {
        backgroundColor: 'rgba(0,0,0,0.6)',
      },
      dark: {
        backgroundColor: 'rgba(255,255,255,0.6)',
      },
    },
    inner: {
      light: {
        backgroundColor: 'white',
      },
      dark: {
        backgroundColor: 'black',
      },
    },
  },
  nonActive: {
    outer: {
      light: {
        backgroundColor: 'rgba(0,0,0,0.6)',
      },
      dark: {
        backgroundColor: 'rgba(255,255,255,0.6)',
      },
    },
    inner: {
      light: {
        backgroundColor: 'silver',
      },
      dark: {
        backgroundColor: 'gray',
      },
    },
  },
};