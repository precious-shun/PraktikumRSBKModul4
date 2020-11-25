import React, { useReducer } from 'react';
import "./CountRed.css";


const initialState = 0;
const counterReducer = (state, action) => {
    switch (action.type) {
        case 'Tambah':
            return { ...state, count: state.count + 1 };
        case 'Kurang':
            return { ...state, count: state.count - 1 };
        case 'Reset':
            return { ...state, count: state.count * initialState};
        default:
            throw new Error();
    }
};

export default function Counter() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
 
    const handlePlus = () => {
      dispatch({ type: 'Tambah' });
    };
   
    const handleMinus = () => {
      dispatch({ type: 'Kurang' });
    };

    const handleReset = () => {
        dispatch({ type: 'Reset' });
    };

    return (
        <div className="Main">
            <p className="Text">Counter with useReducer</p>
            <p>Jumlah Counter: {state.count}</p>
            <p>Kelompok 37</p>

            <div className="ViewButton">
                <div className="ViewButton2">
                    <button className="Button" onClick={handlePlus}>
                        +
                    </button>
                </div>
                <div className="ViewButton1">
                    <button className="Button" onClick={handleMinus}>
                        -
                    </button>
                </div>
                <div className="ViewButton3">
                    <button className="Button" onClick={handleReset}>
                        C
                    </button>
                </div>
            </div>
        </div>
    );
}


 

