
import React, {Component} from 'react';
import { StyleSheet, ScrollView, View, Text, Button } from 'react-native';

class HomeScreen extends Component {
 render() {
   return (
      <View>
        <Button title='Click me' onPress={() => this.props.navigation.navigate('ScreenTwo')}/>
      </View>
   );
 }
};

const styles = StyleSheet.create({
  
});

export default HomeScreen;
