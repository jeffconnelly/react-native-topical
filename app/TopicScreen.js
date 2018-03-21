import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  FlatList
} from 'react-native';
import { connect } from 'react-redux'
import {store} from '%store'
import {fetchTopicNews} from '%actions'


export class TopicScreen extends React.Component {
  componentDidMount() {
    // console.log('mount info is:', this.props.articles);
    this.props.fetchTopicNews(this.props.navigation.state.params.topic);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
      <FlatList
      data={this.props.articles}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.articleContainer}>
        <Image
          style={{width: 400, height: 150}}
          source={{uri: `${item.urlToImage}`}}
        />
        <Text style={styles.newsline}>{item.title}</Text>
        </TouchableOpacity>
      )}
      />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  articleContainer: {
    margin: 5
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
  newsline: {
    fontSize: 15,
    marginTop: 5,
  }
});


const mapDispatchToProps = {
  fetchTopicNews
}

const mapStateToProps = state => ({
  articles: state.articles,
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicScreen);
