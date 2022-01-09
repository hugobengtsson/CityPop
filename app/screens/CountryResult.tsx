import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function SearchByCity({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>{route.params.country}</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={route.params.cities}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.button}
              key={item.population}
              onPress={() => {
                navigation.navigate("PopulationResult", {
                  name: item.name,
                  population: item.population,
                });
              }}
            >
              <Text style={styles.buttonText}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

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
    top: 200,
    width: "100%",
  },
  flatList: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    marginLeft: "2,5%",
  },
});
