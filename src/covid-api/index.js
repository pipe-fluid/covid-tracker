import axios from "axios";

async function getAllCountries() {
	const res = await axios.get("https://covid-api.com/api/regions");
	console.log(res);
	return res;
}

export default getAllCountries;
