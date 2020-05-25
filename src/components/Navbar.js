import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

class Navbar extends Component{
    render(){
        return(
            <Nav className="navbar navbar-expand-sm px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand" />    
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/' className="nav-link text-light ">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </span>
                        <b className=" m-1">My Cart</b>
                    </ButtonContainer>
                </Link>
            </Nav>

        )
    }
}

const Nav = styled.nav`
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`


export default Navbar;