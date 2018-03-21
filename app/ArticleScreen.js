import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  FlatList,
  Linking
} from 'react-native';
import { connect } from 'react-redux'
import {store} from '%store'
import {stackNavigator} from 'react-navigation';


export default class ArticleScreen extends React.Component {

  componentDidMount() {
    console.log(this.props.navigation.state.params.item);
  }


  render() {
    let article = this.props.navigation.state.params.item;
    console.log(article);
    return (
      <View style={styles.container}>
      <Text style={styles.newsHeader}>{article.title}</Text>
      <Image
      style={styles.imageStyle}
      source={{uri: `${article.urlToImage}`}}
      resizeMode='stretch'
      />
      <Text style={styles.newsAuthor} onPress={() => Linking.openURL(`${article.url}`)}>{article.source.name}</Text>
      <Text style={styles.newsText}>{article.description}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  articleContainer: {
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newsHeader: {
    fontSize: 18,
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center', 
    fontWeight: 'bold'
  },
  newsAuthor: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
    color: 'rgb(0, 122, 255)'
  },
  newsText: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 10,
    fontStyle: 'italic'
  },
  imageStyle: {
    // flex: 1,
    width: 350,
    alignSelf: 'center',
    height: 250,
  }
});

