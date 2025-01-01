// screens/AddSpotScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

export function AddSpotScreen({ navigation }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [accessibility, setAccessibility] = useState('');
  const [description, setDescription] = useState('');

  const handleAddSpot = async () => {
    if (!name || !location || !accessibility || !description) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    try {
      await addDoc(collection(db, 'spots'), {
        name,
        location,
        accessibility,
        description,
      });
      Alert.alert('Success', 'Spot added successfully');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to add spot');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Accessibility Features"
        value={accessibility}
        onChangeText={setAccessibility}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button title="Add Spot" onPress={handleAddSpot} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
});