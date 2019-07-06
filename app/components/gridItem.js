
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
       <View style={styles.GridMainContent}>
        <Text style={styles.GridViewInsideTextItemStyle}> {this.props.item.key} </Text>
        <Text style={styles.GridPrice}> {this.props.item.stockPrice ? this.props.item.stockPrice : ''} </Text>
       </View>
        <TouchableOpacity style={styles.GridViewOptions} onPress={() => this.props.navigation.navigate('ScreenTwo', {data: this.props.item})}>
          <Text style={{color: '#fff'}}> {this.props.item.stockPrice ? 'Delete' : ''} </Text>
          <Text style={{color: '#fff'}}> {this.props.item.stockPrice ? 'Update' : 'Add'} </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
GridMainContent: {
  flexDirection: 'column',
},
GridViewBlockStyle: {
  justifyContent: 'center',
  flex:1,
  alignItems: 'center',
  height: 110,
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
   flexDirection: 'row',
 },
 GridPrice: {
   fontSize: 20,
   color: '#fff',
   fontWeight: 'bold',
   textAlign: 'center'
 }
});

export default gridItem;
