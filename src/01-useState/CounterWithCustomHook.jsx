import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
	const { counter, increment, decrement, reset } = useCounter();
	return (
		<>
			<h1>Counter with hook: {counter}</h1>
			<hr />

			<button onClick={() => increment(2)} className='btn btn-warning'>
				+1
			</button>
			<button onClick={() => decrement(3)} className='btn btn-warning'>
				-1
			</button>
			<button onClick={reset} className='btn btn-warning'>
				Reset
			</button>
		</>
	);
};
