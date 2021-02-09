import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      newTodoItem: ''
    }
  }

  handleChanges = e => {
    this.setState({
      newTodoItem: e.target.value
    })
  }

  handleSubmit = () => {
    this.props.addTodo
  }

  render() {
    return (
      <form>
        <input type='text' name='item' value={this.state.todoItem} onChange={this.handleChange}/>
      </form>
    );
  }
}

export default App;
