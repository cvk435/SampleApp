/* Importing the node modules, child components, services and controllers used 
   inside FivestarHeader component */
   import React from 'react';
   import {Link} from 'react-router-dom';
   import $ from "jquery";
   import UsersService from '../../services/usersService';
   /* FivestarHeader Component initialization */
   class login extends React.Component {
     /* Initializing objects of its FivestarHeader class */
       constructor(props) {
           super(props)
           /* FivestarHeader Component State variables Initialization */
           this.state = {
            activeIndex: 0,
            userNo: '',
            password: '',
            message:'',
            color:''
         }
   
       }

// object creation 
       setValue(field, e) {
        var object = {};
        object[field] = e.target.value;
        this.setState(object);
      }
// login method
       async login(e){
        e.preventDefault();
         if(this.state.userNo !='' && this.state.password !='')
         {
          const loginDetails={
            userNo:this.state.userNo,
            password:this.state.password
        }
        const response=await UsersService.sigin(loginDetails)
        if(response.status==200){
          localStorage.setItem('userData', JSON.stringify(response.rows[0]));
          this.setState({message:'your Details is not matched ',color:'green'})
          location.href='/admin/dashboard'
        }else{
          this.setState({message:'your Details is not matched ',color:'red'})

        }
         }
   else{
        this.setState({message:'Please Enter Valid Details',color:'red'})
        }
    
       }
       componentDidMount() {
       
       }
       render() {
           return (
            <div>
            <div className="container col-xs-3">
            <h2>Yencash</h2>
            <h1 style={{color:this.state.color}}>{this.state.message}</h1>
            <form >
           
              <div className="form-group ">
                <label  htmlFor="email">Email:</label>
                <input type="text" className="form-control"  placeholder="Employee No" name="userno" value={this.state.userNo} onChange={this.setValue.bind(this,'userNo')}/>
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input type="password" className="form-control"  placeholder="Enter password" name="pwd" value={this.state.password} onChange={this.setValue.bind(this,'password')}/>
              </div>
             
              <button type="submit" className="btn btn-default" onClick={this.login.bind(this)}>Login</button>

               <Link to="/register"><button type="submit" className="btn btn-default" >Register</button></Link>
            </form>
          </div>
          </div>
           );
       }
   }
   export default login;