import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: 'Emiliano',
		email: 'emi@google.com',
	});

	const { username, email } = formState;

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	// Sólo aplica al montar el componente
	useEffect(() => {
		// console.log('useEffect');
	}, []);

	// Sólo aplica al detectar cambios en el formState
	useEffect(() => {
		// console.log('formState');
	}, [formState]);

	// Sólo aplica al detectar cambios en email
	useEffect(() => {
		// console.log('email');
	}, [email]);

	return (
		<>
			<h1>Formulario Simple</h1>
			<hr />

			<input
				type='text'
				className='form-control'
				placeholder='Username'
				name='username'
				value={username}
				onChange={onInputChange}
			/>

			<input
				type='email'
				className='form-control mt-2'
				placeholder='example@mail.com'
				name='email'
				value={email}
				onChange={onInputChange}
			/>
			<br />
			{
                username === 'Emiliano1' && <Message />
            }
		</>
	);
};
