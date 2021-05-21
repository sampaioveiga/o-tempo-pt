import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  centeredView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    borderRadius: windowWidth*.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorOuter: {
    width: windowWidth*.035,
    height: windowWidth*.035,
    marginHorizontal: windowWidth*.01
  },
  indicatorInner: {
    width: windowWidth*.03,
    height: windowWidth*.03,
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