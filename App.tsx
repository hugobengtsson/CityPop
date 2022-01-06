import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; // Kan eventuellt tas bort? 

import WelcomeScreen from './app/screens/WelcomeScreen';
import SearchByCity from './app/screens/SearchByCity';
import SearchByCountry from './app/screens/SearchByCountry';
import PopulationResult from './app/screens/PopulationResult';
import CountryResult from './app/screens/CountryResult';


export default function App() {
  return (
    <CountryResult />
  );
}
