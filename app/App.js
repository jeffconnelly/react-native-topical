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
import WebView from './WebView';
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
    },
    WebView: {
      screen: WebView
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