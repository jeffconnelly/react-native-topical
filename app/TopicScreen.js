import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import { connect } from 'react-redux'
import {store} from '%store'



export class TopicScreen extends React.Component {
  componentDidUpdate() {
    console.log('mount info is:', this.props.articles);
}

  render() {
    const articles = this.props.articles.map((article, index) => (
      <View key={index}>
      <Text>{article.title}</Text>
      <Image
        style={{width: 50, height: 50}}
        source={{uri: `${article.urlToImage}`}}
      />
      </View>
  ));
   
    console.log('render info is:', this.props.articles);
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}> 
        <Text>Go Back</Text>
        </TouchableOpacity>
        {articles}
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
