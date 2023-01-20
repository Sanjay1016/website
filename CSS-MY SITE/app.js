import React, { useReducer } from 'react';

const counterReducer = (state, action) => {
switch(action.type) {
case 'increase':
return { count: state.count + 1 };
case 'decrease':
return { count: state.count - 1 };
case 'reset':
return { count: 0 };
case 'adding':
return { count: state.count + action.value };
case 'subtracting':
return { count: state.count - action.value };
default:
return state;
}
}

export default function App() {
const [state, dispatch] = useReducer(counterReducer, { count: 0 });

return (
<div>
<h1>{state.count}</h1>
<button onClick={() => dispatch({ type: 'increase' })}>Increment</button>
<button onClick={() => dispatch({ type: 'decrease' })}>Decrement</button>
<button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
<button onClick={() => dispatch({ type: 'adding', value: 10 })}>Add 10</button>
<button onClick={() => dispatch({ type: 'subtracting', value: 5 })}>Subtract 5</button>
</div>
);
}