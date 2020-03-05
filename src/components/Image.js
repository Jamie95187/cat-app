import React, { Component } from 'react';
import catGetter from './services/catGetter';

export default class Image extends Component{

  constructor(props){
    super(props);
    this.state = {
    cat_info: [],
    }
  }

  componentDidMount() {
    this.fetchCat()
  }

  fetchCat = async () => {
    this.setState({
      status: "searching",
      image: ''
    });

    try {
      const cat = await catGetter();
      this.setState({
        status: "done",
        cat_info: cat
      });
    } catch (error) {
      this.setState({
        status: "error"
      });
    }
  };

  render(){
    var { cat_info } = this.state;
    return (
      <div className="image">
        <img src={cat_info.url} key={cat_info.id} alt="cat_pic"></img>
      </div>
    );
  }
}
