// Komponent ma za zadanie odebrać na wejściu listę rzeczy do zrobienia i odpowiednio wyświetlić każdy jej element.
import React from 'react';
import style from '../styles/TodoList.css';

const TodoList = (param) => {
  return (
    <ul className={style.TodoList} >
    {param.listItems.map((item) => <li key={item.id}>{item.text}</li>)}
    </ul>
  );
}

export default TodoList;
