import React, { Component } from 'react';
class Footar extends Component {
    state = {  }
    render() { 
        return ( 
            <footer>
                <div className="bg-dark text-white">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-4 col-4 text-left" style={{marginLeft:"100px"}}>
                        <hr className="light" />
                            <h4><strong>Registerd Office Address</strong></h4>
                            <hr className="light" />
                            <p>3rd Floor, Sector-3,</p>
                            <p>K.S. Info Solution, </p>
                            <p>Near Metro station</p>
                            <p>sector-16, Noida</p>
                            <p>Delhi</p>
                        </div>
                        
                        <div className="col-md-6 col-sm-6 col-xs-6 col-6 text-right" style={{marginTop:"230px"}}>
                            <h4>CIN: U72300KA21799</h4>
                            <h5>Telephone: <span className="text-info">+91-9718407710</span></h5>
                        </div>
                        
                        <div className="col-12 text-center">
                            <hr className="light-100" />
                            <h5>@komalsingh.com</h5>
                        </div>
                    </div>
                </div>
            </footer>

         );
    }
}
 
export default Footar;