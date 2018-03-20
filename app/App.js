/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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


type Props = {};

class AppComponent extends Component<Props> {
  render () {
    const {counterValue} = this.props
    return <View style={styles.container}>
        <Text style={styles.counterValue}>Topical</Text>
        <Text style={styles.subHeader}>The most current news on your favorite topics</Text>
        <Text style={styles.button}>Technology</Text>
        <Text style={styles.button}>Health</Text>
        <Text style={styles.button}>Sports</Text>
        <Text style={styles.button}>Science</Text>

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
    backgroundColor: '#08FF88',
    padding: 15,
    margin: 10,
    borderRadius: 2,
    width: 150,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 15,
    margin: 5
  }
});

const mapDispatchToProps = {
  increment,
  double,
}

const mapStateToProps = state => ({
  counterValue: state.counter.value,
})

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent)


// <Text style={styles.counterValue}>
//           Counter value is {counterValue}
//         </Text>
//         <TouchableOpacity onPress={() => this.props.increment()}>
//           <Text style={styles.button}>Increment</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => this.props.double()}>
//           <Text style={styles.button}>Double</Text>
//         </TouchableOpacity>