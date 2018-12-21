import React, { Component } from 'react';

interface IAppState {
    equipos: any[];
}

const LaLigaContext = React.createContext<IAppState>({ equipos: [] });
export { LaLigaContext };

class LaLigaProvider extends Component<{}, IAppState> {

    state = {
        equipos: [
            {
                nombre: 'Real Madrid',
                titulos: 35
            },
            {
                nombre: 'Barcelona',
                titulos: 25
            },
            {
                nombre: 'Atlético Madrid',
                titulos: 10
            }
        ]
    };

    render() {
        return (
            <LaLigaContext.Provider
                value={{
                    equipos: this.state.equipos
                }}
            >
                {this.props.children}
            </LaLigaContext.Provider>
        );
    }
}

export default LaLigaProvider;
