/* Importing the node modules, child components, services and controllers used 
   inside FivestarHeader component */
   import React from 'react';
   import {Link} from 'react-router-dom';

   /* FivestarHeader Component initialization */
   class register extends React.Component {
     /* Initializing objects of its FivestarHeader class */
       constructor(props) {
           super(props)
           /* FivestarHeader Component State variables Initialization */
           this.state = {
              activeIndex: 0,
              email: '',
              password: ''
           }
   
       }
       setValue(field, e) {
        var object = {};
        object[field] = e.target.value;
        this.setState(object);
      }
       login(){
        const loginDetails={
            email:this.state.email,
            password:this.state.password
        }
        console.log(loginDetails,'-----------test')
       }
       componentDidMount() {
       }
       render() {
           return (
               <div>
            <div className="container">
            <h2>Vertical (basic) form</h2>
            <form action="/action_page.php">
            <div className="form-group">
                <label for="email">UserName:</label>
                <input type="email" className="form-control"  placeholder="Enter email" name="email" value={this.state.email} onChange={this.setValue.bind(this,'email')}/>
              </div>
              <div className="form-group">
                <label for="email">Email:</label>
                <input type="email" className="form-control"  placeholder="Enter email" name="email" value={this.state.email} onChange={this.setValue.bind(this,'email')}/>
              </div>
              <div className="form-group">
                <label for="pwd">Password:</label>
                <input type="password" className="form-control"  placeholder="Enter password" name="pwd" value={this.state.password} onChange={this.setValue.bind(this,'password')}/>
              </div>
              <div className="form-group">
                <label for="email">Phone:</label>
                <input type="email" className="form-control"  placeholder="Enter email" name="email" value={this.state.email} onChange={this.setValue.bind(this,'email')}/>
              </div>
              <div className="form-group">
                <label for="email">Adderss:</label>
                <input type="email" className="form-control"  placeholder="Enter email" name="email" value={this.state.email} onChange={this.setValue.bind(this,'email')}/>
              </div>
           
              <button type="submit" className="btn btn-default" onClick={this.login.bind(this)}>Register</button>

               <Link to="/register"><button type="submit" className="btn btn-default" >Login</button></Link>
            </form>
          </div>
          </div>
           );
       }
   }
   export default register;