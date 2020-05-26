import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import './LoginPage.css';
import App from './App';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: -100,
};

const panelStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  border: 0,
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 20,
  paddingBottom: 20,
  width: 300,
};

const buttonStyle = {
  marginBottom: 0
};

class LoginPage extends Component {
  state={
    showApp:false,
    showLogin:true
  }

  handleFormSubmit = (e) => {
    
    this.setState({
      showApp:true,
      showLogin:false
    })
  }


  render() {
    return (
      <div>
      {
        this.state.showLogin ? 
        <div className="LoginPage">
        <div style={divStyle}>
          <div style={panelStyle}>
            <Form  className="LoginForm" id="loginForm">
              <FormGroup controlId="formEmail">
                <FormControl type="email" placeholder="Email Address" />
              </FormGroup>
              <FormGroup controlId="formPassword">
                <FormControl type="password" placeholder="Password" />
              </FormGroup>
              <FormGroup style={buttonStyle} controlId="formSubmit">
                <Button type="submit" onClick={() => this.handleFormSubmit()}>
                  LOGIN
              </Button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
      : null
      }
      {
        this.state.showApp ? <App /> : null
      }
      </div>
    );
  }
}

export default LoginPage;
