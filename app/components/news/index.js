import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import { connect } from 'react-redux';
import { getNews } from '../../store/actions/news_actions';


class News extends Component{

  componentDidMount(){
    this.props.dispatch(getNews());
  }
  render() {
    
    return (
      <View style={styles.container}>
        <Text>Hello I am the News screen</Text>
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
    News: state.News
  }
}
export default connect(mapStateToProps)(News);
