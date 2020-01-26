import React from 'react';
import {Text, View, ActivityIndicator, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { URL } from '../api';

import { AntDesign } from '@expo/vector-icons';

import styles from '../styles';

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
  );
}

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      categories: []
    }
  }
  
  static navigationOptions = {
    title: 'Home',
    headerLeft: _ => (<TouchableOpacity
      style={{marginLeft: 10}}
      onPress={e => alert("In progress...")}>
      <AntDesign name="pluscircleo" size={24} color="black" />
    </TouchableOpacity>
    ),
  };

  componentDidMount() {
    return fetch(URL + '/study')
      .then(response => response.json())
      .then(resp_JSON => {
        this.setState({
          isLoading: false,
          categories: resp_JSON.concat(this.state.categories)
        });
      }).catch(err => console.log(err));
  }

  render() {
    const { navigate } = this.props.navigation; // To navigate to another page: onPress={() => navigate('Profile', {name: 'Jane'})}
    
    if(this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>    
      )
    }
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={{width: '100%'}}
          data={this.state.categories}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigate('Card', { item })}>
              <Item title={item} />
            </TouchableOpacity>)}
          keyExtractor={(_, index) => ''+index}
        />
      </SafeAreaView>
    );
  }

}