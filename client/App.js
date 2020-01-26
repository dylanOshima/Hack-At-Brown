import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createAppContainer, NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesome } from '@expo/vector-icons';

import ProfileScreen from './screens/ProfileScreen.js';
import AddSetScreen from './screens/AddSetScreen.js';
import HomeScreen from './screens/HomeScreen';
import CardScreen from './screens/CardScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Card: {screen: CardScreen},
  AddSet: {screen: AddSetScreen},
  ProfileScreen: {screen: ProfileScreen}
}, {
  defaultNavigationOptions: {
    headerRight: () => (<TouchableOpacity
                        style={{marginRight: 10}}
                        onPress={_ => console.log(NavigationActions.navigate)}> 
                        <FontAwesome name="user-circle-o" size={24} color="black" />
                      </TouchableOpacity>)
  }
});

const App = createAppContainer(MainNavigator);

export default App;