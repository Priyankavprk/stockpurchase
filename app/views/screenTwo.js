
import React, {Component} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import TextField from '../components/textInput';

class ScreenTwo extends Component {
 static navigationOptions = {
     title: "Stock Price",
 }
 render() {
   return (
     <View style={styles.container}>
        <TextField data={this.props.navigation.state.params.data.stockPrice}/>
     </View>
   );
 }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ScreenTwo;
