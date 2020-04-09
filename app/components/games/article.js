import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


class GamesArticleComponent extends Component{
  render() {
    
    return (
      <View style={styles.container}>
        <Text>Games Articles Component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});

export default GamesArticleComponent;