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
    this.setState({newItem: e.target.value})
  }

  newItem = (e) => {
    e.preventDefault()
    if(this.state.newItem !== "") {
      let newItemTotal = this.state.status.total += 1
      let newNumber = this.state.idNumber += 1
      this.setState({...this.state, id: newNumber, list: [...this.state.list, {name: this.state.newItem, id: newNumber, complete: false }], idNumber: newNumber, newItem: "", status: {...this.state.status, total: newItemTotal}})
    }
  }

  crossOutItem = (index) => {
    // console.log("completed length", completedCount, "total length", this.state.list.length)
    this.setState({list: this.state.list.map((item) => {
      if(index === item.id) {
        return {...item, complete: item.complete === false ? true : false}
      } else {
        return item;
      }
    })})
  }


  render() {
    return (
      <div className="App">
        <h1>Todo list</h1>
        <input onChange={this.handleChange} value={this.state.newItem}>
        </input>
        <button onClick={this.newItem}>Add</button>
        <p>{`${this.state.list.filter(item => item.complete).length} done out of ${this.state.list.length} tasks`}</p>
        <div className="todo-div">
          <ul>
          {this.state.list.map(listItem => {
              return(<li className={listItem.complete ? "done" : ""} onClick={() => this.crossOutItem(listItem.id)}>{listItem.name}</li>)
          })}
          </ul>
        </div>
        <style>
        </style>
      </div>
    );
  }

}


export default App;
