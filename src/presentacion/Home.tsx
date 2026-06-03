import { Text, StyleSheet, SafeAreaView, ScrollView, Image, View, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { useAppContext } from '../../App';


const style = StyleSheet.create({
    container: { flex:1},
    title: { fontSize: 30, alignContent:'center' }
})


export default function Home({navigation}){
  const { user, setUser } = useAppContext();

  useEffect(() => {
    const unsubscribe = () => {
      if (user) {
        navigation.replace('login');
      }
    };
    return unsubscribe;
  }, []);

    return (
      <View style={style.container}>
          <ScrollView>
              <View>
                  <TouchableOpacity onPress={() => navigation.navigate('Character')}>
                      <View style={styles.card}>
                          <Image 
                              source={{
                              uri: "https://th.bing.com/th/id/OIP.vpeZ7TMVzpaEs0oISmagGAHaHa?rs=1&pid=ImgDetMain"
                              }}
                              style={styles.image}
                          />
                          <View>
                              <Text style={styles.title}>Character</Text>
                          </View>
                      </View>
                  </TouchableOpacity>
              </View>
  
              <View>
                  <TouchableOpacity onPress={() => navigation.navigate('Episode')}>
                      <View style={styles.card}>
                          <Image source={{uri: "https://th.bing.com/th/id/OIP.JLa6PUrs3cpXmoCViUwDaAHaHa?rs=1&pid=ImgDetMain"}} style={styles.image}/>
                          <View>
                              <Text style={styles.title}>Episodes</Text>
                          </View>
                      </View>
                  </TouchableOpacity>
              </View>
  
              <View>
                  <TouchableOpacity onPress={() => navigation.navigate('Location')}>
                      <View style={styles.card}>
                          <Image 
                              source={{
                              uri: "https://th.bing.com/th/id/OIP.8tliwfZeGo5KmLFOGApKmAHaIi?rs=1&pid=ImgDetMain"
                              }}
                              style={styles.image}
                          />
                          <View>
                              <Text style={styles.title}>Locations</Text>
                          </View>
                      </View>
                  </TouchableOpacity>
              </View>
          </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      padding: 15,
      margin: 10,
      borderRadius: 8,
      elevation: 5, // Sombra en Android
      shadowOpacity: 0.2,
      shadowRadius: 4,
      flexDirection: 'row',
      justifyContent: 'space-between'
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
    }
  });