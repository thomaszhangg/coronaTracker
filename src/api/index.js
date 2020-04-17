// functions for fetching data we need
// axios to make api requests
import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);

    // extract only the data we need
    // const modifiedData = {confirmed: data.confirmed, recovered: data.recovered, deaths: data.deaths, lastUpdate: data.lastUpdate}
    const modifiedData = {
        confirmed: confirmed,
        recovered: recovered,
        deaths: deaths,
        lastUpdate: lastUpdate
    }

    return modifiedData;
  } catch (error) {}
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
    
  }
}