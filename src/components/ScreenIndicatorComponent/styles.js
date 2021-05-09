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
    light: {
      color: 'white',
      backgroundColor: 'rgba(0,0,0,0.6)',
    },
    dark: {
      color: 'black',
      backgroundColor: 'rgba(255,255,255,0.6)',
    }
  },
  nonActive: {
    light: {
      color: 'gray',
      backgroundColor: 'rgba(0,0,0,0.6)',
    },
    dark: {
      color: 'silver',
      backgroundColor: 'rgba(255,255,255,0.6)',
    }
  },
};