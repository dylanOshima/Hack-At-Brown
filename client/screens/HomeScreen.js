import React from 'react';
import {Text, View, ActivityIndicator, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

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
      categories: ["+"]
    }
  }
  
  static navigationOptions = {
    title: 'Home'
  };

  componentDidMount() {
    return fetch('http://e8b1e947.ngrok.io/study')
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
              onPress={() => {
                if(item !== '+')
                  navigate('Card', { item });
                else {
                  navigate('AddSet');
                }
              }}>
              <Item title={item} />
            </TouchableOpacity>)}
          keyExtractor={(_, index) => ''+index}
        />
      </SafeAreaView>
    );
  }

}