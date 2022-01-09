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

export default function SearchByCity({ navigation }) {
  const [inputValue, setValue] = useState("");
  const [loading, setLoading] = useState(false);

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
          getApi(inputValue, "city", navigation).then((r) => {
            console.log(r);
            setLoading(false);
            if ((r = "Error")) {
            }
          });
        }}
      >
        <Text style={styles.buttonText}>SEARCH BY CITY</Text>
      </TouchableOpacity>
      <Text></Text>
      <ActivityIndicator animating={loading} />
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
    alignItems: "center",
    justifyContent: "center",
  },
  headline: {
    fontSize: 32,
    textAlign: "center",
  },
  headlineContainer: {
    position: "absolute",
    top: 200,
  },
  input: {
    height: 50,
    width: "95%",
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
  },
});
