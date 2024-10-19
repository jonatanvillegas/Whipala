import React, { Component } from 'react';

import ComprarPedido from './../../Components/Comprar/ComprarEntregaPedido';

class ComprarEntregaPedido extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          Nombre: 'Farmacia KNOP',
          Direccion: 'De la gasolinera puma 200 metros al este, 250 metro Norte'
        },
        {
          id: 2,
          Nombre: 'Farmacia LONG',
          Direccion: 'De la gasolinera puma 200 metros al este, 250 metro Norte'
        },
                {
          id: 3,
          Nombre: 'Farmacia KNOP',
          Direccion: 'De la gasolinera puma 200 metros al este, 250 metro Norte'
        },
        {
          id: 4,
          Nombre: 'Farmacia LONG',
          Direccion: 'De la gasolinera puma 200 metros al este, 250 metro Norte'
        },
        
        
      ]
    }

  }

  render() {
    const { data } = this.state
    return (
      <ComprarPedido
        data={data}
      />
    );

  }

}

export default ComprarEntregaPedido;
