import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'change_value_to_add';

const reducer = (state, action) => {
    if (action.type === INCREMENT_COUNT) {
        return {
            ...state,
            count: state.count + 1,
        };
    }
    else if (action.type === DECREMENT_COUNT) {
        return {
            ...state,
            count: state.count - 1,
        };
    }
    if (action.type === SET_VALUE_TO_ADD) {
        return {
            ...state,
            valueToAdd: action.payload,
        }
    }
    return state;
};

const CounterPage = ({ initialCount }) => {
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    });
    console.log(state);
    const increment = () => {
        // setCount(count + 1);
        dispatch({
            type: 'increment'
        });
    };

    const decrement = () => {
        // setCount(count - 1);
        dispatch({
            type: 'decrement'
        });
    }

    const handleChange = (e) => {
        const value = parseInt(e.target.value) || 0;
        // setValueToAdd(value);

        dispatch({
            type: 'change_value_to_add',
            payload: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // setCount(count + valueToAdd);
        // setValueToAdd(0);
    }

    return (
        <Panel className="m-3">
            <h1 className='text-lg'>Count is {state.count}</h1>
            <div className='flex flex-row'>
                <Button onClick={increment}>
                    Increment
                </Button>
                <Button onClick={decrement}>
                    Decrement
                </Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!!</label>
                <input
                    value={state.valueToAdd || ""}
                    onChange={handleChange}
                    type="number"
                    className='p-1 m-2 bg-gray-50 border border-gray-300' />
                <Button>Add it!</Button>
            </form>
        </Panel>
    );
};

export default CounterPage;