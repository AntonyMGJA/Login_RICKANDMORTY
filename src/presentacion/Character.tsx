import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { RickAndMortyCharacters } from './componen/carts'

export default function CharaterRandM() {
    return (
        // Usar SafeAreaView para manejar el área segura de la pantalla
      <ScrollView contentContainerStyle={styles.container}> 
        <RickAndMortyCharacters />
      </ScrollView>
    );
};
    
const styles = StyleSheet.create({
    container: {
        flex: 1, // Este es el estilo clave: asegura que el contenedor principal ocupe todo el espacio.
    },
    scrollViewContent: {
        flexGrow: 1, // Esto es esencial para que el ScrollView se desplace si el contenido es más largo que la pantalla.
    },
});