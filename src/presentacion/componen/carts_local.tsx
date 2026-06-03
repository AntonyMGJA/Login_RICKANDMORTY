import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { RandMortyR } from '../../core/domain/repository/Get.repository';

export const RickAndMortyLocations = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const rickAndMortyService = new RandMortyR();

  const loadLocations = async () => {
    try {
      const data = await rickAndMortyService.RLocation();
      setLocations(data.results);
    } catch (err) {
      setError('Error loading locations');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLocations();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      {locations.map((i) => (
        <View key={i.id} style={styles.card}>
          <Text style={styles.title}>Lugar: {i.name}</Text>
          <Text>Dimensión: {i.dimension}</Text>
          <Text>Sitio: {i.type}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderRadius: 8,
    flexDirection:"column",
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 14,
    color: '#666',
  },
  image: {
    width: 100,
    height: 100,
  },
  scrollView: {
    flexGrow: 1, // Ensures the ScrollView can scroll when content overflows
  },
});