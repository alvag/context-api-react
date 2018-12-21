import React, { Component } from 'react';

interface IAppState {
    equipos: any[];
    esCampeon: (index: number) => void;
}

const LaLigaContext = React.createContext<IAppState | null>(null);
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
        ],
        esCampeon: (index: number) => {
            const equipos = [...this.state.equipos];
            equipos[index].titulos += 1;

            this.setState({ equipos });
        }
    };

    render() {
        return (
            <LaLigaContext.Provider
                value={{
                    equipos: this.state.equipos,
                    esCampeon: this.state.esCampeon
                }}
            >
                {this.props.children}
            </LaLigaContext.Provider>
        );
    }
}

export default LaLigaProvider;
