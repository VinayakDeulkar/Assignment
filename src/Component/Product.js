import React, { Component } from 'react'
import data from '../product.json'
import Cart from './Cart';

export class Product extends Component {
    constructor(props){
        super(props);
        this.state={proData:[],count:'',Carting:[]};
    }
    componentDidMount(){
        
        this.setState({proData:data.product})
        let arr=JSON.parse(localStorage.getItem('mycart'));
        if(arr!=undefined){
            this.setState({
                count:arr.length
            })
        }
        
    }
    addcart=(id)=>{
        
        console.log(id);
        if(localStorage.getItem('mycart')!=undefined){
            let arr=JSON.parse(localStorage.getItem('mycart'));
            
            if(arr.some(arra=>arra.id===id)){
                let ObjIndex=arr.findIndex((obj=>obj.id===id))
                arr[ObjIndex].quantity+=1;
                localStorage.setItem('mycart',JSON.stringify(arr));
                this.setState({
                    count:arr.length
                })
                alert("product quantity has been increase product quantity:" +arr[ObjIndex].quantity);
            }
            else{
                
                let store={'id':id,'quantity':1} ;
                arr.push(store)
                localStorage.setItem('mycart',JSON.stringify(arr));
                this.setState({
                    count:arr.length
                })
                alert("product add to cart");
            }
        }
        else{
            
            let arr=[];
            let store={'id':id,'quantity':1} ;
            arr.push(store)
            localStorage.setItem('mycart',JSON.stringify(arr));
            this.setState({
                count:arr.length
            })
            alert("product add to cart");
            
        }
        
    }
    
    render() {
        
        return (
            <div>
                
                <div>
                <nav className="nav">
                        <a className="nav-link active" href="a" >Home</a>
                        <a className="nav-link" href="a">Cart <i className="fa fa-shopping-cart mr-2"></i> {this.state.count}</a>
                        <a className="nav-link" href="a">profile</a>
                        <a className="nav-link " href="a">Disabled</a>
                </nav>
            </div>
                <div className="row mr-4">
                
                    
                    {this.state.proData.map((pro)=>
                    
                        <div key={pro.id} className="col-lg-3 col-sm-3 col-md-3  m-5">
                            <div className="card p-2">
                                
                                <img src={`${pro.image}`} alt="hello" className="card-img"/>
                                
                            <div className="card-body">
                                <h5 className="card-title text-center"><br/>{pro.pname}</h5>
                                <p className="card-text text-center">Price:{pro.price}</p>
                                <p className="text-center"><button className="btn btn-info" onClick={()=>this.addcart(pro.id)}><i className="fa fa-shopping-cart mr-2"></i>Add to cart</button></p>
                            </div>
                            </div>
                        </div>
                    
                    ) }
                </div>
                
                <Cart  />

            </div>
            


        )
    }
}

export default Product
