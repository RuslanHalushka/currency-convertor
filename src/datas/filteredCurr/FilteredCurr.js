import {useEffect, useState} from "react";
import {useFetch} from "../../services";
import {baseOfCurrencies} from "../index";
import {url} from "../index";

export const FilteredCurr =()=>{
    const [filteredCurrency, setFilteredCurrency] = useState();
    const {data, error} = useFetch(url);

    if(error){
        console.log(error)
    }

    useEffect(()=>{
        if (data){
            const filteredData = data.filter(result => {
                return baseOfCurrencies.find(value1 => value1 === result.cc)
            })
            setFilteredCurrency(filteredData)
        }
    },[data])

    return filteredCurrency
}