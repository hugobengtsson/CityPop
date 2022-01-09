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
          input
      );
      let result = (await response.json()) as ApiResponse;

      if (result.geonames.length > 0) {
        let city: City = {
          name: "",
          population: 0,
        };
        // Future improvement, check if city at index exists. If so add name.
        city.name = result.geonames[0].name;
        city.population = result.geonames[0].population;

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
          input
      );
      let result = (await response.json()) as ApiResponse;

      if (result.geonames.length < 1) {
        return "error";
      } else {
        let countryCode = result.geonames[0].countryCode;

        let secondResponse = await fetch(
          "http://api.geonames.org/searchJSON?username=weknowit&orderby=population&featureClass=P&country=" +
            countryCode
        );
        let secondResult = (await secondResponse.json()) as ApiResponse;

        let cities = secondResult.geonames;

        var i;
        let citiesList = [];

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
      }
    } catch (err) {
      return "error";
    }
  }
}
