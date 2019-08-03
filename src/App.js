import React from 'react';
import logo from './logo.svg';
import './App.css';


const handleChange = () => {
}


class App extends React.Component {
    constructor() {
      super()

      this.state = {
      list: [],
      status: {total: 0, done: 0},
      newItem: "",
      idNumber: 0,
     }
  }

  handleChange = (e) => {
    this.setState({...this.state, newItem: e.target.value})
  }

  newItem = (e) => {
    // e.preventDefault()
    let newNumber = this.state.idNumber += 1
    this.setState({list: [...this.state.list, {itemName: this.state.newItem, id: newNumber, completed: false}]})
    console.log(this.state.list)
  }


  render() {
    return (
      <div className="App">
        <h1>Todo list</h1>
        <input onChange={this.handleChange}>
        </input>
        <button onClick={this.newItem}>Add</button>
      </div>
    );
  }

}


export default App;
