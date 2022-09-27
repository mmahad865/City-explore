import React from 'react';
import './App.css';
import axios from 'axios'
import SearchForm from './SearchForm';
import Displaycity from './DisplayCity';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showName: '',
      latitude: '',
      longitude: ''
    }
  }

  handleSearch = async(e) => {
    e.preventDefault();
    const searchQuery = e.target.searchQuery.value;
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${searchQuery}&format=json`;
  
    const city = await axios.get(API)
  
    this.setState ({
      showName: city.data[0].showName,
      latitude: city.data[0].lat,
      longitude: city.data[0].lon

    })
    console.log(this.state)


  }

  render () {
    return (
      <div className="App">
        <SearchForm handleInput={this.handleSearch} />
        <Displaycity cityInformation={this.state}/>

      </div>

    );
  }
}

export default App;
