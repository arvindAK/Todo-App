import React, { Component } from 'react';
import TodoItems from './components/TodoItems';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state= {
      items: [],
    }

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.doneItem = this.doneItem.bind(this);
    this.updatePrioity = this.updatePrioity.bind(this);
  }

  componentDidMount = () => {
    const json = localStorage.getItem('items');
    const items = JSON.parse(json);
    this.setState({ items })
  }

  componentDidUpdate = () => {
    const items = JSON.stringify(this.state.items);
    localStorage.setItem("items", items);
  }

  updatePrioity(key, e) {
    let items = this.state.items;
    items.forEach(item => {
      if (item.key === key) item.prioity = e.target.value
    });
    items.sort((a, b) => parseFloat(b.prioity) - parseFloat(a.prioity))
    this.setState({ items });
  }

  deleteItem(key) {
    let filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({ items: filteredItems });
  }

  doneItem(key) {
    let items = this.state.items;
    items.forEach(item => {
      if (item.key === key) {
        item.done = !item.done
      }
    });
    this.setState({ items });
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      let newItem = {
        text: this._inputElement.value,
        done: false,
        prioity: 1,
        key: Date.now()
      }

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem).sort((a, b) => parseFloat(b.prioity) - parseFloat(a.prioity))
        };
      });

      this._inputElement.value = "";
    }
    e.preventDefault();
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input placeholder = "Enter Task" type="text"
              ref = {a => this._inputElement = a}>
            </input>
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoItems
          entries={this.state.items}
          delete={this.deleteItem}
          done={this.doneItem}
          updatePrioity={this.updatePrioity}
        />
      </div>
    );
  }
}

export default App;
