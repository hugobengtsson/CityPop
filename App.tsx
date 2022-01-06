import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; // Kan eventuellt tas bort? 

import WelcomeScreen from './app/screens/WelcomeScreen';
import SearchByCity from './app/screens/SearchByCity';

export default function App() {
  return (
    <SearchByCity />
  );
}
