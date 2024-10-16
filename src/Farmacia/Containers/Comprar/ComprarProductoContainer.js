import React, { Component } from 'react';

import ComprarProducto from './../../Components/Comprar/ComprarProcutoComponent';

class ProductoContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ComprarProducto/>
    );

  }

}

export default ProductoContainer;
