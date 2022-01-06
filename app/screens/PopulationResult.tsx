
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
        <Text style={styles.headline}>PARIS</Text>
      </View>
      <View style={styles.populationDisplay} >
        <Text style={styles.populationHeadline}>POPULATION</Text>
        <Text style={styles.populationCount}>2 244 000</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  populationDisplay: {
    height: 100,
    width: '95%',
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  populationCount: {
    fontSize: 28,
  },
  populationHeadline: {
    position: 'absolute',
    textAlign: 'center',
    top: 5,
  }
});