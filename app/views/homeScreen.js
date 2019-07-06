
import React, {Component} from 'react';
import { StyleSheet, ScrollView, View, Text, Button } from 'react-native';

import GridView from '../components/gridView';

class HomeScreen extends Component {
 static navigationOptions = {
      title: "Stock Overview"
 }
 render() {
   return (
      <ScrollView>
        <GridView navigation={this.props.navigation}/>
        <Button title= 'go'onPress={() => this.props.navigation.navigate('ScreenTwo')} />
      </ScrollView>
   );
 }
};

const styles = StyleSheet.create({

});

export default HomeScreen;
