import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        //flexDirection: row, column
        //justifyContent: flex-start, center, flex-end, space-around, and space-between
        //alignItems: flex-start, center, flex-end, and stretch
      <View style={{flex:1,justifyContent:'space-around',alignItems:'center', flexDirection:'row'}}>
          <View style={{width: 50, height:50, backgroundColor:'#7fffcf'}}/>
          <View style={{width: 50, height:50, backgroundColor:'#69ff9d'}}/>
          <View style={{width: 50, height:50, backgroundColor:'#43ff7a'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});
