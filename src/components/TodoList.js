// Komponent ma za zadanie odebrać na wejściu listę rzeczy do zrobienia i odpowiednio wyświetlić każdy jej element.
import React from 'react';
import Todo from './Todo';
import style from '../styles/TodoList.css';

const TodoList = ({listItems, removeTodo}) => {
  const todoNode = listItems.map((item) => {return (
    <Todo todo={item} key={item.id} removeTodo={removeTodo} />
  ) });

  return (
    <ul className={style.TodoList} >
    {todoNode}
    </ul>
  );
}

export default TodoList;
