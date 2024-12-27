import { FaTrash } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { Todo as TodoType } from "./Todos.types";

type TodoProps = {
  todo: TodoType,
  deleteTodo: (id: string) => boolean,
  toggleCompleted: (id: string) => boolean,
};

function Todo({ todo , deleteTodo , toggleCompleted }: TodoProps) {
  return (
    <div  className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
        <span className="todo-title">{todo.title}</span>
        <button
          className='complete-btn f-c'
          onClick={() => toggleCompleted(todo.id)}
        ><FaCheck /></button>
        <button
          className='delete-btn f-c'
          onClick={() => deleteTodo(todo.id)}
        ><FaTrash /></button>
    </div>
  );
};

export default Todo;
