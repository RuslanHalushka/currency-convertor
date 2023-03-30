import React from 'react';
import {MainPage} from "./components";
import {FilteredCurr} from "./datas";
import {Context} from './context';

function App() {
    const filteredCurrency = FilteredCurr();
    return (
        <Context.Provider value={{filteredCurrency}}>
            <MainPage/>
        </Context.Provider>
    );
}

export default App;