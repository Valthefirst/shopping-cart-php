import React, { Component } from 'react';

class CartPage extends Component {
    state = {
        cartItems: [
            { id: 1, name: 'Item 1', price: 10, quantity: 1 },
            { id: 2, name: 'Item 2', price: 15, quantity: 2 },
            // Add more items as needed
        ]
    };

    calculateTotal = () => {
        return this.state.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    render() {
        return (
            <div>
                <h1>Your Cart</h1>
                {this.state.cartItems.map(item => (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                ))}
                <h2>Total: ${this.calculateTotal()}</h2>
            </div>
        );
    }
}

export default CartPage;