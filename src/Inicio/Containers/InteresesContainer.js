import React, { Component } from 'react';

import ComprarProducto from './../Components/InteresesComponent';

class InteresesContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
        data:
            {
                Titulo: 'Prevención del Cáncer con Medicina Natural.',
                FechaPublicacion: '12 de Octubre, 2024',
                ImagenFondo: require ('../../../assets/Movil/fondo1.png'),
                Text1: 'Las siguientes son hierbas que se usan comunmente y los efectos secundarios que causan con el tratamiento contra el cancer.',
                Texto2: 'Esta informacion no cubre todos los remedios herbales ni sus posibles efectos secundarios. Si tiene preguntas o inquitudes, hable con el proveedor de cuidadps de la salud',
                Datos: [
                    {
                        id: 1,
                        TextoP: 'Algunas remedios herbales pueden ser utilizados para prevenir o controlar los efectos secundarios del cancer o del tratamiento. Los remedios herbales que pueden ayudarle dependen de los sintomas que tengan y del tratamiento que siga'
                    },
                    {
                        id: 2,
                        TextoP: 'Aunque puedan parecer seguros, es posible que no todos los sean. Los remedios herbales no paran por los mismos controles que los medicamentos recetados para asegurar su funcionamiento y seguridad.'
                    },
                    
                ]

            },

        dataList: [
            {
                id: 1,
                Titulo: 'Equinacea',
                Imag: require ('../../../assets/Movil/ajo.png'),
            },
            {
                id: 2,
                Titulo: 'Equinacea',
                Imag: require ('../../../assets/Movil/ajo.png'),
            },
            {
                id: 3,
                Titulo: 'Equinacea',
                Imag: require ('../../../assets/Movil/ajo.png'),
            },
            {
                id: 4,
                Titulo: 'Equinacea',
                Imag: require ('../../../assets/Movil/ajo.png'),
            },
        ]
        
    }
  }

  render() {

    const { data, dataList}  = this.state

    return (
      <ComprarProducto
        data = {data}
        dataList = {dataList}
      />
    );

  }

}

export default InteresesContainer;
