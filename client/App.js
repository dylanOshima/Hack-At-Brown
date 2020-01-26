import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesome } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import CardScreen from './screens/CardScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Card: {screen: CardScreen},
}, {
  defaultNavigationOptions: {
    // headerStyle: {
    //   padding: 20,
    // },
    headerRight: () => (<TouchableOpacity
                        style={{marginHorizontal: 5}}
                        onPress={e => alert("Wassup bitch")}>
                        <FontAwesome name="user-circle-o" size={24} color="black" />
                      </TouchableOpacity>)
  }
});

const App = createAppContainer(MainNavigator);

export default App;