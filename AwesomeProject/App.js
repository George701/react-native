import React, {Component} from 'react';
import { ActivityIndicator, ListView, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoading:true
        }
    }
    componentDidMount(){
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response)=>response.json())
            .then((resonseJson)=>{
            let ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>})
            })
    }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
          <View style={{width: 50, height: 50, backgroundColor:'#6cb3ff'}}/>
          <View style={{width: 100, height: 100, backgroundColor:'#5497ff'}}/>
          <View style={{width: 150, height: 150, backgroundColor:'#2c5eff'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
