
import React, {Component} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class ScreenTwo extends Component {
 render() {
   return (
     <View style={styles.container}>
        <Text>Stock Price</Text>
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
