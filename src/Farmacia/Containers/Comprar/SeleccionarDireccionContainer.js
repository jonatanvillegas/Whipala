import React, { Component } from 'react';

import SeleccionarDireccion from './../../Components/Comprar/SeleccionarDireccion';

class SeleccionarDireccionContainer extends Component {

  constructor(props) {
    super(props);
    this.state =
    {
      data: [
        {
          id: 1,
          Lugar: 'Casa',
          Direccion: 'De la puma 75 varas al Oeste, 500 varas al Sur.',
        },
        {
          id: 2,
          Lugar: 'Mi Trabajo',
          Direccion: 'De la puma 75 varas al Oeste, 500 varas al Sur.',
        },
        {
          id: 3,
          Lugar: 'Casa',
          Direccion: 'De la puma 75 varas al Oeste, 500 varas al Sur.',
        },
        {
          id: 4,
          Lugar: 'Mi Trabajo',
          Direccion: 'De la puma 75 varas al Oeste, 500 varas al Sur.',
        },
        {
          id: 5,
          Lugar: 'Casa',
          Direccion: 'De la puma 75 varas al Oeste, 500 varas al Sur.',
        },
        {
          id: 6,
          Lugar: 'Mi Trabajo',
          Direccion: 'De la puma 75 varas al Oeste, 500 varas al Sur.',
        },
      ]
    }
  }

  render() {

    const { data } = this.state;

    return (
      <SeleccionarDireccion
        data={data}
      />
    );

  }

}

export default SeleccionarDireccionContainer;
