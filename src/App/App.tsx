import React, { Component } from 'react';
import './App.css';
import { Equipos } from './Components';
import LaLigaProvider from './Components/LaLiga';

class App extends Component {



    public render() {
        return (
            <div className="container">
                <LaLigaProvider>

                    <Equipos />

                </LaLigaProvider>
            </div>
        );
    }
}

export default App;
