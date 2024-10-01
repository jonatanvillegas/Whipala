import React, {Component} from 'react';

import ListaFarmacia from './../Components/FarmaciaComponent';

class ListaFarmaciaContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
          data : [
            {
              id: 1,
              NombreFarmacia: 'Farmacia KNOP',
              Direccion: 'San Lorenzo, Boaco',
              HorarioEntrada: '08:00 AM',
              HorarioSalida: '05:00 PM',
              Imagen: require('../../../assets/uno.png')
            },

            {
              id: 2,
              NombreFarmacia: 'Farmacia Herbotlan',
              Direccion: 'Juigalpa Chontales',
              HorarioEntrada: '08:00 AM',
              HorarioSalida: '05:00 PM',
              Imagen: require('../../../assets/HERBOTLAN.jpg')
            },
 {
              id: 2,
              NombreFarmacia: 'Farmacia Herbotlan',
              Direccion: 'Juigalpa Chontales',
              HorarioEntrada: '08:00 AM',
              HorarioSalida: '05:00 PM',
              Imagen: require('../../../assets/HERBOTLAN.jpg')
            },


          ]
        }

    }

      /*navigateFarmaciaDetalle = (farmacia) => {
        this.props.navigation.navigate('Prueba',{
          farmacia: farmacia
        })
      }*/
      
    render(){

      const { data } = this.state;

        return(
            <ListaFarmacia
               data = {data}
            />
        );
        
    }

}

export default ListaFarmaciaContainer;
