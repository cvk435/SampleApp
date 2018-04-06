/* Importing the node modules, child components, services and controllers used 
   inside FivestarHeader component */
   import React from 'react';
   import {Link} from 'react-router-dom';
   import NavBar from '../../common/navBar';
   import Settings from '../../common/settings';
   /* FivestarHeader Component initialization */
   class Home extends React.Component {
     /* Initializing objects of its FivestarHeader class */
       constructor(props) {
           super(props)
           /* FivestarHeader Component State variables Initialization */
           this.state = {
              activeIndex: 0
           }
   
       }
       componentDidMount() {
       }
       render() {
           return (
               <div>
              


		<div className="main-container ace-save-state" id="main-container">
			<script type="text/javascript">
				try{ace.settings.loadState('main-container')}catch(e){}
			</script>
			<NavBar/>
			<div className="main-content">
				<div className="main-content-inner">
					<div className="breadcrumbs ace-save-state" id="breadcrumbs">
						<ul className="breadcrumb">
							<li>
								<i className="ace-icon fa fa-home home-icon"></i>
								<a href="#">Home</a>
							</li>

							<li>
								<a href="quiz-dashboard.html">Quiz</a>
							</li>
							<li className="active">Add Questions</li>
						</ul>
            {/* <!-- /.breadcrumb --> */}

						<div className="nav-search" id="nav-search">
							<form className="form-search">
								<span className="input-icon">
									<input type="text" placeholder="Search ..." className="nav-search-input" id="nav-search-input" autoComplete="off" />
									<i className="ace-icon fa fa-search nav-search-icon"></i>
								</span>
							</form>
						</div>
            {/* <!-- /.nav-search --> */}
					</div>

					<div className="page-content">
				<Settings/>
            {/* <!-- /.ace-settings-container --> */}

						<div className="row">
							<div className="col-xs-12">
								{/* <!-- PAGE CONTENT BEGINS --> */}
								<h3 className="header smaller lighter blue">Add Questions</h3>
									<form className="form-horizontal" role="form">
										<div className="form-group">
											<label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-1"> Question</label>

											<div className="col-sm-9">
												<textarea className="col-xs-10 col-sm-8" id="form-field-1" placeholder="Default Text"></textarea>
											</div>
										</div>
										
										<div className="form-group">
											<label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-1"> Option A </label>

											<div className="col-sm-9">
												<input type="text" id="form-field-1" placeholder="Answer A" className="col-xs-12 col-sm-3" />
											</div>											
										</div>
										<div className="form-group">
											<label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-1"> Option B </label>

											<div className="col-sm-9">
												<input type="text" id="form-field-1" placeholder="Answer A" className="col-xs-12 col-sm-3" />
											</div>											
										</div>
										<div className="form-group">
											<label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-1"> Option C </label>

											<div className="col-sm-9">
												<input type="text" id="form-field-1" placeholder="Answer A" className="col-xs-12 col-sm-3" />
											</div>											
										</div>
										<div className="form-group">
											<label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-1"> Option D </label>

											<div className="col-sm-9">
												<input type="text" id="form-field-1" placeholder="Answer A" className="col-xs-12 col-sm-3" />
											</div>											
										</div>
										<div className="form-group">
											<label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-1"> Right Answer </label>

											<div className="col-sm-9">
												<select className="col-xs-12 col-sm-3" id="form-field-select-1">
																<option value="">Select Right Answer</option>
																<option value="AL">A</option>
																<option value="AK">B</option>
																<option value="AZ">C</option>
																<option value="AZ">D</option>
												</select>				
											</div>											
										</div>
										<div className="form-group">
											<label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-1"> Subject </label>

											<div className="col-sm-9">
												<select className="col-xs-12 col-sm-3" id="form-field-select-1">
																<option value="">Select Right Answer</option>
																<option value="AL">A</option>
																<option value="AK">B</option>
																<option value="AZ">C</option>
																<option value="AZ">D</option>
												</select>				
											</div>											
										</div>	
										<div className="clearfix form-actions">
											<div className="col-md-offset-3 col-md-9">
												<button className="btn btn-info" type="button">
													<i className="ace-icon fa fa-check bigger-110"></i>
													Submit
												</button>

												&nbsp; &nbsp; &nbsp;
												<button className="btn" type="reset">
													<i className="ace-icon fa fa-undo bigger-110"></i>
													Reset
												</button>
											</div>
										</div>										
									</form>
								
								{/* <!-- PAGE CONTENT ENDS --> */}
							</div>
              {/* <!-- /.col --> */}
						</div>
            {/* <!-- /.row --> */}
					</div>
          {/* <!-- /.page-content --> */}
				</div>
			</div>
      {/* <!-- /.main-content --> */}

		
		</div>


               </div>
           );
       }
   }
   export default Home;