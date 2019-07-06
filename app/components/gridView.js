
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, FlatList, Text, View, Alert, Platform } from 'react-native';

class gridView extends Component {
  constructor(props) {
    super(props) {
      this.state = { items: [
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
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.state.items}
          renderItem={({item}) =><View style={styles.GridViewBlockStyle}>

            <Text style={styles.GridViewInsideTextItemStyle} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>

            </View>}
          numColumns={3}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({

});
