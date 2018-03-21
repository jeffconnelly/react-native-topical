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
import {stackNavigator} from 'react-navigation';

export class TopicScreen extends React.Component {
  static navigationOptions = ({navigation}) =>
  {
    const { params } = navigation.state;
  return {
    title: params.topic
  }
};

  componentDidMount() {
    this.props.fetchTopicNews(this.props.navigation.state.params.topic);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
      <FlatList
      data={this.props.articles}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.articleContainer}  onPress={() => this.props.navigation.navigate({
          routeName: 'Article',
          params: {item}
            })}>
        <Image
          style={styles.imageStyle}
          source={{uri: `${item.urlToImage}`}}
          resizeMode='stretch'
        />
        <Text style={styles.newsline}>{item.title}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index}
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
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 18,
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'center', 
  },
  imageStyle: {
    width: 375,
    height: 160,
  }
});

const mapDispatchToProps = {
  fetchTopicNews
}

const mapStateToProps = state => ({
  articles: state.articles,
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicScreen);