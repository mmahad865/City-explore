import React from 'react';
import './App.css';
import axios from 'axios'
import SearchForm from './SearchForm';
import Displaycity from './DisplayCity';
import ErrorMessg from './Error';
 


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showName: '',
      latitude: '',
      longitude: '',
      map: '',
      displayInformation: false,
      errorMsg: '',
      displayError: false,
     
    }
  }


  handleSeaarch = async(e) => {
    e.preventDefault();
  
    const searchQuery = e.target.searchQuery.value;
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${searchQuery}&format=json`;


    try {
      const city = await axios.get(API)
      this.setState ({
        showName: city.data[0].showName,
        latitude: city.data[0].lat,
        longitude: city.data[0].lon,
        displayInformation: true,
        displayError: false
      })

  
      this.handleMap(city.data[0].lat, city.data[0].lon);
    
    
    } catch (error) {

      this.setState ({
        displayInformation: false,
        displayError: true,
        errorMsg: error.response.state + ' ' + error.response.data.error
        
      })
    }
  }

  handleMap = (lat, lon) => {
    const showMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${lat},${lon}&zoom=8`
    console.log(showMap)
    this.setState({
      map: showMap
    })
  }
  render () {
    return (
      <div className="App">
        <SearchForm handleInput={this.handleSeaarch} />

        {this.state.displayInformation && 
          <Displaycity cityInformation={this.state} mapLink={this.state.map} />


        }

        {this.state.displayError && 
          <ErrorMessg error={this.state.errorMsg} />
        }   

      </div>

    );
  }
}

export default App;
