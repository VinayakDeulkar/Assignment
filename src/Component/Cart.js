import React, { Component } from 'react'
import data from '../product.json';
export class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             proData:[],
             Carts:[],Total:0
        }
    }
    componentDidMount(){
        let arr=JSON.parse(localStorage.getItem('mycart'));
        this.setState({proData:data.product,Carts:arr})
    }
    render() {
       
    
        return (
            <>
            <hr />
    <div className="container-fluid">
        <h1 className="text text-center">  Cart Billing</h1>
        <div className="row">
            <div className="col-lg offset-lg">
                <div className="cart_container">
                    <div className="cart_title text text-center">Shopping Cart<small>  </small></div>
                    <br />
                    <div className="cart_items">
                            

                        <ul className="cart_list">
                        {this.state.Carts.map((car)=>
                        <div key={car.id}>
                            {this.state.proData.map((pro)=>
                            <div key={pro.id}>
                              {car.id===pro.id? 
                              
                            <li className="cart_item clearfix">
                                <div className="cart_item_image"><img src={`${pro.image}`} alt="" /></div>
                                <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                    <div className="cart_item_name cart_info_col">
                                       
                                        <div className="cart_item_text">{pro.pname}</div>
                                    </div>
                                    
                                    <div className="cart_item_quantity cart_info_col">
                                        <div className="cart_item_text">{car.quantity}(quantity)</div>
                                    </div>
                                    <div className="cart_item_price cart_info_col">
                                        <div className="cart_item_text">${pro.price}</div>
                                    </div>
                                    <div className="cart_item_total cart_info_col">
                                        <div className="cart_item_text">{parseInt(pro.price)*parseInt(car.quantity)}</div>
                                    </div>
                                </div>
                                <hr />
                            </li>:''
                            }</div>
                        )}</div>
                        )}
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

            </>
        )
    }
}

export default Cart