import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { RandMortyR } from '../../core/domain/repository/Get.repository';

export const RickAndMortyEpisodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const rickAndMortyService = new RandMortyR();

  const loadEpisodes = async () => {
    try {
      const data = await rickAndMortyService.REpisode();
      setEpisodes(data.results);
    } catch (err) {
      setError('Error loading episodes');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEpisodes();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      {episodes.map((i) => (
        <TouchableOpacity key={i.id}>
          <View style={styles.card}>
            <Text style={styles.title}>{i.name}</Text>
            <Text>Creado: {i.created}</Text>
            <Text>Episode: {i.episode}</Text>
            <Text>Fecha: {i.air_date}</Text>
          </View>
        </TouchableOpacity>
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