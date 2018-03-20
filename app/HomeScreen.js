import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux'
import {increment, double} from '%actions'
import {store} from '%store'

export default class HomeScreen extends React.Component {

  render () {
    onButtonClick = function(event) {
      // this.props.navigation.navigate('Details');
      this.props.navigation.navigate('Details');
      console.log('Technology');
    }

    const {counterValue} = this.props
    return <View style={styles.container}>
        <Text style={styles.header}>Topical</Text>
        <Text style={styles.subHeader}>Breaking news on your favorite topics!</Text>
        <TouchableOpacity onPress={onButtonClick.bind(this)}>
        <Text style={styles.button}>Technology</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
        <Text style={styles.button}>Health</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
        <Text style={styles.button}>Sports</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}> 
        <Text style={styles.button}>Science</Text>
        </TouchableOpacity>
      </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  subHeader: {
    fontSize: 15,
    margin: 5
  },
  button: {
    backgroundColor: '#00755e',
    padding: 15,
    margin: 10,
    borderRadius: 2,
    width: 150,
    textAlign: 'center',
    color: 'white',
    fontSize: 18
  },
});