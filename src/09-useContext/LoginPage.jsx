import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
	const { user, setUser } = useContext(UserContext);

	return (
		<>
			<h1>LoginPage</h1>
			<hr />
			<pre>{JSON.stringify(user, null, 4)}</pre>

			<button
				className='btn btn-primary'
				onClick={() =>
					setUser({ id: 1, name: 'Juan', email: 'correo@gmail.com' })
				}
			>
				Establecer usuario
			</button>
		</>
	);
};
