
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  TouchableOpacity, 
} from 'react-native';

import getApi from '../functions/functions';


export default function SearchByCity({ navigation }) {

  const [inputValue, setValue] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>SEARCH BY{"\n"}COUNTRY</Text>
      </View>
        <TextInput 
        placeholder='Enter a country' 
        autoCapitalize='characters' 
        onChangeText={setValue}
        style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={ () => {
          getApi(inputValue, 'country', navigation)
        }}>
          <Text style={styles.buttonText} >SEARCH BY COUNTRY</Text>
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
  input: {
    height: 50,
    width: '95%',
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
  }
});