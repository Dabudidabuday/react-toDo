import React from 'react';
import ToDoList from './ToDo/ToDoList';
import Context from './context';
import AddTodo from './ToDo/AddTodo';
function App() {

  const [todos, setTodos] = React.useState(
    [
      {id: 1, completed: false, title: 'Купить хлеб'},
      {id: 2, completed: false, title: 'Купить масло'},
      {id: 3, completed: false, title: 'Купить молоко'},
    ]
  )

  function toggleTodo(id) {
    setTodos(
      todos.map( todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
  
        return todo;
      })
    ) 
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={ {removeTodo} }>
      <div className="wrapper">
        <h1>React Tutorial</h1>

        <AddTodo onCreate={addTodo} />        
        {todos.length ? <ToDoList todos={todos} onToggle={toggleTodo} /> : <p>На сегодня дел нет</p>}
      </div>
    </Context.Provider>
  );
}

export default App;
