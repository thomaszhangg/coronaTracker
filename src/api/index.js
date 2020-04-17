// functions for fetching data we need
// axios to make api requests
import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

// naming convention "fetch" to denote asyncronous call
export const fetchData = async (country) => {
  let dynamicUrl = url

  if (country) {
    dynamicUrl = `${url}/countries/${country}`
  }
  try {
    const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(dynamicUrl);

    // extract only the data we need
    // const modifiedData = {confirmed: data.confirmed, recovered: data.recovered, deaths: data.deaths, lastUpdate: data.lastUpdate}
    const modifiedData = {
        confirmed: confirmed,
        recovered: recovered,
        deaths: deaths,
        lastUpdate: lastUpdate
    }
    
    return modifiedData;
  } catch (error) {
    console.log(error)
  }
};

export const fetchDailyData = async () => {
  try {
    const {data} = await axios.get(`${url}/daily`)

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    })) 

    return modifiedData
  } catch (error) {
    console.log(error)
  }
}

export const fetchCountries = async () => {
  try {
    const {data: {countries}} = await axios.get(`${url}/countries`)

    return countries.map((country) => country.name)
  } catch (error) {
    console.log(error)
  }
}