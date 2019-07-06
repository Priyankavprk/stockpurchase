
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, FlatList, Text, View, Alert, Platform } from 'react-native';

import GridItem from './gridItem';

class gridView extends Component {
  constructor(props) {
    super(props);
      this.state = {
    items: [
     {key: 'One'},
     {key: 'Two'},
     {key: 'Three'},
     {key: 'Four'},
     {key: 'Five'},
     {key: 'Six'},
     {key: 'Seven'},
     {key: 'Eight'},
     {key: 'Nine'},
     {key: 'Ten'},
     {key: 'Eleven'},
     {key: 'Twelve'},
     {key: 'Thirteen'},
     {key: 'Fourteen'},
     {key: 'Fifteen'},
     {key: 'Sixteen'},
     {key: 'Seventeen'},
     {key: 'Eighteen'},
     {key: 'Nineteen'},
     {key: 'Twenty'}
   ]}
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.state.items}
          renderItem={({item}) => <GridItem item={item}/>}
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
},
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

export default gridView;
