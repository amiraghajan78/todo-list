import { useState } from "react";
import Header from "./Header";
import TodoListForm from "./TodoListForm";
import Todo from "./Todo";
import swal from "sweetalert";
import { Todo as TodoType } from "./Todos.types";

function TodoListContainer() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const addTodo = (title: string) => {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title,
        isCompleted: false
      }
    ]);
    return true;
  };
  const deleteTodo = (id: string) => {
    swal({
      title: 'Do you want to delete this todo?',
      icon: 'warning',
      buttons: ['No' , 'Yes']
    }).then((result) => {
      if (result) {
        setTodos(todos.filter(todo => todo.id !== id));
        swal({
          title: 'Todo Deleted Successfully.',
          icon: 'success'
        });
      };
    });
    return true;
  };
  const toggleCompleted = (id: string) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo
      )
    );
    return true;
  };
  return (
    <section className="todo-list-container">
        <Header />
        <TodoListForm addTodo={addTodo} />
        {
            todos.map((todo) => (
            <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} />
            ))
        }
    </section>
  );
};

export default TodoListContainer;
