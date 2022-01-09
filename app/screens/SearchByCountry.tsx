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
interface SearchByCountryProp {
  navigation: any;
}

export default function SearchByCountry({ navigation }: SearchByCountryProp) {
  const [inputValue, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>SEARCH BY{"\n"}COUNTRY</Text>
      </View>
      <TextInput
        placeholder="Enter a country"
        autoCapitalize="characters"
        onChangeText={setValue}
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setLoading(true);
          getApi(inputValue, "country").then((r) => {
            setLoading(false);
            if (r == "error") {
              setError("We could not find the country you were looking for.");
            } else {
              setError("");
              navigation.navigate("CountryResult", {
                country: inputValue,
                cities: r,
              });
            }
          });
        }}
      >
        <Text style={styles.buttonText}>SEARCH BY COUNTRY</Text>
      </TouchableOpacity>
      <Text>{error}</Text>
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
