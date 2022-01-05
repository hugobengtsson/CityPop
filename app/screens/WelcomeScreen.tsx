
import { ConsoleWriter } from 'istanbul-lib-report';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, StatusBar, Platform} from 'react-native';

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.headlineContainer}>
      <Text style={styles.headline}>CityPop</Text>
    </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SEARCH BY CITY</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SEARCH BY COUNTRY</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'black',
    width: '95%',
    height: 50,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  buttonText: {
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 5 : 0,
  },
  headline: {
    fontSize: 32,
  },
  headlineContainer: {
    position: 'absolute',
    top: 200,
  }
});