import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    height: windowHeight*.09,
    width: windowWidth,
    elevation: 5,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: windowWidth*.05,
  },
  headerText: {
    fontSize: windowWidth*.1,
  },
  headerButton: {
    backgroundColor: 'black',
    borderRadius: windowWidth*1,
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC55',
    width: windowWidth*.95,
  },
  title: {
    fontSize: windowWidth*.07,
  },
});

export const ThemeColors = {
  container: {
    light: {
      backgroundColor: '#eee',
    },
    dark: {
      backgroundColor: '#111',
    },
  },
  header: {
    light: {
      backgroundColor: '#eee',
      borderColor: '#333',
    },
    dark: {
      backgroundColor: '#333',
      borderColor: '#ccc',
    },
  },
  headerText: {
    light: {
      color: 'black',
    },
    dark: {
      color: 'white',
    },
  },
  headerButton: {
    light: {
      backgroundColor: 'rgba(0,0,0,0.6)',
      color: 'white',
    },
    dark: {
      backgroundColor: 'rgba(255,255,255,0.6)',
      color: 'black',
    },
  },
  item: {
    light: {
      backgroundColor: '#eee',
    },
    dark: {
      backgroundColor: '#111',
    },
  },
  title: {
    light: {
      color: 'black',
    },
    dark: {
      color: 'white',
    },
  },
};