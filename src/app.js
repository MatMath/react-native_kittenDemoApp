/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Linking, Image, Slider } from 'react-native';

// local Code
import { styles } from './styles';

// Images list
const img0 = require('./img/kitten_0.png');
const img1 = require('./img/kitten_1.png');
const img2 = require('./img/kitten_2.png');
const img3 = require('./img/kitten_3.png');
const img4 = require('./img/kitten_4.png');

const kittenList = [img0, img1, img2, img3, img4];
const wtfJs = () => (0.1 + 0.2);

class kittenDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Welcome to the Kitten App!',
      displayKitten: 0,
      wftjs: wtfJs(),
    };
    this.changeKitten = this.changeKitten.bind(this);
  }
  changeKitten(nbr) {
    this.setState({ displayKitten: nbr });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Text style={styles.welcome}>
            {this.state.title}
          </Text>
          <Text>{this.state.wftjs}</Text>
        </View>
        <View style={styles.coreSection}>
          <Slider
            minimumValue={0}
            maximumValue={4}
            step={1}
            value={this.state.displayKitten}
            onValueChange={this.changeKitten}
            style={{ width: 200 }}
          />
          <Image source={kittenList[this.state.displayKitten]} />
        </View>
        <View style={styles.bottomSection}>
          <Text
            style={{ color: 'blue' }}
            onPress={() => Linking.openURL('http://placekitten.com/attribution.html')}
          >
            Images from PlaceKitten
          </Text>
        </View>
      </View>
    );
  }
}

module.exports.kittenDemo = kittenDemo;
