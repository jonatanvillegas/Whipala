import React, { Component } from 'react';

import ComprarProducto from './../Components/DetallePlantasComponent';

class ProductoContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
        data:
            {
                Nombre: 'Equinacea',
                Tipo: 'Flores',
                Descripcion: 'La equinácea, tambien conocida como Echinacea, es un genero de plantas con flores pertenecientes a la familia Asteracea.',
                IconUNo: '',
                TituloIcon1: 'Defensa',
                IconoDos: '',
                TituloIcon2: 'Cicatrizacion',
                Icono3: '',
                TituloIcon3: 'Salud',
                ImagenFondo: require ('../../../assets/Movil/Fondo.png'),
                ImagenFrente: require('../../../assets/Movil/Uno.png'),
                Caracteristicas: [
                    {
                        id: 1,
                        Texto: 'Los estudios sobre el papel que desempeña la equinacea en la prevención y/o el tratamiento del resfriado común son inconcientes. el facto mas importante que contribuye a la inconsiciencia es la variabilidad de las preparaciones de plantas (incluyendo diferentes partes de plantas y especiales) y los ingredientes del suplemento.'
                    },
                    {
                        id: 2,
                        Texto: 'Algunas pruebas preliminares muestran que tomar equinacea puede ayudar a reducir algunas de las moleculas inflamatorias (citocinas) que participan en la infeccion por COVID-19 y puede ayudar a disminuir la aparicion del sindrome de dificultad respiratoria aguda (SDRA) que ocurre en algunas personas. Sin embargo, esto ultimo no ah sido comprobado.'
                    },
                    {
                        id: 3,
                        Texto: 'No existen estudios cientificos riguroso que respalden las afirmaciones de que la equinacea ayuda a prevenir el cancer o mejorar la inmunidad, el azucar en sangre, la ansiedad y la inflamacion, o promueve la curacion de heridas.'
                    },
                    {
                      id: 4,
                      Texto: 'No existen estudios cientificos riguroso que respalden las afirmaciones de que la equinacea ayuda a prevenir el cancer o mejorar la inmunidad, el azucar en sangre, la ansiedad y la inflamacion, o promueve la curacion de heridas.'
                  },
                  {
                    id: 5,
                    Texto: 'No kjhi existen estudios cientificos riguroso que respalden las afirmaciones de que la equinacea ayuda a prevenir el cancer o mejorar la inmunidad, el azucar en sangre, la ansiedad y la inflamacion, o promueve la curacion de heridas.'
                },  
                ]

            }
        
    }
  }

  render() {

    const { data}  = this.state

    return (
      <ComprarProducto
        data = {data}
      />
    );

  }

}

export default ProductoContainer;
