import { useEffect, useState } from 'react';

// Ejemplo de Unmount
export const Message = () => {
    const [coords, setCoords] = useState({x: 0, y: 0});

	useEffect(() => {
		const onMouseMove = ({ x, y }) => {
			// const coords = { x, y };
			setCoords({ x, y });
		};

		window.addEventListener('mousemove', onMouseMove);

        // Se ejecuta al desmontar el componente
		return () => {
			window.removeEventListener('mousemove', onMouseMove);
		};
	}, []);

	return (
		<>
			<h3>Usuario ya existente</h3>
            {JSON.stringify(coords)}
		</>
	);
};
