import React from 'react';
import './App.css';
// import {HandleHTTP} from "./HandleHTTP";



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {value0: "inauthor:", value1:""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleInputChange(e){
    this.setState({value1: e.target.value});
  }

  handleChange(event){
    this.setState({value0: event.target.value});
  }

  handleSearch(){

    const sk ="https://www.googleapis.com/books/v1/volumes?q=";
    const skey =  `${sk}${ this.state.value0 }${this.state.value1}`;
    fetch(skey)
            .then(response => response.json())
            .then((jsonData) => {
            // jsonData is parsed json object received from url
            console.log(jsonData)
            })
            .catch((error) => {
            // handle your errors here
             console.error(error)
             })
    
    
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          Find My Book
          <p className="App-field">
            <input type = "text" className ="App-inputField" onChange={(e) => this.handleInputChange(e)} value= {this.state.value1}/>
              <select className="App-select" value={this.state.value0} onChange={this.handleChange}>
                <option value="inauthor:">Author</option>
                <option value="intitle:">Title</option>
                <option value="insubject:">Subject</option>
              </select>
              <button className= "App-search" onClick={this.handleSearch} >Search</button>
          </p>
          {this.state.value1} <br></br>
          {this.state.value0} 
        </header>        
      </div>
  );
}
}

export default App;
