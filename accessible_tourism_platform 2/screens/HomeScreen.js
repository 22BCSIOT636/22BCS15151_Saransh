// screens/HomeScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export function HomeScreen({ navigation }) {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const fetchSpots = async () => {
      const spotsCollection = collection(db, 'spots');
      const spotsSnapshot = await getDocs(spotsCollection);
      const spotsList = spotsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSpots(spotsList);
    };

    fetchSpots();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={spots}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', { spot: item })}>
            <View style={styles.spotItem}>
              <Text style={styles.spotName}>{item.name}</Text>
              <Text>{item.location}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddSpot')}>
        <Text style={styles.addButtonText}>+ Add Spot</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  spotItem: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  spotName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});