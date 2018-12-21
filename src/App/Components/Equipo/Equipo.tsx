import React, { Component } from 'react';
import { LaLigaContext } from '../LaLiga';

class Equipo extends Component {

    render() {
        return (
            <LaLigaContext.Consumer>
                {(context) => context && (
                    context.equipos.map((equipo, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between">
                            <p className="m-0">
                                {equipo.nombre}
                                <span className="badge badge-danger ml-4">{equipo.titulos}</span>
                            </p>
                            <button
                                className="btn btn-success"
                                onClick={() => {
                                    context.esCampeon(index);
                                }}
                            >Es campeón
                            </button>
                        </li>
                    ))
                )}
            </LaLigaContext.Consumer>
        );
    }
}

export default Equipo;
