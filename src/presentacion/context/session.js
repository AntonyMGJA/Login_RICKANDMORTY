// import React, { createContext, useState, useContext, useEffect } from 'react';
// import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from '@firebase/auth';
// import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: "AIzaSyD7IOE-eMlfg1nEWlcm9eU5Es6HmY_3vUU",
//   authDomain: "react-native-19311.firebaseapp.com",
//   databaseURL: "https://react-native-19311-default-rtdb.firebaseio.com",
//   projectId: "react-native-19311",
//   storageBucket: "react-native-19311.appspot.com",
//   messagingSenderId: "174329402946",
//   appId: "1:174329402946:web:e129cb8e7e83e5649d3fdb"
// };

// // Initialize Firebase App
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// const SessionContext = createContext();

// export const useSession = () => useContext(SessionContext);

// const SessionProvider = ({ children, { navigation } }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser || null);
//     });
//     return () => unsubscribe();
//   }, []);

//   const login = async (email, password) => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//     } catch (error) {
//       console.error("Login failed: ", error.message);
//     }
//   };

//   const logout = async () => {
//     try {
//       await signOut(auth);
//     } catch (error) {
//       console.error("Logout failed: ", error.message);
//     }
//   };

//   return (
//     <SessionContext.Provider value={{ user, login, logout }}>
//       {children}
//     </SessionContext.Provider>
//   );
// };

// export default SessionProvider;
