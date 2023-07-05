import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const maxBudget = 20000
    const minBudget = 0
    const { budget } = useState('');
    const { currency, expenses } = useContext(AppContext);
    const setBudget = (val) => {
        budget({
            type: 'SET_BUDGET',
            payload: val,
        })
    }
    const handleBudget = (e) => {
        if (e > maxBudget) {
            alert("Budget More than max allowed()20000");
        } else if (e < minBudget) {
            setBudget(minBudget)
        } else if (e < expenses) { alert("Budget cannot be less than spending allocated ") } else setBudget(e)
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input
                required='required'
                type='number'
                id='budget'
                value={budget}
                style={{ marginLeft: '5rem', size: 5 }}
                onChange={(event) => handleBudget(event.target.value)} /></span>
        </div>
    );
};
export default Budget;