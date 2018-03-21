/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import HomeScreen from './HomeScreen';
import TopicScreen from './TopicScreen';
import ArticleScreen from './ArticleScreen';
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

const RootStack = StackNavigator(  
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: TopicScreen,
    },
    Article: {
      screen: ArticleScreen
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export class App extends React.Component {
  render() {
    return <RootStack />;
  }
}