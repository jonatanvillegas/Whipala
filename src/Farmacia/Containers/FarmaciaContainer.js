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
              id: 3,
              NombreFarmacia: 'Farmacia Herbotlan',
              Direccion: 'Juigalpa Chontales',
              HorarioEntrada: '08:00 AM',
              HorarioSalida: '05:00 PM',
              Imagen: require('../../../assets/HERBOTLAN.jpg')
            },
            {
              id: 4,
              NombreFarmacia: 'Farmacia KNOP',
              Direccion: 'San Lorenzo, Boaco',
              HorarioEntrada: '08:00 AM',
              HorarioSalida: '05:00 PM',
              Imagen: require('../../../assets/uno.png')
            },

            {
              id: 5,
              NombreFarmacia: 'Farmacia Herbotlan',
              Direccion: 'Juigalpa Chontales',
              HorarioEntrada: '08:00 AM',
              HorarioSalida: '05:00 PM',
              Imagen: require('../../../assets/HERBOTLAN.jpg')
            },
 {
              id: 6,
              NombreFarmacia: 'Farmacia Herbotlan',
              Direccion: 'Juigalpa Chontales',
              HorarioEntrada: '08:00 AM',
              HorarioSalida: '05:00 PM',
              Imagen: require('../../../assets/HERBOTLAN.jpg')
            },

          ],

          dataFiltro: [
            {
              id: 1,
              Nombre: 'Boaco',
              Capital: 'Boaco',
              Codigo: 'BO'
            },
            {
              id: 2,
              Nombre: 'Carazo',
              Capital: 'Jinotepe',
              Codigo: 'CA'
            },
            {
              id: 3,
              Nombre: 'Chinandega',
              Capital: 'Chinandega',
              Codigo: 'CI'
            },
            {
              id: 4,
              Nombre: 'Chontales',
              Capital: 'Juigalpa',
              Codigo: 'CO'
            },
            {
              id: 5,
              Nombre: 'Estelí',
              Capital: 'Estelí',
              Codigo: 'ES'
            },
            {
              id: 6,
              Nombre: 'Granada',
              Capital: 'Graada',
              Codigo: 'GR'
            },
            {
              id: 7,
              Nombre: 'Jinotega',
              Capital: 'Jinotega',
              Codigo: 'JI'
            },
            {
              id: 8,
              Nombre: 'León',
              Capital: 'León',
              Codigo: 'LE'
            },
            {
              id: 9,
              Nombre: 'Madriz',
              Capital: 'Somoto',
              Codigo: 'MA'
            },
            {
              id: 10,
              Nombre: 'Managua',
              Capital: 'Managua',
              Codigo: 'MN'
            },
            {
              id: 11,
              Nombre: 'Masaya',
              Capital: 'Masaya',
              Codigo: 'MS'
            },
            {
              id: 12,
              Nombre: 'Matagalpa',
              Capital: 'Matagalpa',
              Codigo: 'MT'
            },
            {
              id: 13,
              Nombre: 'Nueva Segovia',
              Capital: 'Ocotal',
              Codigo: 'NS'
            },
            {
              id: 14,
              Nombre: 'Rivas',
              Capital: 'Rivas',
              Codigo: 'RI'
            },
            {
              id: 15,
              Nombre: 'Río San Juan',
              Capital: 'San Carlos',
              Codigo: 'RS'
            },
            {
              id: 16,
              Nombre: 'Atlántico Norte',
              Capital: 'Puerto Cabezas',
              Codigo: 'AN'
            },
            {
              id: 17,
              Nombre: 'Atlántico Sur',
              Capital: 'Bluefields',
              Codigo: 'AS'
            }
          ]
        }

    }

      /*navigateFarmaciaDetalle = (farmacia) => {
        this.props.navigation.navigate('Prueba',{
          farmacia: farmacia
        })
      }*/
      
    render(){

      const { data, dataFiltro } = this.state;

        return(
            <ListaFarmacia
               data = {data}
               dataFiltro = {dataFiltro}
               dataFarmacia = {data}
            />
        );
        
    }

}

export default ListaFarmaciaContainer;
