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
    let topicArray = ['Technology', 'Health', 'Sports', 'Science', 'Business', 'Politics'];
    let newTopicArray = topicArray.map((topic, index) => <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate({
      routeName: 'Details',
      params: {topic}
        })}>
      <Text style ={styles.button}>{topic}</Text>
      </TouchableOpacity>
    ); 

    const {counterValue} = this.props
    return <View style={styles.container}>
        <Text style={styles.header}>Topical</Text>
        <Text style={styles.subHeader}>Breaking news on your favorite topics!</Text>
        {newTopicArray}
      </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginBottom: 50
  },
  header: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  subHeader: {
    fontSize: 15,
    margin: 5,
  },
  button: {
    padding: 15,
    margin: 10,
    backgroundColor: '#64c5a5',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: 150,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    overflow: 'hidden'
  },
});

const mapDispatchToProps = {
  fetchTopicNews
}

export default connect(null, mapDispatchToProps)(HomeScreen)