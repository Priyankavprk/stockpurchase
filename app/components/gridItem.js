
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, FlatList, Text, View, Alert, Platform, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class gridItem extends Component {
  static propTypes = {
    item: PropTypes.object
  }

  render() {
    return (
      <View style={styles.GridViewBlockStyle}>
        <Text style={styles.GridViewInsideTextItemStyle}> {this.props.item.key} </Text>
        <TouchableOpacity style={styles.GridViewOptions} onPress={() => this.props.navigation.navigate('ScreenTwo', {data: this.props.item})}>
          <Text style={{color: '#fff'}}> {this.props.item.stockPrice ? 'Delete' : 'Add'} </Text>
        </TouchableOpacity>
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
   fontSize: 30,
   fontWeight: 'bold',
   justifyContent: 'center',
 },
 GridViewOptions: {
   justifyContent: 'flex-end',
   alignSelf: 'flex-end',
 }
});

export default gridItem;
