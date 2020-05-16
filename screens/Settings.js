import * as React from 'react';
import { FlatList, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import * as district_Islands from '../utils/disctricts_islands.json';

function Header({setModalVisible, closeSettingsHandler}) {
  return(
    <View style={styles.header}>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <AntDesign name="info" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={closeSettingsHandler}
        >
          <AntDesign name="home" size={24} color="black" />
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
  state = {
    selected: new Map(),
    modalVisible: false,
  };

  componentDidMount() {
    this.props.savedLocations.map(
      i => this.setState({
        selected: this.state.selected.set(i, true)
      })
    );
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  _keyExtractor = (item, index) => item.local;

  _onPressItem = (id) => {
    this.setState((state) => {
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
    const { modalVisible } = this.state;
    const { savedLocations, closeSettingsHandler, addLocation, removeLocation } = this.props;
    const data = district_Islands.data;

    return (
      <SafeAreaView style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>O Tempo</Text>
              <Text style={styles.modalText}>
                Aplicação com tutorial de demonstração.
              </Text>

              <TouchableOpacity
                style={[styles.button, { }]}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Header
          setModalVisible={this.setModalVisible}
          closeSettingsHandler={closeSettingsHandler}
        />
        <FlatList
          data={data}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
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
    padding: 10,
    marginVertical: 6,
    marginHorizontal: 16,
  },
  local: {
    fontSize: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: "#DDDDDD",
    margin: 7,
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
});