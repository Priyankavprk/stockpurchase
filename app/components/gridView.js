
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, FlatList, Text, View, Alert, Platform } from 'react-native';
import { connect } from 'react-redux';

import GridItem from './gridItem';

class gridView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.props.items}
          renderItem={({item}) => <GridItem item={item} navigation={this.props.navigation}/>}
          numColumns={3}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  MainContainer :{
   justifyContent: 'center',
   margin: 10,
  }
});

const mapStateToProps = state => ({
  items: state.stockData
});

export default connect(mapStateToProps)(gridView);
