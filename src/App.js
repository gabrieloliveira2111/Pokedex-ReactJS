import { React , useContext, useEffect } from 'react';
import './App.css';
import { AppContext } from './contexts/AppContext';
import Home from './Home';


function App() {

    const { getAllPokemon } = useContext(AppContext)

    useEffect(() => {
        getAllPokemon()
    }, [])

    return (
        <div className="App">
                <Home></Home>
        </div>
    );  
}

export default App;