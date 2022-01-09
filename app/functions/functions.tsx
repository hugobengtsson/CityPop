export default async function getApi(input, type, navigation) {
  if (type === "city") {
    try {
      let firstResponse = await fetch(
        "http://api.geonames.org/searchJSON?username=weknowit&featureClass=P&name=" +
          input
      );
      let firstResult = await firstResponse.json();

      if (firstResult.geonames[0]) {
        let city = {};

        city.name = firstResult.geonames[0].name;
        city.population = firstResult.geonames[0].population;

        return city;
      } else {
        return "Error";
      }
    } catch (err) {
      console.log(err);
    }

    // navigation.navigate('PopulationResult', { city: input })
  } else {
    try {
      let firstResponse = await fetch(
        "http://api.geonames.org/searchJSON?username=weknowit&adminCode1=00&name=" +
          input
      );
      let firstResult = await firstResponse.json();

      let countryCode = firstResult.geonames[0].countryCode;

      let secondResponse = await fetch(
        "http://api.geonames.org/searchJSON?username=weknowit&orderby=population&featureClass=P&country=" +
          countryCode
      );
      let secondResult = await secondResponse.json();

      let cities = secondResult.geonames;

      var i;
      let citiesList = [];

      for (i = 0; i < 3; i++) {
        let cityObject = {};
        cityObject.name = cities[i].name;
        cityObject.population = cities[i].population;

        citiesList.push(cityObject);
      }
      return citiesList;
    } catch (err) {
      console.log(err);
    }

    navigation.navigate("CountryResult", { country: input });
  }

  // Hämta API
  // set loading till 1
  // navigationen bör ske från screen då man går från country till populationresult så behöver api:et läsas in direkt på den sidan.
}
