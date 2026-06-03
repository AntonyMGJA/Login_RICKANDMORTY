import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, FlatList } from 'react-native';
import { RandMortyR } from '../../core/domain/repository/Get.repository';

export const RickAndMortyCharacters = () => {
  const [characters, setCharacters] = useState([]); // Estado para almacenar los personajes

  const [loading, setLoading] = useState<boolean>(true);   // Estado para controlar el loading

  // Instancia del servicio
  const rickAndMortyService = new RandMortyR();

  // Función para obtener personajes utilizando el servicio
  const loadCharacters = async () => {
    try {
      const data = await rickAndMortyService.RCharacter(); // Llamada al servicio
      setCharacters(data.results); // Guardamos los personajes en el estado
      console.log(data.results)
    } catch (error) {
      console.error(error); // Manejo de errores
    } finally {
      setLoading(false); // Desactivamos el loading una vez terminada la carga
    }
  };

  // useEffect para cargar los personajes cuando el componente se monte
  useEffect(() => {
    loadCharacters();
  }, []);

  const renderCharacterItem = ({ item }) => (
        <View style={styles.card}>
            <Image 
                source={{ uri: item.image }}
                style={styles.image}
            />
            <Text style={styles.title}>{item.name}</Text>
            <View style={{ marginLeft: 120, marginTop: -80, top: -45 }}>
                <Text>Género - Status</Text>
                <Text>{item.gender} - {item.status}</Text>
                <Text>Especie: {item.species}</Text>
            </View>
        </View>
    );

    // if (loading) {
    //     return <ActivityIndicator size="large" color="#00ff00" />;
    // }

    return (
        // Usamos FlatList
        <FlatList
            data={characters}
            renderItem={renderCharacterItem}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.listContainer}
        />
    );

  // return (
  //         <View> 
  //           {characters.map((i) => (
  //               <View key={i.id} style={styles.card}>
  //                   <Image 
  //                       source={{ uri: i.image }}
  //                       style={styles.image}
  //                   />
  //                   <Text style={styles.title}>{i.name}</Text>
  //                   <View style={{ marginLeft: 120, marginTop: -80, top: -45 }}>
  //                       <Text>Género - Status</Text>
  //                       <Text>{i.gender} - {i.status}</Text>
  //                       <Text>Especie: {i.species}</Text>
  //               </View>
  //         </View>
  //       ))}
  //       </View>
  // );
};

// Estilos
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
  listContainer: {
        padding: 30, // Aplicamos el padding aquí en el contentContainerStyle
    }
});