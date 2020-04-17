import React, { Component } from 'react';

// we make an index.js within components and export all 3 components as default
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
// just saying ./api will automatically look for index file
import {fetchData} from './api'

class App extends Component {

    state = {
        data: {}
    }

    async componentDidMount() {
        const fetchedData = await fetchData()

        this.setState({data: fetchedData})
    }

  render() {
      const {data} = this.state

    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
