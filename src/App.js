import React, { Component } from 'react';

// we make an index.js within components and export all 3 components as default
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
// just saying ./api will automatically look for index file
import {fetchData} from './api'

import coronaImage from './images/coronaImage.png'

class App extends Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData()

        this.setState({data: fetchedData})
    }

    handleCountryChange = async (country) => {
      // fetch the data then set the state
      const fetchedData = await fetchData(country)

      this.setState({ data: fetchedData, country: country})
    }

  render() {
      const {data, country} = this.state

    return (
      <div className={styles.container}>
        <img className={styles.image} alt="COVID-19" src={coronaImage} />
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    );
  }
}

export default App;
