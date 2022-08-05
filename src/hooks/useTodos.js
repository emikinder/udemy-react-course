import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleNewTodo = (todo) => {
		const action = {
			type: 'AddTodo',
			payload: todo,
		};

		dispatch(action);
	};

	const handleDeleteTodo = (todoId) => {
		dispatch({
			type: 'DeleteTodo',
			payload: todoId,
		});
	};

	const handleToggleTodo = (todoId) => {
		dispatch({
			type: 'ToggleTodo',
			payload: todoId,
		});
	};

	return {
		todos,
		todosCount: todos.length,
		pendingTodosCount: todos.filter((todo) => !todo.done).length,
		handleNewTodo,
		handleDeleteTodo,
		handleToggleTodo,
	};
};
