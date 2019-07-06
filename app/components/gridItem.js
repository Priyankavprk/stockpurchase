
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, FlatList, Text, View, Alert, Platform } from 'react-native';

class gridItem extends Component {
  render() {
    return (
      <View style={styles.GridViewBlockStyle}>
        <Text style={styles.GridViewInsideTextItemStyle}> {this.props.item.key} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
GridViewBlockStyle: {
  justifyContent: 'center',
  flex:1,
  alignItems: 'center',
  height: 100,
  margin: 5,
  backgroundColor: '#00BCD4'
},
GridViewInsideTextItemStyle: {
   color: '#fff',
   padding: 10,
   fontSize: 18,
   justifyContent: 'center',
 }
});

export default gridItem;
