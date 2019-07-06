import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './views/homeScreen';
import ScreenTwo from './views/screenTwo';

const App = createStackNavigator({
    HomeScreen: { screen: HomeScreen },
    ScreenTwo: { screen: ScreenTwo},
},
{
    initialRouteName: "HomeScreen"
})

export default App;
