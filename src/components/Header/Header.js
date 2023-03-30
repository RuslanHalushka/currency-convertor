import React, {useContext} from 'react';
import {Context} from "../../context";
import './Header.css';

export const Header =()=> {

    const [state, setState] = React.useState(0);
    const {filteredCurrency} = useContext(Context);

    React.useEffect(()=>{
        const arr = [];
        for (const i in filteredCurrency) {
            const res = `${filteredCurrency[i].cc}/UAH: ${filteredCurrency[i].rate}; `;
            arr.push(res)
        }
        setState(arr);
    }, [filteredCurrency])

    return (
        <div>
            <header>
                <h1>Курс валют</h1>
                <div className={'content'}>
                    {state}
                </div>
            </header>
        </div>
    );
}
