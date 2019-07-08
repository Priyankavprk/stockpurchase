
import React, {Component} from 'react';
import { StyleSheet, ScrollView, View, Text, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import GridView from '../components/gridView';
import Graph from '../components/graph';
import ProfitView from '../components/profitView';
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
        {this.props.stockData.filter((data) => data.price !== 0).map((d) => d.price).length > 1 &&
           <ProfitView />
        }
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

const mapDispatchToProps = dispatch => {
  return {
    getStockData: () => dispatch(getStockData())
  }
}


const mapStateToProps = state => ({
  stockData: state.stockData
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
