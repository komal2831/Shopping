import React, { Component } from 'react'

export default class EmptyCart extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="text-center col-10 mx-auto text-title">
                        <h1>your cart is currently empty</h1>
                    </div>
                </div>
            </div>
        )
    }
}
