import * as React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import * as district_Islands from '../utils/disctricts_islands.json';

function Header({closeSettingsHandler}) {
  return(
    <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 5}}>
      <View>
        <Text style={styles.headerTextStyle}>Configurações</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={closeSettingsHandler}
        >
          <AntDesign name="save" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.globalIdLocal);
  };

  render() {
    const itemColor = this.props.selected ? 'white' : '#aaaaaa';
    return (
      <TouchableOpacity onPress={this._onPress} style={[styles.item, {backgroundColor: itemColor}]}>
        <View>
          <Text>{this.props.local}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class Settings extends React.PureComponent {
  state = {selected: new Map()};

  componentDidMount() {
    this.props.savedLocations.map(
      i => this.setState({
        selected: this.state.selected.set(i, true)
      })
    );
  };

  _keyExtractor = (item, index) => item.local;

  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      if (selected.get(id)) {
        this.props.removeLocation(id);
      } else {
        this.props.addLocation(id);
      }
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };

  _renderItem = ({item}) => (
    <MyListItem
      globalIdLocal={item.globalIdLocal}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.globalIdLocal)}
      local={item.local}
    />
  );

  _renderHeader = () => (
    <Header
      closeSettingsHandler={this.props.closeSettingsHandler}
    />
  );

  render() {
    const { savedLocations, closeSettingsHandler, addLocation, removeLocation } = this.props;
    const data = district_Islands.data;

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          ListHeaderComponent={this._renderHeader}
        />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  item: {
    backgroundColor: 'white',
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
    fontSize: 22,
    
    color: 'white'
  },
  button: {
    backgroundColor: "#DDDDDD",
    margin: 7,
    borderRadius: 4,
  },
});