//Komponent formularza TodoForm, który pozwoli na dodanie nowych elementów do listy Todo
import React from 'react';
import style from '../styles/TodoForm.css';

const TodoForm = ({addTodo}) => {
  let textareaValue = "";
  return (
    <form className={style.TodoForm} onSubmit={(e) => {e.preventDefault(); if (textareaValue!=""){addTodo(textareaValue)};}}>
      <label htmlFor="todoText">Add To-do:</label>
      <textarea id="todoText" onChange={(e) => textareaValue = event.target.value}></textarea>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default TodoForm;
