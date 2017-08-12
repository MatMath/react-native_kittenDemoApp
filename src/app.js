/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';

const kitten1 = require('./img/kitten_1.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

class kittenDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Welcome to the Kitten App!',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.title}
        </Text>
        <Image source={kitten1} />
        <Text
          style={{ color: 'blue' }}
          onPress={() => Linking.openURL('http://placekitten.com/attribution.html')}>
          Images from PlaceKitten
        </Text>
      </View>
    );
  }
}


module.exports.kittenDemo = kittenDemo;
