
import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { getMaxProfit } from '../modules';

class ProfitView extends Component {
  componentDidMount() {
    if (this.props.stockData.filter((data) => data.price !== 0).map((d) => d.price).length > 1) {
      getMaxProfit(this.props.stockData.filter((data) => data.price !== 0).map((d) => d.price))
    }
  }

 render() {
   let data = getMaxProfit(this.props.stockData.filter((data) => data.price !== 0).map((d) => d.price))
   let stockByDate = this.props.stockData.filter((data) => data.price !== 0)
   return (
    <View style={styles.Container}>
      {data[0] &&
        <View>
         <Text style={styles.TextValue}> {data[0] * 10} </Text>
         <Text style={styles.TextValue}>Buy date: {stockByDate[data[1][0]].date} </Text>
         <Text style={styles.TextValue}>Sell date: {stockByDate[data[1][1]].date} </Text>
        </View>
      }
    </View>
   );
 }
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BCD4',
    alignItems: 'stretch',
    height: 100,
    margin: 20,
    borderRadius: 20,
    flexDirection: 'column'
  },
  TextValue: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  }

});

const mapDispatchToProps = dispatch => {
  return {

  }
}


const mapStateToProps = state => ({
  stockData: state.stockData
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfitView);
