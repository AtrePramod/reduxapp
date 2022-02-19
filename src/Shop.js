import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
 

const Shop = () => {
    const dispatch=useDispatch();
    const actions=bindActionCreators(actionCreators,dispatch)
    return <>
        <div>
            <h3>Deposit/Withdraw Money</h3>
            {/* <button className="btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>Upadate Balance
            <button className="btn-primary mx-2"onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
        
        <button className="btn-primary mx-2" onClick={()=>{ actions.withdrawMoney(100)}}>-</button>Upadate Balance
            <button className="btn-primary mx-2"onClick={()=>{ actions.depositMoney(100)}}>+</button>
        </div> 
        </>;
};

export default Shop;
