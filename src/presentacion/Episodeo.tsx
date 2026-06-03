import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
// import { RandMortyR } from "../core/domain/repository/Get.repository";
// import { useEffect } from "react";
import { RickAndMortyEpisodes } from './componen/carts_ep'


export default function EpisodeRandM(){
    return (
        <View style={styles.container}>
            <RickAndMortyEpisodes />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, // Ensures the parent View takes up all available space
    },
    scrollView: {
      flexGrow: 1, // Ensures the ScrollView can scroll when content overflows
    },
        scrollViewContent: {
        flexGrow: 1, // Esto es esencial para que el ScrollView se desplace si el contenido es más largo que la pantalla.
    },
  });