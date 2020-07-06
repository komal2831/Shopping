import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart/Cart';
import Details from './components/Details';
import Default from './components/Default';
import Modal from './components/Modal';
import Footar from './components/Footar';
import Connect from './components/Connect';
import ProductSample from './components/ProductSample';
import ProductDetails from './components/SiteInfoAndDetail/ProductDetails';
import DirectLink from './components/SiteInfoAndDetail/DirectLink';


const FrontPage = () => (
  <div>
    {/* <ProductSample /> */}
    <Connect />
    <DirectLink />
    <ProductDetails />
    <Footar />
  </div>
)

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" exact component={FrontPage} />
          <Route path="/Mobiles" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/facebook" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
