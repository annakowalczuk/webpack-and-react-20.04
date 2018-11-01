//komponent Title, będzie wyświetlał tytuł aplikacji wraz z liczbą zadań, które zostały dodane do listy
import React from 'react';

const Title = ({todoAmount}) => {
    return (
      <div>
        <h1>This is simple To-Do app</h1>
        <h3> You've got {todoAmount} To-Do's</h3>
      </div>
    );
  }

export default Title;
