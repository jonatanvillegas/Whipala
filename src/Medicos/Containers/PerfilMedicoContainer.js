import React, {Component} from 'react';

import PerfilMedico from '../Components/PerfilMedicoComponent';

class PerfilMedicoContainer extends Component {

    constructor(props){
        super(props);

      this.state = {
        data : [
          {
            id: 1,
            NombreDoctor: 'Carlos Hernandez',
            Especialidad: 'Cardiologo',
            Cuidad: 'Juigalpa',
            Departamento: 'Chontales',
            Imagen: require('../../../assets/doc.jpg')
          },
          {
            id: 2,
            NombreDoctor: 'Marcelo Lñaqui',
            Especialidad: 'Cardiologo',
            Cuidad: 'Juigalpa',
            Departamento: 'Chontales',
            Imagen: require('../../../assets/salvadorcasado.jpg')
          },
          {
            id:3,
            NombreDoctor: 'Carlos Hernandez',
            Especialidad: 'Cardiologo',
            Cuidad: 'Juigalpa',
            Departamento: 'Chontales',
            Imagen: require('../../../assets/doc.jpg')
          },
          {
            id: 4,
            NombreDoctor: 'Marcelo Lñaqui',
            Especialidad: 'Cardiologo',
            Cuidad: 'Juigalpa',
            Departamento: 'Chontales',
            Imagen: require('../../../assets/salvadorcasado.jpg')
          },
          {
            id: 5,
            NombreDoctor: 'Carlos Hernandez',
            Especialidad: 'Cardiologo',
            Cuidad: 'Juigalpa',
            Departamento: 'Chontales',
            Imagen: require('../../../assets/doc.jpg')
          },
          {
            id: 6,
            NombreDoctor: 'Marcelo Lñaqui',
            Especialidad: 'Cardiologo',
            Cuidad: 'Juigalpa',
            Departamento: 'Chontales',
            Imagen: require('../../../assets/salvadorcasado.jpg')
          },
        ],
      }

    }
      
    render(){

      const { data, dataFiltro } = this.state;

        return(
            <PerfilMedico
               data = {data}
            />
        );
        
    }

}

export default PerfilMedicoContainer;
