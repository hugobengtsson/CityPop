import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

// Couldn't find the right prop for navigation and route.
interface CountryResultProp {
  navigation: any;
  route: any;
}

export default function CountryResult({
  navigation,
  route,
}: CountryResultProp) {
  return (
    <View style={styles.container}>
      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>{route.params.country}</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={route.params.cities}
        keyExtractor={(item, index) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("PopulationResult", {
                name: item.name,
                population: item.population,
              });
            }}
          >
            <Text style={styles.buttonText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

// Improvement for future development, add a separate stylesheet to avoid redundancy.
const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "black",
    width: "95%",
    height: 50,
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
  },
  buttonText: {
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headline: {
    fontSize: 32,
    textAlign: "center",
  },
  headlineContainer: {
    position: "absolute",
    top: 150,
    width: "100%",
  },
  flatList: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    marginLeft: "2,5%",
  },
});
