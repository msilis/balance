import './displayBalance.css'
import { useSelector } from 'react-redux';

function DisplayBalance(){

    const { balance } = useSelector((state) => state.balance);
    console.log(balance)

    return(
        <div id='balance-container'>
            <h2>Balance:</h2>
            <h3 id='balance-text'>£{balance}</h3>
        </div>
    )
}

export default DisplayBalance;