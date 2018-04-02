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
    let publishDate = article.publishedAt.slice(0, 10);
    return (
      <View style={styles.container}>
      <Text style={styles.newsHeader}>{article.title}</Text>
      <Image
      style={styles.imageStyle}
      source={{uri: `${article.urlToImage}`}}
      resizeMode='stretch'
      />
      <Text style={styles.newsAuthor}  onPress={() => this.props.navigation.navigate({
         routeName: 'WebView',
          params: op
          })}>{article.source.name}</Text>
      <Text style={styles.publishText}>{article.author} {publishDate}</Text>
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
  },
  newsHeader: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center', 
    fontWeight: 'bold',
    marginLeft: 15,
    marginRight: 15,
    fontFamily: 'AvenirNext-Bold'
  },
  newsAuthor: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    color: 'rgb(0, 122, 255)',
    fontFamily: 'Avenir'
  },
  newsText: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    fontFamily: 'Avenir'
  },
  publishText:{
    marginLeft: 15,
    marginRight: 15,
    fontFamily: 'Avenir',
    fontStyle: 'italic',
  },
  imageStyle: {
    width: 340,
    alignSelf: 'center',
    height: 250,
    marginBottom: 5,
    borderRadius: 5
  }
});

