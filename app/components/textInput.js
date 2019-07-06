
import React, {Component} from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

class TextField extends Component {
 render() {
   return (
     <View style={styles.Container}>
        <TextInput style={{height: 40}}
          textAlign={'center'}
          style={styles.TextField}
          placeholder="Enter the stock price"
          value={this.props.data ? this.props.data.toString() : null}
          onChangeText={(text) => this.setState({text})}/>
        <Button title='Save' onPress={() => this.props.saveStockValue(text)}/>
     </View>
   );
 }
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextField: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10
  }
});

export default TextField;
