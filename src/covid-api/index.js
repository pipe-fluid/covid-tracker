import axios from "axios";

async function getAllCountries() {
  return axios
    .get("https://covid-tracker-us.herokuapp.com/v2/locations")
    .then((response) => response.data)
    .catch((error) => console.error(error));
}

export { getAllCountries };
