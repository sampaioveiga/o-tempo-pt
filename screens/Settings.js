import * as React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as district_Islands from '../utils/disctricts_islands.json';

const DATA = district_Islands.data;

function Item({ globalIdLocal, local, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(globalIdLocal)}
      style={[
        styles.item,
        { backgroundColor: selected ? 'white' : 'grey' },
      ]}
    >
      <Text style={styles.title}>{local}</Text>
    </TouchableOpacity>
  );
};

function Header({ closeSettingsHandler }) {
  return(
    <TouchableOpacity
      onPress={closeSettingsHandler}
      style={styles.header}
    >
      <Text style={styles.headerTextStyle}>Sair</Text>
    </TouchableOpacity>
  );
};

export default function Settings({ savedLocations, closeSettingsHandler}) {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    globalIdLocal => {
      const newSelected = new Map(selected);
      console.log(newSelected);
      newSelected.set(globalIdLocal, !selected.get(globalIdLocal));

      setSelected(newSelected);
    },
    [selected],
  );

  return(  
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        ListHeaderComponent={({ header }) => (
          <Header
            closeSettingsHandler={closeSettingsHandler}
          />
        )}
        renderItem={({ item }) => (
          <Item
            globalIdLocal={item.globalIdLocal}
            local={item.local}
            selected={!!selected.get(item.globalIdLocal)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.globalIdLocal}
        extraData={selected}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  local: {
    fontSize: 32,
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
});