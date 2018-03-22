import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground
} from 'react-native';
import { connect } from 'react-redux'
import {fetchTopicNews} from '%actions'
import {store} from '%store'
import {stackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export class HomeScreen extends React.Component {

static navigationOptions = { title: 'Home', header: null };

  render () {
    let topicArray = ['Technology', 'Health', 'Sports', 'Science', 'Politics', 'Entertainment', 'Politics', 'General'];
    let newTopicArray = topicArray.map((topic, index) => <TouchableOpacity style={styles.topicWrapper} key={index} onPress={() => this.props.navigation.navigate({
      routeName: 'Details',
      params: {topic}
        })}>
      <Text style ={styles.button}>{topic}</Text>
      </TouchableOpacity>
    ); 

    const myIcon = (<Icon name="beach" size={40} color='#64c5a5' />);

    const {counterValue} = this.props
    return (
      <View style={styles.container}>
      <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1491378630646-3440efa57c3b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a44ab4cbc7f5ff994d4f3ff93923973a&auto=format&fit=crop&w=500&q=60'}} style={styles.backgroundImage}>
      <View style={styles.overlay}/>
      <Text style={styles.header}>Topical</Text>
      <Text style={styles.subHeader}>Breaking news on your favorite topics!</Text>
      <Text style={styles.buttonWrapper}>
      {newTopicArray}
      </Text>
      {myIcon}
      </ImageBackground>
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
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    width: null,
    height: null,
    },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    opacity: 0.7
    },
  header: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: '300',
    fontFamily: 'Noteworthy'
  },
  subHeader: {
    fontSize: 20,
    marginBottom: 20,
    marginTop: 4,
    fontFamily: 'Avenir-Light'
  },
  button: {
    padding: 15,
    margin: 10,
    marginTop: 20,
    backgroundColor: '#64c5a5',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
    width: 150,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    overflow: 'hidden',
  },
  buttonWrapper: {
    marginBottom: 35
  },
  topicWrapper: {
    marginTop: 12
  }
});

const mapDispatchToProps = {
  fetchTopicNews
}

export default connect(null, mapDispatchToProps)(HomeScreen)