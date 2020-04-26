import * as React from 'react';
import { ActivityIndicator, ImageBackground, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component{
  render() {
    let image = require('./assets/clear.png');

    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={image}
          style={{flex: 1}}
          imageStyle={{flex: 1, width: null, height: null, resizeMode: 'cover'}}
        >
          <View style={{flex: 1, paddingVertical: 20, flexDirection: 'column', justifyContent: 'space-between',}}>
            <View>
              <Text>Box 1</Text>
              <Text>Box2</Text>
            </View>
            <View>
              <Text>Box 3</Text>
            </View>
            <View>
              <Text>Box 4</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };
};