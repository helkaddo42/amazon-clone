import React, { useEffect } from 'react';
import { useStateValue } from "../StateProvider";

const CommandeSucces = () => {

    const [, dispatch] = useStateValue();

    useEffect(() => {
        dispatch({type: "EMPTY_BASKET"});
    }, [])

    return (
        <div style={{textAlign:'center', marginTop:"100px"}}>
            <img alt="good" src='https://www.welovebuzz.com/wp-content/uploads/2019/11/giphy-5-8.gif' style={{borderRadius:'50%'}}/>
            <h1>Thanks for your order !</h1>
        </div>
    )
}

export default CommandeSucces;