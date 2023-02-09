import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';
import produce from 'immer';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'change_value_to_add';
const ADD_VALUE_TO_COUNT = 'add_value_tp_count';

const reducer = (state, action) => {

    // with immer library
    switch (action.type) {
        case INCREMENT_COUNT:
            state.count = state.count + 1;
            return;
        case DECREMENT_COUNT:
            state.count = state.count - 1;
            return;
        case ADD_VALUE_TO_COUNT:
            state.count = state.count + state.valueToAdd;
            state.valueToAdd = 0;
            return;
        case SET_VALUE_TO_ADD:
            state.valueToAdd = action.payload;
            return;
        default:
            return;
    }

    // without immer library
    /*switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1,
            };
        case ADD_VALUE_TO_COUNT:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0
            }
        case SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload,
            }
        default:
            return state;
    }*/
};

const CounterPage = ({ initialCount }) => {
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(produce(reducer), {
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

        dispatch({
            type: ADD_VALUE_TO_COUNT
        });

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