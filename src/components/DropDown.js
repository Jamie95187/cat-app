import React, { Component } from 'react';
import axios from 'axios';

export default class DropDown extends Component{

  constructor(props){
    super(props);
    this.state = {
    listOfBreeds: {},
    isLoaded: false,
    }
  }

  componentDidMount() {
    const config = { headers: { 'x-api-key': process.env.REACT_APP_CAT_API_KEY } };
    axios.get('https://https://api.thecatapi.com/v1/breeds', config)
      .then(response => {
        this.setState({
          isLoaded: true,
          response.map((cat) => (
            this.listOfBreeds[cat.id] = cat.name
          ));
        });
      });

  }

  render(){

    var { isLoaded, cat_info } = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      return
      <div className="dropDown">
        <select id="breeds">
          {this.listOfBreeds.forEach((breed) => (
            <option id={breed.id}>{breed.name}</option>
          ))};
        </select>
      </div>
    }
  }
}
