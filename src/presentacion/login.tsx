import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "@firebase/auth";
import { initializeApp } from "@firebase/app";
import { useAppContext } from '../../App';

const firebaseConfig = {
  apiKey: "AIzaSyBS0eagyFyDELEjGUpipcsW5rZjT195Mxo",
  authDomain: "aplicaciones-web-progres.firebaseapp.com",
  projectId: "aplicaciones-web-progres",
  storageBucket: "aplicaciones-web-progres.firebasestorage.app",
  messagingSenderId: "377789109711",
  appId: "1:377789109711:web:b22d0b7c50b53fef1e6eba"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const LoginScreen = ({ navigation }) => {
  const { setUser } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        navigation.replace('Home');
      }
    });
    return unsubscribe;
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      setMessage("Por favor, ingresa tu correo y contraseña.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setUser(auth.currentUser);
      navigation.replace('Home');
    } catch (error) {
      console.error("Login failed: ", error.message);
      if (error.code === 'auth/invalid-email' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        setMessage("Credenciales inválidas. Verifica tu correo y contraseña.");
      } else {
        setMessage("Ocurrió un error al intentar iniciar sesión.");
      }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.fullScreen} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.gifBackground}>
        <Image source={require('./assets/rickandmorty.gif')} style={styles.gifImage} resizeMode="cover" />
      </View>

      <View style={styles.overlayContainer}>
        <Text style={styles.title}>ACCESS POINT</Text>

        <TextInput placeholder="Correo" placeholderTextColor="#00FFFF80" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" />
        <TextInput placeholder="Contraseña" placeholderTextColor="#00FFFF80" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>INICIAR SECUENCIA</Text>
        </TouchableOpacity>

        {message ? <Text style={styles.errorText}>{message}</Text> : null}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        backgroundColor: '#0A0A1C', // Fondo de respaldo si el GIF no carga o para un pequeño margen
    },
    gifBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1, // Asegura que el GIF esté detrás del contenido
    },
    gifImage: {
        width: '100%',
        height: '100%',
    },
    overlayContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 30,
        backgroundColor: 'rgba(0,0,0,0.6)', // Superposición oscura para que el texto sea legible
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#00FFFF',
        textAlign: 'center',
        marginBottom: 50,
        textShadowColor: '#00FFFF',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
        letterSpacing: 3,
    },
    inputContainer: {
        marginBottom: 30,
    },
    input: {
        height: 50,
        backgroundColor: '#1E1E3F',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        color: '#FFFFFF',
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#00FFFF30',
        shadowColor: '#00FFFF',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    },
    button: {
        backgroundColor: '#00FFFF',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
        shadowColor: '#00FFFF',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 10,
    },
    buttonText: {
        color: '#0A0A1C',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    errorText: {
        color: '#FF4500',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 14,
        fontWeight: '500',
        textShadowColor: '#FF4500',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 5,
    },
});

export default LoginScreen;