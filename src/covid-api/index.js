import axios from "axios";

async function getAllCountries() {
	const res = await axios.get(
		"https://covid-tracker-us.herokuapp.com/v2/locations"
	);
	console.log(res.data);
	return res.data;
}

export default getAllCountries;
