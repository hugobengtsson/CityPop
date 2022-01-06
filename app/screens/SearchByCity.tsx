
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TextInput,
  TouchableOpacity, 
  StatusBar, 
  Platform
} from 'react-native';

export default function SearchByCity() {

  const [inputValue, setValue] = useState('');

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.headlineContainer}>
      <Text style={styles.headline}>CityPop</Text>
    </View>
      <TextInput 
      placeholder='SEARCH BY CITY' 
      autoCapitalize='characters' 
      onChangeText={setValue}
      style={styles.input}
      />
      <TouchableOpacity 
        style={styles.button}
          onPress={ () => {
            console.log(inputValue)
        }}
      >
        <Text style={styles.buttonText} >SEARCH BY CITY</Text>
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
  },
  input: {
    height: 50,
    width: '95%',
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
  }
});