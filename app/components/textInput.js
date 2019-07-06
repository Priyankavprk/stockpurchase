
import React, {Component} from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

class ScreenTwo extends Component {
 render() {
   return (
     <View style={styles.Container}>
        <TextInput style={{height: 40}}
          placeholder="Enter the stock price"
          onChangeText={(text) => this.setState({text})}/>
        <Button title='Save'/>
     </View>
   );
 }
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default ScreenTwo;
