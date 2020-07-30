import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api';
import styles from './styles/App.module.css';



class App extends React.Component {
  state ={
    data:{},
  }
  async componentDidMount() {
    const fecthData = await fetchData();
    this.setState({data: fecthData})

    
  }

 

  render() {
    const {data} = this.state;

    return (
      <div className={styles.container}>
       
        <Cards data={data} />
        <CountryPicker />
        <Chart /> 
      </div>
    );
  }
}

export default App;