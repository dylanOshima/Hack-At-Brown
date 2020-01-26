import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../styles';

// navigate allows you to navigate to another page
export default function Header({ title, navigate }) {
  // navigate('Profile', {name: 'Jane'}
  
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.header_profile}
        onPress={e => alert("Wassup bitch")}>
        <MaterialCommunityIcons name="sword-cross" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        style={styles.header_profile}
        onPress={e => alert("Wassup bitch")}>
        <FontAwesome name="user-circle-o" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}