
import React, {Component} from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { updateData } from '../actions';

class TextField extends Component {
 render() {
   return (
     <View style={styles.Container}>
        <TextInput style={{height: 40}}
          textAlign={'center'}
          style={styles.TextField}
          placeholder="Enter the stock price"
          defaultValue={this.props.data.price ? this.props.data.price.toString() : null}
          onChangeText={(text) => this.setState({text})}/>
        <Button title='Save' onPress={() => this.props.updateData(this.props.data.id, parseInt(this.state.text))}/>
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
