//Komponent formularza TodoForm, który pozwoli na dodanie nowych elementów do listy Todo
import React from 'react';
import style from '../styles/TodoForm.css';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  
  handleSubmit = (e) => {
    e.preventDefault(); 
    if (this.state.value != ''){
      this.props.addTodo(this.state.value)
      };
    this.state.value = '';
  }

  handleChange = (e) => {
    this.setState({value: event.target.value})
  }

  render(){
    return (
    <form className={style.TodoForm} onSubmit={this.handleSubmit}>
      <label htmlFor="todoText">Add To-do:</label>
      <input 
        id="todoText" 
        value={this.state.value} 
        onChange={this.handleChange} >
      </input>
      <input type="submit" value="Submit" />
    </form>
    );
  }
}

export default TodoForm;
