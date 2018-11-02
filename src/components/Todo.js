// Komponent zajmie się wyświetlaniem pojedynczego elementu listy. Ma to być zwykły komponent prezentacyjny z takim samym zachowaniem jak dotychczas. Po kliknięciu element powinien zostać usunięty.
import React from 'react';

const Todo = ({todo, removeTodo}) => {
  console.log(todo.id);
  return (
    <li key={todo.id} onClick={(e) => removeTodo(todo.id)}>{todo.text}</li>
  );
}

export default Todo;
