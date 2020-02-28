import React, { Component } from 'react';
import axios from 'axios';

export default class Image extends Component{

  constructor(props){
    super(props);
    this.state = {
    cat_info: [],
    isLoaded: false,
    }
  }

  componentDidMount() {
    const config = { headers: { 'x-api-key': process.env.REACT_APP_CAT_API_KEY } };
    axios.get('https://api.thecatapi.com/v1/images/search?', config)
      .then(response => {
        this.setState({
          isLoaded: true,
          cat_info: response.data[0],
        })
      });

  }

  render(){

    var { isLoaded, cat_info } = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      return (
        <div className="image">
          <img src={cat_info.url} alt="cat_pic"></img>
        </div>
      );
    }
  }
}
