import React from 'react';
import { SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import Item from '../components/Item';
import Header from '../components/Header';
import styles from '../styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Bio',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Math',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'CompSci',
  },
];

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    const { navigate } = this.props.navigation; // To navigate to another page: onPress={() => navigate('Profile', {name: 'Jane'})}
    
    return (
      <SafeAreaView style={styles.container}>
        {/* <Header title={HomeScreen.navigationOptions.title} navigate={navigate} /> */}
        <FlatList
          style={{width: '100%'}}
          data={DATA}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigate('Card', {title: item.title})}>
              <Item title={item.title} />
            </TouchableOpacity>)}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }

}