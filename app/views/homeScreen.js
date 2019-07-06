
import React, {Component} from 'react';
import { StyleSheet, ScrollView, View, Text, Button } from 'react-native';

import GridView from '../components/gridView';

class HomeScreen extends Component {
 static navigationOptions = {
      title: "Stock Overview"
 }
 render() {
   return (
      <View>
        <GridView />
        <Text>hai</Text>
        <Button title='Click me' onPress={() => this.props.navigation.navigate('ScreenTwo')}/>
      </View>
   );
 }
};

const styles = StyleSheet.create({

});

export default HomeScreen;
