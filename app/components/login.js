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
       componentWillMount() {
        $(document).ready(function(){
          $("#yen").removeClass("no-skin");
              $("#yen").addClass("login-layout light-login");
        
      });
       }
       render() {
           return (
            <div>
              <div className="main-container">
			<div className="main-content">
				<div className="row">
					<div className="col-sm-10 col-sm-offset-1">
						<div className="login-container">
							<div className="center">
								<h1>
									<img src="/assets/images/logo/yencash-logo.png"/>
								</h1>
								<h4 className="blue" id="id-company-text">&copy; Mactosoft</h4>
							</div>

							<div className="space-6"></div>

							<div className="position-relative">
								<div id="login-box" className="login-box visible widget-box no-border">
									<div className="widget-body">
										<div className="widget-main">
											<h4 className="header blue lighter bigger">
												<i className="ace-icon fa fa-coffee green"></i>
												Please Enter Your Information
											</h4>

											<div className="space-6"></div>

											<form>
												<fieldset>
													<label className="block clearfix">
														<span className="block input-icon input-icon-right">
                            <input type="text" className="form-control"  placeholder="Employee No" name="userno" value={this.state.userNo} onChange={this.setValue.bind(this,'userNo')}/>
															<i className="ace-icon fa fa-user"></i>
														</span>
													</label>

													<label className="block clearfix">
														<span className="block input-icon input-icon-right">
                            <input type="password" className="form-control"  placeholder="Enter password" name="pwd" value={this.state.password} onChange={this.setValue.bind(this,'password')}/>
															<i className="ace-icon fa fa-lock"></i>
														</span>
													</label>

													<div className="space"></div>

													<div className="clearfix">
														<label className="inline">
															<input type="checkbox" className="ace" />
															<span className="lbl"> Remember Me</span>
														</label>

														<button type="submit" className="width-35 pull-right btn btn-sm btn-primary" onClick={this.login.bind(this)}>
															<i className="ace-icon fa fa-key"></i>
															<span className="bigger-110">Login</span>
														</button>
													</div>

													<div className="space-4"></div>
												</fieldset>
											</form>

											
										</div>


									</div>
								</div>				

								
							</div>

							
						</div>
					</div>
				</div>
			</div>
		</div>
            
          </div>
           );
       }
   }
   export default login;