import React from "react";
import {baseOfCurrencies} from "../../../datas";

export const Selector =()=>{
    const [curr, setCurr] = React.useState('UAH');
    const selectorOfCurrencies=()=>{
        const arrOfOptions = baseOfCurrencies.map((value, index) => <option key={index}>{value}</option>)
        return setCurr(arrOfOptions);
    }

    React.useEffect(()=>{selectorOfCurrencies()}, []);

    return curr
}