import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


class Games extends Component{
  render() {
    
    return (
      <View style={styles.container}>
        <Text>GAMES Screen</Text>
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

export default Games;