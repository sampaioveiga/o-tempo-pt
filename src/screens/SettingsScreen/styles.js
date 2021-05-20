import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    height: '10%',
    width: '100%',
    elevation: 5,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
    marginBottom: '3%',
  },
  headerText: {
    fontSize: 30,
  },
  headerButton: {
    backgroundColor: 'black',
    borderRadius: 20,
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
    borderBottomColor: '#CCCCCC55'
  },
  title: {
    fontSize: 20,
    textTransform: 'capitalize',
  },
});

export const ThemeColors = {
  container: {
    light: {
      backgroundColor: 'white',
    },
    dark: {
      backgroundColor: 'black',
    },
  },
  header: {
    light: {
      backgroundColor: 'blue',
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
      backgroundColor: 'silver',
    },
    dark: {
      backgroundColor: 'gray',
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