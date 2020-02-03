import React, { useRef } from 'react';

interface TodoFormProps {
  onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const ref = useRef<HTMLInputElement>(null);

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onAdd(ref.current!.value);
    ref.current!.value = '';
  };

  return (
    <div className="row todo_form">
      <form className="col s12" onSubmit={submitFormHandler}>
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix tiny">add</i>
            <input
              ref={ref}
              id="icon_prefix"
              type="text"
              className="validate"
            />
              <label htmlFor="icon_prefix">Enter your Todo</label>
          </div>
        </div>
      </form>
    </div>
  )
};

export default TodoForm;
