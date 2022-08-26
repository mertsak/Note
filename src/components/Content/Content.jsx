import React from 'react'
import Filter from "../Filter/Filter";
import TodoList from "../TodoList/TodoList";

const Content = () => {
  return (
    <div className="container mt-2">
      <Filter></Filter>
      <TodoList></TodoList>
    </div>
  )
}

export default Content
