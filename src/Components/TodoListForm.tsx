import { useState } from 'react';
import { IoMdAdd } from "react-icons/io";

type TodoFormProps = {
  addTodo: (title: string) => boolean,
};

function TodoListForm({ addTodo }: TodoFormProps) {
  const [value, setValue] = useState<string>('');
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value) {
      addTodo(value);
      setValue('');
    };
  };
  return (
    <form action="#" className='f-c' onSubmit={submitHandler}>
      <input
        type="text"
        className='form-input'
        placeholder='What is Today Task?'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button className='add-btn f-c'>
          Add Task
          <IoMdAdd />
      </button>
    </form>
  );
};

export default TodoListForm;
