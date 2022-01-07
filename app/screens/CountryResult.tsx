
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
} from 'react-native';

export default function SearchByCity({ route }) {

  return (
    <View style={styles.container}>
      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>{route.params.country}</Text>
      </View>
        <TouchableOpacity 
          style={styles.button}
            onPress={ () => {
              console.log('hello')
          }}
        >
          <Text style={styles.buttonText} >Paris</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
            onPress={ () => {
              console.log('hello')
          }}
        >
          <Text style={styles.buttonText} >Marseille</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
            onPress={ () => {
              console.log('hello')
          }}
        >
          <Text style={styles.buttonText} >Lyon</Text>
        </TouchableOpacity>
      </View>
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
  },
  headline: {
    fontSize: 32,
    textAlign: 'center',
  },
  headlineContainer: {
    position: 'absolute',
    top: 200,
  },
});