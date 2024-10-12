import React, { Component } from 'react';
import { View } from 'react-native';

export default class componentName extends Component {

  constructor(props) {
    super(props);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  }
  render() {
    return (
      <RegistroComponent/>
    );
  }
}
