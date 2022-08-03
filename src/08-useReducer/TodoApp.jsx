import { useReducer } from 'react';
import { todoReducer } from './todoReducer';

const initialState = [
	{
		id: new Date().getTime(),
		description: 'Sacar la basura',
		done: false,
	},
	{
		id: new Date().getTime() * 3,
		description: 'Lavar la ropa',
		done: false,
	},
];

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, initialState);

	return (
		<>
			<h1>TodoApp ({todos.length}) | <small>Pendientes:</small></h1>
			<hr />
			<div className='row'>
				<div className='col-7'>
					<ul className='list-group'>
						{todos &&
							todos.map((todo) => (
								<li className='list-group-item d-flex justify-content-between' key={todo.id}>
									<span className='align-self-center'>{todo.description}</span>
									<button className='btn btn-danger'>
										Borrar
									</button>
								</li>
							))}
					</ul>
				</div>
				<div className='col-5'>
					<h4>Agregar TODO</h4>
					<hr />
					<form>
						<input
							type='text'
							placeholder='new task'
							className='form-control'
						/>
						<button
							className='btn btn-outline-primary mt-1'
							type='submit'
						>
							Agregar
						</button>
					</form>
				</div>
			</div>
		</>
	);
};
