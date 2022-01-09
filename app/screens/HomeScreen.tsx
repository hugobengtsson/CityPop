import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

interface HomeScreenProp {
  navigation: any;
}

export default function WelcomeScreen({ navigation }: HomeScreenProp) {
  return (
    <View style={styles.container}>
      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>CityPop</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("SearchByCity");
        }}
      >
        <Text style={styles.buttonText}>SEARCH BY CITY</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("SearchByCountry");
        }}
      >
        <Text style={styles.buttonText}>SEARCH BY COUNTRY</Text>
      </TouchableOpacity>
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
  },
  headlineContainer: {
    position: "absolute",
    top: 200,
  },
});
