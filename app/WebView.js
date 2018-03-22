import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class MyWeb extends Component {
  render() {
    let url = this.props.navigation.state.params;
    console.log(url);
    return (
      <WebView
        source={{uri: url}}
        style={{marginTop: 20}}
      />
    );
  }
}