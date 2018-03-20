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
    const {counterValue} = this.props
    return <View style={styles.container}>
        <Text style={styles.counterValue}>Topical</Text>
        <Text style={styles.subHeader}>Breaking news on your favorite topics!</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
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
  counterValue: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: '#00755e',
    padding: 15,
    margin: 10,
    borderRadius: 2,
    width: 150,
    textAlign: 'center',
    color: 'white'
  },
  subHeader: {
    fontSize: 15,
    margin: 5
  }
});