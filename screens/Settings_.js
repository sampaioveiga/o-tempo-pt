import * as React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as district_Islands from '../utils/disctricts_islands.json';

function Item({ globalIdLocal, local }) {
  return (
    <TouchableOpacity
      style={styles.item}
    >
      <Text style={styles.title}>{local}</Text>
    </TouchableOpacity>
  );
};

function Header({closeSettingsHandler}) {
  return(
    <TouchableOpacity
      style={styles.button}
      onPress={closeSettingsHandler}
    >
      <Text>Sair</Text>
    </TouchableOpacity>
  );
};

export default class Settings extends React.Component {
  state= {
    selected: new Map(),
    setSeleted: new Map(),
  };

  render() {
    const DATA = district_Islands.data;
    const {
      savedLocations,
      closeSettingsHandler,
    } = this.props;

    const onSelect = React.useCallback(
      globalIdLocal => {
        const newSelected = new Map(state.selected);
        newSelected.set(globalIdLocal, !state.selected.get(globalIdLocal));
  
        setSelected(newSelected);
      },
      [this.state.selected],
    );

    return(
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item
              globalIdLocal={item.globalIdLocal}
              local={item.local }
            />
          )}
          keyExtractor={item => item.local}
          ListHeaderComponent={
            <Header
              closeSettingsHandler={closeSettingsHandler}
            />
          }
        />
      </SafeAreaView>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 4,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  header: {
    width: '100%',
    height: 45,
    backgroundColor: '#DDDDDD',
  },
  headerTextStyle: {
    textAlign: 'center',
    fontSize: 20,
    padding: 7,
  },
  button: {
    fontSize: 30,
    alignItems: 'center',
    backgroundColor: "#DDDDDD",
    padding: 7,
  },
});