
import React, {Component} from 'react';
import { StyleSheet, View, Text, Button, TextInput, Keyboard, Alert } from 'react-native';
import { connect } from 'react-redux';

import { updateData } from '../actions';

class TextField extends Component {
 constructor(props){
   super(props);
   this.state = {
     number: ''
   }
 }

validatePrice() {
  if (parseInt(this.state.number) > 0) {
    this.props.updateData(this.props.data.id, parseInt(this.state.number));
    Keyboard.dismiss()
  } else {
    Alert.alert('Stock value should not be negative');
  }
}

 render() {
   return (
     <View style={styles.Container}>
        <TextInput style={{height: 40}}
          textAlign={'center'}
          style={styles.TextField}
          placeholder="Enter the stock price"
          defaultValue={this.props.data.price ? this.props.data.price.toString() : null}
          onChangeText={(number) => this.setState({number})}/>
        <Button title='Save' onPress={() => this.validatePrice()}/>
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

const mapDispatchToProps = dispatch => {
  return {
    updateData: (id, price) => dispatch(updateData(id, price))
  }
}


const mapStateToProps = state => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TextField);
