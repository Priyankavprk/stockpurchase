
import React, {Component} from 'react';
import { StyleSheet, ScrollView, View, Text, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import GridView from '../components/gridView';
import Graph from '../components/graph';
import { getStockData } from '../actions';

class HomeScreen extends Component {
 static navigationOptions = {
      title: "Stock Overview"
 }

 componentDidMount() {
   this.props.getStockData();
 }

 render() {
   if (this.props.stockData.length === 0) {
     return (
       <View style={styles.Spinner}>
         <ActivityIndicator size="large" color="#00BCD4" />
       </View>
     )
   }
   return (
      <ScrollView>
        <GridView navigation={this.props.navigation} />
        <Graph />
      </ScrollView>
   );
 }
};

const styles = StyleSheet.create({
Spinner: {
  flex: 1,
  justifyContent: 'center',
  alignSelf: 'center'
}
});

const mapDispatchToProps = {
  getStockData
}


const mapStateToProps = state => ({
  stockData: state.stockData
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
