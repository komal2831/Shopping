import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


class Connect extends Component {
    state = {}
    render() {
        return (
            <div className="container-fluid p-4">
                <hr className="light" />
                <div className="row text-center padding">
                    <div className="col-12">
                        <h1><strong className="capitalise">Connect</strong></h1>
                    </div>
                    <Social className="p-5 col-12 center">
                        <Link id="a1" to="/facebook"><i className="fa fa-facebook"></i></Link>
                        <a id="a2"><i className="fa fa-twitter"></i></a>
                        <a id="a3"><i className="fa fa-google-plus"></i></a>
                        <a id="a4"><i className="fa fa-instagram"></i></a>
                        <a id="a5"><i className="fa fa-youtube"></i></a>
                    </Social>
                </div>
            </div>
        );
    }
}

const Social = styled.div`
    #a1
    {
      font-size: 4rem;
      padding:60px;
      color:blue;
    }
    #a2
    {
      font-size: 4rem;
      padding:60px;
      color:skyblue;
    }
    #a3
    {
      font-size: 4rem;
      padding:60px;
      color:red;
    }
    #a4
    {
      font-size: 4rem;
      padding:60px;
      color:#e649a4;
    }
    #a5
    {
      font-size: 4rem;
      padding:60px;
      color:#9e0606;
    }
`

export default Connect;