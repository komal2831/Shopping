import React, { Component } from 'react';
import App from './App';

export default class Login extends Component {
state = {
    showme: false
}

    a = () =>
    {
        this.setState({showme:true})
    }

    render() {
        return (
            <div id="slides" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators">
                    <li data-target="#slides" data-slide-to="0" class="active"></li>
                    <li data-target="#slides" data-slide-to="1"></li>
                    <li data-target="#slides" data-slide-to="2"></li>
                </ul>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="img/background.png" />
                        <div class="carousel-caption">
                            <h1 class="display-2">Bootstrap</h1>
                            <h3>Complete Website Layout</h3>
                            <button type="button" class="btn btn-outline-light btn-lg" >VIEW DEMO</button>
                            <button type="button" onClick={()=>this.a()} class="btn btn-primary btn-lg">GET STARTED</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="img/background2.png" />
                    </div>
                    <div class="carousel-item">
                        <img src="img/background3.png" />
                    </div>

                </div>

                {
                    this.state.showme ? <App /> : null
                }
            </div>
        )
    }
}
