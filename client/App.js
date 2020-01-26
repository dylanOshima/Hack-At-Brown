import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesome } from '@expo/vector-icons';

import AddSetScreen from './screens/AddSetScreen.js';
import HomeScreen from './screens/HomeScreen';
import CardScreen from './screens/CardScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Card: {screen: CardScreen},
  AddSet: {screen: AddSetScreen}
}, {
  defaultNavigationOptions: {

    headerRight: () => (<TouchableOpacity
                        style={{marginRight: 10}}
                        onPress={e => alert("Also in progress...")}>
                        <FontAwesome name="user-circle-o" size={24} color="black" />
                      </TouchableOpacity>)
  }
});

const App = createAppContainer(MainNavigator);

export default App;