import React from 'react';
import logo from './logo.svg';
import './App.css';


const handleChange = () => {
}


class App extends React.Component {
    constructor() {
      super()
      this.state = {
        list: [{name: "hello world", id: 99, complete: false}],
      status: {total: 0, done: 0},
      newItem: "",
      idNumber: 0,
     }
  }

  handleChange = (e) => {
    this.setState({newItem: e.target.value})
  }

  newItem = (e) => {
    console.log(this.state.newItem)

    e.preventDefault()
    let newNumber = this.state.idNumber += 1
    // this.setState({newItem: "This is on state now."})
    this.setState({...this.state, id: newNumber, list: [...this.state.list, {name: this.state.newItem, id: newNumber, complete: false }], idNumber: newNumber, newItem: ""})
  }


  render() {
    return (
      <div className="App">
        <h1>Todo list</h1>
        <input onChange={this.handleChange} value={this.state.newItem}>
        </input>
        <button onClick={this.newItem}>Add</button>
        <div>
          <ul>
          {this.state.list.map(listItem => {
                                             return(<li>{listItem.name}</li>)
                                           })}
          </ul>
        </div>
      </div>
    );
  }

}


export default App;
