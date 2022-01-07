export default function getApi(input, type, navigation){

  console.log(input, type);



  if (type === 'city'){
    navigation.navigate('PopulationResult', { city: input })
  } else {
    navigation.navigate('CountryResult', { country: input })
  }

  // Hämta API
  // set loading till 1
  // navigation till result
};