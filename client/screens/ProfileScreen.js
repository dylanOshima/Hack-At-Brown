import React from 'react';
import {Text, View, Image, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { URL } from '../api';

import { AntDesign } from '@expo/vector-icons';

import styles from '../styles';

const DYLAN_PROFILE = {
  name: "Dylan O.",
  subjects: {
    'computer science': "4 hours", 
    'networking': "12 hours", 
    'maths': "10 hours"
  },

}

export default class ProfileScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      categories: []
    }
  }
  
  static navigationOptions = {
    title: 'Profile'
  };

  render() {
    return (
      <View style={styles.profile}>
        <View style={styles.profilePic}>
          <Image source={'../assets/profile.jpg'} />
        </View>
      </View>
    );
  }

}