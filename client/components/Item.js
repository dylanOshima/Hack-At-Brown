import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

export default function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
  );
}