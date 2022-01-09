import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Couldn't find the right prop for navigation and route.
interface PopulationResultProp {
  route: any;
}

export default function PopulationResult({ route }: PopulationResultProp) {
  return (
    <View style={styles.container}>
      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>{route.params.name}</Text>
      </View>
      <View style={styles.populationDisplay}>
        <Text style={styles.populationHeadline}>POPULATION</Text>
        <Text style={styles.populationCount}>
          {route.params.population.toLocaleString()}
        </Text>
      </View>
    </View>
  );
}

// Improvement for future development, add a separate stylesheet to avoid redundancy.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headline: {
    fontSize: 32,
  },
  headlineContainer: {
    position: "absolute",
    top: 150,
  },
  populationDisplay: {
    height: 100,
    width: "95%",
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  populationCount: {
    fontSize: 28,
  },
  populationHeadline: {
    position: "absolute",
    textAlign: "center",
    top: 5,
  },
});
