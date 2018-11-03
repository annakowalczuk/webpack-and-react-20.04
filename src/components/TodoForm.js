//Komponent formularza TodoForm, który pozwoli na dodanie nowych elementów do listy Todo
import React from 'react';
import style from '../styles/TodoForm.css';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  
  render(){
    return (
    <form className={style.TodoForm} onSubmit={(e) => {
        e.preventDefault(); 
        if (this.state.value != ''){
          this.props.addTodo(this.state.value)
          };
        this.state.value = '';
        }}>
      <label htmlFor="todoText">Add To-do:</label>
      <textarea id="todoText" value={this.state.value} onChange={(e) => this.setState({value: event.target.value})} ></textarea>
      <input type="submit" value="Submit" />
    </form>
    );
  }
}

export default TodoForm;
