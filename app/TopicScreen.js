import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux'
import {store} from '%store'



export class TopicScreen extends React.Component {
  componentDidMount() {
    // console.log('mounted!');
    console.log(this.props.articles);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}> 
        <Text>Go Back</Text>
        </TouchableOpacity>
        <Text></Text>
      </View>
    );
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

const mapStateToProps = state => ({
  articles: state.articles,
});

export default connect(mapStateToProps)(TopicScreen);
