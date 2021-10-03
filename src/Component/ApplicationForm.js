import React, { Component } from 'react'
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
export class Validation extends Component {
    constructor(props){
        super(props);
        this.state={
            fname:null,
            lname:null,
            email:null,
            password:null,
            address:null,
            father:null,
            mother:null,
            age:null,
            pincode:null,
            errors:{
                email:'',
                password:'',
                fname:'',
                lname:'',
                age:'',
                address:'',
                pincode:'',
                mother:'',
                father:''
            }
        }
    }
        handler=(event)=>{
            const {name,value}=event.target;
            let errors=this.state.errors;
            switch(name){
                case 'fname':
                        errors.fname=value.length<4?' must me 4 character long':'';
                        break;
                case 'father':
                        errors.father=value.length<4?' must me 4 character long':'';
                        break;
                case 'mother':
                        errors.mother=value.length<4?' must me 4 character long':'';
                        break;
                 case 'lname':
                        errors.lname=value.length<4?' must me 4 character long':'';
                        break; 
                 case 'age':
                         errors.age=value < 18 ?' age must be greater than 18':'';
                         break;              
                case 'email':
                    errors.email=regForEmail.test(value)?'':'Email is not valid';
                    break;
                case 'password':
                        errors.password=value.length<8?'Password must be 8 character long':'';
                        break;
                case 'address':
                        errors.address=value.length<20?'Password must be minimum 20 character long':'';
                        break; 
                case 'pincode':
                        errors.pincode=value.length<6?'Pincode must be of length 6':'';
                        break; 

                    break;
            }
            this.setState({errors,[name]:value},()=>{
                console.log(errors)
            })
        }
        formSubmit=(event)=>{
           event.preventDefault();
           if(this.validate(this.state.errors))
           {
               alert("Valid Form");
           }
           else {
               alert("Invalid Form");
           }
        }
         validate=(errors)=>{
            let valid=true;
            Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
            return valid;
        }
    render() {
        const {errors}=this.state;
        return (
            <div className="container container-fluid text-center">
             
                <h2> Form - Validation</h2>
                <form onSubmit={this.formSubmit}>
               First Name: <input type="text" name="fname" onChange={this.handler}/><br/> {errors.fname.length>0 && 
            <span style={{color:'red'}}>{errors.fname}</span>}<br/>
            Last Name : <input type="text" name="lname" onChange={this.handler}/><br/> {errors.lname.length>0 && 
            <span style={{color:'red'}}>{errors.lname}</span>}<br/>
             Age : <input type="text" name="age" onChange={this.handler}/><br/> {errors.age.length>0 && 
            <span style={{color:'red'}}>{errors.age}</span>}<br/>


<div> Gender </div> 
<div class="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"  />
  <label className="form-check-label" for="exampleRadios1">
    Male
  </label>
</div>
<div class="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
  <label className="form-check-label" for="exampleRadios2">
    Female
  </label>
</div>

Father's Name: <input type="text" name="father" onChange={this.handler}/><br/> {errors.father.length>0 && 
            <span style={{color:'red'}}>{errors.father}</span>}<br/>

Mother's Name: <input type="text" name="mother" onChange={this.handler}/><br/> {errors.mother.length>0 && 
            <span style={{color:'red'}}>{errors.mother}</span>}<br/>


            Email : <input type="text" name="email" onChange={this.handler}/><br/> {errors.email.length>0 && 
            <span style={{color:'red'}}>{errors.email}</span>}<br/>
            Password : <input type="password" name="password" onChange={this.handler}/><br/>
            {errors.password.length>0 && 
            <span style={{color:'red'}}>{errors.password}</span>}<br/>
             Address : <input type="textarea" name="address"  onChange={this.handler}/><br/>
            {errors.address.length>0 && 
            <span style={{color:'red'}}>{errors.address}</span>}<br/>
            Pin-code : <input type="text" name="pincode"  onChange={this.handler}/><br/>
            {errors.pincode.length>0 && 
            <span style={{color:'red'}}>{errors.pincode}</span>}<br/>

         
          <label for="inputState">State</label>
           <select id="inputState" >
          <option selected>Choose...</option>
          <option>Maharashtra</option>
          <option>Kerala</option>
          <option>Utter Pradesh</option>
          <option>Madhyapradesh</option>
          <option>Rajasthan</option>
        </select> <br />
         

            <input type="submit" value="submit" />
                </form>

            </div>
        )
    }
}

export default Validation;
