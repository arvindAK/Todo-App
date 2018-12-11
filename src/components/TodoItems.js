import React, {Component} from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends Component {
  constructor(props){
    super(props)

    this.createItems = this.createItems.bind(this);
  }

  createItems(item) {
    return (
      <div key={item.key} className={`item priority_${item.prioity} done_${item.done}`}>
        <input type="number" value={item.prioity} onChange={(e) => this.updatePrioity(item.key, e)} min="1" max="3" className="priority" />
        <label>
          <input type="checkbox" onChange={() => this.done(item.key)} checked={item.done}/>
          <span></span>
        </label>
        <span className="close" onClick={() => this.delete(item.key)}>X</span>
        <span className="item_text">{item.text}</span>

      </div>
    )
  }

  delete(key) {
    this.props.delete(key);
  }

  done(key) {
    this.props.done(key);
  }

  updatePrioity(key, e) {
    console.log('todo e:' + e.target.value);
    console.log(key)
    this.props.updatePrioity(key, e);
  }

  render() {
    let todoEntries = this.props.entries;

    let listUndoneItems = todoEntries
      .filter(item => item.done === false)
      .map(this.createItems);

    let listDoneItems = todoEntries
      .filter(item => item.done === true)
      .map(this.createItems);

    return(
      <div className="container">
        {todoEntries.filter(item => item.done === true).length !== todoEntries.length && <div className="theList">
          <h2>Yet Todo</h2>
          <FlipMove duration={250} easing="ease-in-out">
            {console.log('rendering list')}
            {listUndoneItems}
          </FlipMove>
        </div>}
        <FlipMove duration={350} easing="ease-in-out">
        {todoEntries.filter(item => item.done === true).length > 0 && <div className="theList">
          <h2>Done Todo</h2>
          <FlipMove duration={350} easing="ease-in-out">
            {listDoneItems}
          </FlipMove>
          <span className="count">
            {todoEntries.filter(item => item.done === true).length} out of {todoEntries.length} completed
          </span>
        </div>}
        </FlipMove>

      </div>
    );
  }
};

export default TodoItems;
