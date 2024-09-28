import React, {Component} from 'react';

import ListaFarmacia from './../Components/FarmaciaComponent';

class ListaFarmaciaContainer extends Component {

    constructor(props){
        super(props);
    }

      /*navigateFarmaciaDetalle = (farmacia) => {
        this.props.navigation.navigate('Prueba',{
          farmacia: farmacia
        })
      }*/
      
    render(){

        return(
            <ListaFarmacia
               
            />
        );
        
    }

}

export default ListaFarmaciaContainer;