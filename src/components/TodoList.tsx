import React from 'react';
import { ITodo } from "../interfaces";

interface TodoListProps {
  todos: ITodo[]
  onToggle: (id: number) => void
  onRemove : (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {

  if (todos.length === 0) {
    return <h5 className="center orange-text">Sorry, you don`t have any todo</h5>
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();

    onRemove(id)
  };

  return (
    <ul>
      {todos.map(item => {
        const classes: string[] = ['todo'];

        if (item.completed) {
          classes.push('completed')
        }

        return (
          <li className={classes.join(' ')} key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={onToggle.bind(null, item.id)}
              />
              <span className="black-text">{item.title}</span>
              <i
                className="material-icons red-text"
                onClick={event => removeHandler(event, item.id)}
              >
                delete
              </i>
            </label>
          </li>
        )
      })}
    </ul>
  )
};

export default TodoList;
