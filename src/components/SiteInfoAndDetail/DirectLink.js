import React, { Component } from 'react';

class DirectLink extends Component {
    state = {}
    render() {
        return (
            <div className="bg-light text-center">
                <hr className="light" />
                <div className="container fluid">
                    <div className="row">
                        <div className="col-3">
                            <strong>ONLINE SHOPPING</strong>
                            <hr className="light" />
                            <div>Mobiles</div>
                            <div>Men</div>
                            <div>Women</div>
                            <div>Kids</div>
                        </div>
                        <div className="col-5">
                            <strong>LINKS</strong>
                            <hr className="light col-6" />
                            <div>Contact Us</div>
                            <div>Terms of use</div>
                            <div>Transactions</div>
                            <div>Shipping</div>
                        </div>
                        <div className="1">
                            <i className="fa fa-star text-danger" style={{ height: "65px", fontSize: "45px" }} /><br />
                            <i class="fa fa-exchange text-danger " style={{ height: "65px", fontSize: "45px" }} /><br />
                            <i className="fa fa-truck text-danger " style={{ fontSize: "45px" }} /><br />
                        </div>
                        <div className="col-3">
                            <p className="col-11"><strong>100% ORIGINAL </strong>guarantee for all products at myntra.com</p>
                            <p className="col-11"><strong>Return within 10days</strong> of receiving your order</p>
                            <p className="col-11"><strong>Get free delivery</strong> for every order above Rs. 499</p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default DirectLink;