import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getAuth, signOut } from "@firebase/auth";
import { useAppContext } from '../../App';

const LogScreen = ({ navigation }) => {
  const { user, setUser } = useAppContext();
  const auth = getAuth();

  const closeLogin = async () => {
    try {
      await signOut(auth);
      alert("Sesión cerrada");
      setUser(null);
      alert("Sesión cerrada");
      navigation.replace("Login");
    } catch (error) {
      console.error("Error al cerrar sesión: ", error);
    }
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Cargando datos del usuario...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Usuario</Text>
        <Text>Correo: {user.email}</Text>
        <Text>ID: {user.uid}</Text>
        <Text>Proveedor: {user.providerId}</Text>
      </View>
      <Button title="Logout" onPress={closeLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default LogScreen;