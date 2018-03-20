import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux'
import {fetchTopicNews} from '%actions'
import {store} from '%store'

export class HomeScreen extends React.Component {

  render () {
    onButtonClickTech = function(event) {
      this.props.navigation.navigate('Details');
      this.props.fetchTopicNews('technology');
    }

    onButtonClickHealth = function(event) {
      this.props.navigation.navigate('Details');
      this.props.fetchTopicNews('health');
    }

    onButtonClickSports = function(event) {
      this.props.navigation.navigate('Details');
      console.log('sports');
    }

    onButtonClickScience = function(event) {
      this.props.navigation.navigate('Details');
      console.log('science');
    }

    const {counterValue} = this.props
    return <View style={styles.container}>
        <Text style={styles.header}>Topical</Text>
        <Text style={styles.subHeader}>Breaking news on your favorite topics!</Text>
        <TouchableOpacity onPress={onButtonClickTech.bind(this)}>
        <Text style={styles.button}>Technology</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onButtonClickHealth.bind(this)}>
        <Text style={styles.button}>Health</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onButtonClickSports.bind(this)}>
        <Text style={styles.button}>Sports</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onButtonClickScience.bind(this)}> 
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

const mapDispatchToProps = {
  fetchTopicNews
}

export default connect(null, mapDispatchToProps)(HomeScreen)
