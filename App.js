// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/presentacion/login';
import Home from './src/presentacion/Home';
import LogScreen from './src/presentacion/showUser';
import CharaterRandM from './src/presentacion/Character';
import EpisodeRandM from './src/presentacion/Episodeo';
import LocationRandM from './src/presentacion/Locations';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React, { createContext, useState, useContext } from 'react';

const Stack = createStackNavigator();

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

const ProfileButton = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.push("showUser")}
    style={styles.profileButton}>
    <Text style={styles.profileButtonText}>Usuario</Text>
  </TouchableOpacity>
);

const App = () => {
  const screenOptions = {
    headerStyle: {
      backgroundColor: '#0A0A1C',
      borderBottomWidth: 1,
      borderBottomColor: '#00FFFF',
      shadowColor: '#00FFFF',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 10,
      elevation: 10,
    },
    headerTintColor: '#00FFFF',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#00FFFF',
      letterSpacing: 1.5,
      textShadowColor: '#00FFFF',
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 8,
    },
    headerTitleAlign: 'center',
  };

  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              title: "Home",
              headerRight: () => <ProfileButton navigation={navigation} />,
            })}
          />
          <Stack.Screen name="showUser" component={LogScreen} options={{ title: "USER" }} />
          <Stack.Screen name="Character" component={CharaterRandM} options={{ title: "R&M CHARACTER" }} />
          <Stack.Screen name="Episode" component={EpisodeRandM} options={{ title: "R&M EPISODE" }} />
          <Stack.Screen name="Location" component={LocationRandM} options={{ title: "R&M LOCATION" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

const styles = StyleSheet.create({
  profileButton: {
    marginRight: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00FFFF',
    backgroundColor: 'transparent',
    shadowColor: '#00FFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  profileButtonText: {
    color: '#00FFFF',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 0.5,
  },
});

export default App;
