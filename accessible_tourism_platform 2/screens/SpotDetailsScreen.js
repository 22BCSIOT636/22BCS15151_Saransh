// screens/SpotDetailsScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function SpotDetailsScreen({ route }) {
  const { spot } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{spot.name}</Text>
      <Text style={styles.info}>Location: {spot.location}</Text>
      <Text style={styles.info}>Accessibility: {spot.accessibility}</Text>
      <Text style={styles.info}>Description: {spot.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
});