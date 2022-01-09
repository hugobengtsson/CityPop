interface SearchResponse {
  adminCode1?: string;
  adminCodes1?: {
    ISO3166_2?: string;
  };
  adminName1?: string;
  countryCode?: string;
  countryId?: string;
  countryName: string;
  fcl?: string;
  fclName?: string;
  fcode?: string;
  fcodeName?: string;
  geonameId?: number;
  lat?: string;
  lng?: string;
  name: string;
  population: number;
  toponymName?: string;
}
interface City {
  name: string;
  population: number;
}

interface CityObject {
  name: string;
  population: number;
}
interface ApiResponse {
  geonames: SearchResponse[];
}

export default async function getApi(input: string, type: string) {
  if (type === "city") {
    try {
      let response = await fetch(
        "http://api.geonames.org/searchJSON?username=weknowit&featureClass=P&name=" +
          encodeURIComponent(input)
      );
      let result = (await response.json()) as ApiResponse;

      // Check for the result. The array needs to be longer than zero to proceed.
      if (result.geonames.length > 0) {
        let city: City = {
          name: "",
          population: 0,
        };
        // Future improvement, check if city at index exists. If so add name.
        city.name = result.geonames[0].name;
        city.population = result.geonames[0].population;

        // Returns the city-object, ready to be rendered.
        return city;
      }
      return "error";
    } catch (err) {
      return "error";
    }
  } else {
    try {
      let response = await fetch(
        "http://api.geonames.org/searchJSON?username=weknowit&adminCode1=00&name=" +
          encodeURIComponent(input)
      );
      let result = (await response.json()) as ApiResponse;

      // Check for the result. The array needs to be longer than zero to proceed.
      if (result.geonames.length > 0) {
        let countryCode = result.geonames[0].countryCode;

        // Second request is for fetching the cities within the country the user searched for.
        // This also filters the response to only be cities or towns.
        // Also sorting the response, biggest population first.
        let secondResponse = await fetch(
          "http://api.geonames.org/searchJSON?username=weknowit&orderby=population&featureClass=P&country=" +
            countryCode
        );
        let secondResult = (await secondResponse.json()) as ApiResponse;

        let cities = secondResult.geonames;

        var i;
        let citiesList = [];

        // Looping over the three first objects returned from the API.
        // Also builds them into an array with objects.
        for (i = 0; i < 3; i++) {
          let cityObject: CityObject = {
            name: "",
            population: 0,
          };
          cityObject.name = cities[i].name;
          cityObject.population = cities[i].population;
          citiesList.push(cityObject);
        }
        return citiesList;
      } else {
        return "error";
      }
    } catch (err) {
      return "error";
    }
  }
}
