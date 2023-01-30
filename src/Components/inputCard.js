import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withdrawBalance, depositBalance, interestBalance, chargesBalance } from '../store/balance';
import './inputCard.css';



function InputCard(){

    const dispatch = useDispatch();
    const [userInput, setUserInput] = useState('')

    function handleInputChange(event){
        setUserInput(event.target.value)
        console.log(event.target.value)
    }

    function handleDeposit(event){
        event.preventDefault();
        dispatch(depositBalance(Number(userInput)))
        setUserInput('')
    }

    function handleWithdrawl(event){
        event.preventDefault();
        dispatch(withdrawBalance(Number(userInput)));
        setUserInput('');
    }

    console.log(userInput);

    return(
        <div className='input-card-container'>
            <div id='input-field'>
                <p>Amount</p>
                <input id='user-input' type='number' value={userInput} onChange={handleInputChange}></input>
            </div>
            <div className='button-container'>
                <button id='withdraw' onClick={handleWithdrawl}>Withdraw</button>
                <button id='deposit' onClick={handleDeposit}>Deposit</button>
                <button id='interest' onClick={()=> dispatch(interestBalance())}>Add Interest</button>
                <button id='charges' onClick={()=> dispatch(chargesBalance())}>Add Charges</button>
            </div>
        </div>
    )
}

export default InputCard;