import React from 'react';
import './Admin.css';

class Admin extends React.Component{

    state = {
        productList: [
            {name: 'Cho', quantity: 10, price: 10.0},
            {name: 'Cho2', quantity: 10, price: 10.0},
            {name: 'Cho3', quantity: 10, price: 10.0},
            {name: 'Cho4', quantity: 10, price: 10.0},
        ]
    }
    pricePattern = new RegExp(/^\d*(\.\d{0,2})?$/, 'g');

    change = (evt, index) => {
        const {name,value} = evt.target;
        let { productList } = this.state;

        if(name === 'price' && ! this.pricePattern.test(value)) {
            return;
        } 
        productList = [...productList];
        productList[index][name] = value;
        this.setState(productList);
        
    }
    renderProduct = (product, index) => {
        const { name, quantity, price} = product;

        return (
            <tr key={index} >
                <td>{name}</td>
                <td>
                    <input type="number" name="quantity" value={quantity} onChange={ evt => this.change(evt, index)}/>
                </td>
                <td><input type="number" step="0.01" onChange={ evt => this.change(evt, index)} name="price" value={price}/></td>
            </tr>
        );
    }

    save = () => {

    }
    
    clear = () => {
    }

    add = () => {
        //redirect to new page
    }

    render() {
        const {productList} = this.state;

        return (
            <div className="Admin">
            <header className="Admin-header">
                Vending Machine - Admin
            </header>
            <section>
                <table>
                    <thead>
                        <tr>
                        <th>
                            Product
                        </th>
                        <th>
                            Quantity
                        </th>
                        <th>
                            Price
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productList.map( (product, index) => this.renderProduct(product, index))
                        }
                    </tbody>
                </table>
                <div className="action-btn">
                    
                    <button className="cancel" onClick={this.add}>Add New Product</button>
                    <button className="cancel" onClick={this.clear}>Clear</button>
                    <button className="submit" onClick={this.save}>Save</button>
                </div>
            </section>
            </div>
        );
    }
}

export default Admin;
