import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api';
import styles from './styles/App.module.css';
import Corona from './img/corona.jpeg'



class App extends React.Component {
  state ={
    data:{},
    country:'',
  }
  async componentDidMount() {
    const fecthData = await fetchData();
    this.setState({data: fecthData})
  }
  handleCoutryChange = async (country)=>{
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country});
    console.log(fetchedData);
    console.log(country)
  }

 

  render() {
    const {data, country} = this.state;

    return (
      <div className={styles.container}>
       <img src={Corona} alt="corona" className={styles.img}/>
        <Cards data={data} />
        <CountryPicker handleCoutryChange={this.handleCoutryChange}/>
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;