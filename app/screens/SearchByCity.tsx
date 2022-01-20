import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import getApi from "../functions/functions";

// Couldn't find the right prop for navigation and route.
interface SearchByCityProp {
  navigation: any;
}

export default function SearchByCity({ navigation }: SearchByCityProp) {
  const [inputValue, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>SEARCH BY{"\n"}CITY</Text>
      </View>
      <TextInput
        placeholder="Enter a city"
        autoCapitalize="characters"
        onChangeText={setValue}
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setLoading(true);
          getApi(inputValue, "city").then((r) => {
            setLoading(false);
            if (r == "error") {
              setError("We could not find the city you were looking for.");
            } else if (r == "special") {
              setError(
                "There seems to be some special characters och numbers in your query. You are only allowed to use letters."
              );
            } else if (r == "spaces") {
              setError(
                "Please fill out the field above to search for your desired city."
              );
            } else {
              setError("");
              navigation.navigate("PopulationResult", r);
            }
          });
        }}
      >
        <Text style={styles.buttonText}>SEARCH BY CITY</Text>
      </TouchableOpacity>
      <Text style={styles.errorText}>{error}</Text>
      <ActivityIndicator
        style={styles.activity}
        size="large"
        color="#000000"
        animating={loading}
      />
    </View>
  );
}

// Improvement for future development, add a separate stylesheet to avoid redundancy.
const styles = StyleSheet.create({
  activity: {
    position: "absolute",
  },
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
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    width: "95%",
    fontSize: 14,
  },
  headline: {
    fontSize: 32,
    textAlign: "center",
  },
  headlineContainer: {
    position: "absolute",
    top: 150,
  },
  input: {
    height: 50,
    width: "95%",
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
  },
});
