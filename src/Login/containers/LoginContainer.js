import React, { Component } from 'react'
import Login from '../components/LoginComponent';

export class LoginContainer extends Component {

  constructor(props) {
    super(props);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  }


  render() {



    return (
      <Login
        
      />
    )
  }
}

export default LoginContainer
