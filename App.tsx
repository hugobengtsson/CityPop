import * as React from "react";
import {} from "react-native"; // Kan eventuellt tas bort?
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import HomeScreen from "./app/screens/HomeScreen";
import SearchByCity from "./app/screens/SearchByCity";
import SearchByCountry from "./app/screens/SearchByCountry";
import PopulationResult from "./app/screens/PopulationResult";
import CountryResult from "./app/screens/CountryResult";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="SearchByCity"
          component={SearchByCity}
          options={{ title: "Search by City" }}
        />
        <Stack.Screen
          name="SearchByCountry"
          component={SearchByCountry}
          options={{ title: "Search by Country" }}
        />
        <Stack.Screen
          name="PopulationResult"
          component={PopulationResult}
          options={{ title: "Population" }}
        />
        <Stack.Screen
          name="CountryResult"
          component={CountryResult}
          options={{ title: "Country" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
