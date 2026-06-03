import { Text, StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
// import { RandMortyR } from "../core/domain/repository/Get.repository";
// import { useEffect } from "react";
import { RickAndMortyLocations } from './componen/carts_local'

const style = StyleSheet.create({
    container: { flex: 1}
})

export default function LocationRandM(){
    // const date = new RandMortyR();
    // useEffect(() => {        
    //      const load = async () => {
    //         try{
    //             const data = await date.RLocation();
    //             console.log(data)
    //         }catch(error){
    //             console.log(error)
    //         }
    //     };
    // }, []);
    return (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <RickAndMortyLocations />
          </ScrollView>
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
  });