import {useEffect, useState} from "react";
import {getCurrService} from "../../services";
import {baseOfCurrencies} from "../index";

export const FilteredCurr =()=>{

    const [filteredCurrency, setFilteredCurrency] = useState();
    useEffect(() => {
        getCurrService.getCurr()
            .then(value => value.data)
            .then(value => value.filter(result =>{
                if (baseOfCurrencies.find(value1 => value1 === result.cc)){
                    return result
                }
            }))
            .then(value => setFilteredCurrency(value))
            .catch((err) => {
                console.log(err);
                alert('Дані не прийшли');
            })
    }, []);

    return filteredCurrency
}
