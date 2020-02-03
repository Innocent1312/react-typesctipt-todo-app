import React, {useEffect, useState} from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { ITodo } from "../interfaces";

declare var confirm: (question: string) => boolean;

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
    setTodos(saved)
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [ todos ]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false,
    };

    setTodos(prevState => [newTodo, ...prevState])
  };

  const toggleHandler = (id: number) => {
    setTodos(prevState =>
      prevState.map(item => {
        if (item.id === id) {
          item.completed = !item.completed
        }
        return item
      })
    )
  };

  const removeHandler = (id: number) => {
    const shouldRemove = confirm('Are you sure you want to delete the item');
    if (shouldRemove) {
      setTodos(prevState => prevState.filter(item => item.id !== id))
    }
  };

  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList todos={todos}  onRemove={removeHandler} onToggle={toggleHandler} />
    </>
  )
};

export default TodosPage;
