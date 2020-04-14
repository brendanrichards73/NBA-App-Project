import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';

import { connect } from 'react-redux';
import { getGames } from '../../store/actions/games_actions';
import Moment from 'moment';


class Games extends Component{

  componentDidMount(){
    this.props.dispatch(getGames())
  }

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

function mapStateToProps(state){
  console.log(state)
  return {
    Games:state.Games
  }
}

export default connect(mapStateToProps)(Games);