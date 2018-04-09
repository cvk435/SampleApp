/* Importing the node modules, child components, services and controllers used 
   inside FivestarHeader component */
   import React from 'react';
   import {Link} from 'react-router-dom';
   import Quizquestions from '../../../services/quizquestions';
   import moment from 'moment'
   /* FivestarHeader Component initialization */
   class AddQuestions extends React.Component {
     /* Initializing objects of its FivestarHeader class */
       constructor(props) {
           super(props)
           /* FivestarHeader Component State variables Initialization */
           this.state = {
              activeIndex: 0,
              question:'',
              optionA:'',
              optionB:'',
              optionC:'',
              rightAnswer:'',
              subject:'',
              message:'',
              color:''
           }
   
       }

       async addQuestions(){
        const userData = localStorage.getItem('userData')
        const UserId=JSON.parse(userData).UserId
           const questions={
            question:this.state.question,
            optionA:this.state.optionA,
            optionB:this.state.optionB,
            optionC:this.state.optionC,
            rightAnswer:this.state.rightAnswer,
            subject:this.state.subject,
            userId:UserId,
            postedDate:moment()
           }
         
           const response=await Quizquestions.addquestions(questions)
           if(response.status==200){
            this.setState({
                message:'succesfully posted',
                color:'green',
                question:'',
                optionA:'',
                optionB:'',
                optionC:'',
                rightAnswer:'',
                subject:'',
               
            })
           }
           else{
            this.setState({message:'not inserted ',color:'red'})
           }
       }
       restQuestion(){
           this.setState({    question:'',
           optionA:'',
           optionB:'',
           optionC:'',
           rightAnswer:'',
           subject:'',
           message:'',
           color:''})
       }
// object creation 
setValue(field, e) {
    this.setState({message:' ',color:''})
    var object = {};
    object[field] = e.target.value;
    this.setState(object);
  }
       componentDidMount() {
       }
       render() {
           return (
            <div className="row">
            <div className="col-xs-12">
                {/* <!-- PAGE CONTENT BEGINS --> */}
                <h3 className="header smaller lighter blue">Add Questions</h3>
                <h4 style={{color:this.state.color}}>{this.state.message}</h4>
                    <form className="form-horizontal" role="form">
                        <div className="form-group">
                            <label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-1"> Question</label>

                            <div className="col-sm-9">
                                <textarea className="col-xs-10 col-sm-8" id="form-field-1" placeholder="Default Text" value={this.state.question} onChange={this.setValue.bind(this,'question')}></textarea>
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-1"> Option A </label>

                            <div className="col-sm-9">
                                <input type="text" id="form-field-1" placeholder="Answer A" className="col-xs-12 col-sm-3" value={this.state.optionA} onChange={this.setValue.bind(this,'optionA')}/>
                            </div>											
                        </div>
                        <div className="form-group">
                            <label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-1"> Option B </label>

                            <div className="col-sm-9">
                                <input type="text" id="form-field-1" placeholder="Answer A" className="col-xs-12 col-sm-3" value={this.state.optionB} onChange={this.setValue.bind(this,'optionB')}/>
                            </div>											
                        </div>
                        <div className="form-group">
                            <label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-1"> Option C </label>

                            <div className="col-sm-9">
                                <input type="text" id="form-field-1" placeholder="Answer A" className="col-xs-12 col-sm-3" value={this.state.optionC} onChange={this.setValue.bind(this,'optionC')}/>
                            </div>											
                        </div>
                    
                        <div className="form-group">
                            <label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-1"> Right Answer </label>

                            <div className="col-sm-9">
                            <input type="text" id="form-field-1" placeholder="Right Answer" className="col-xs-12 col-sm-3" value={this.state.rightAnswer} onChange={this.setValue.bind(this,'rightAnswer')}/>		
                            </div>											
                        </div>
                        <div className="form-group">
                            <label className="col-sm-3 control-label no-padding-right" htmlFor="form-field-1" > Subject </label>

                            <div className="col-sm-9">
                                <select className="col-xs-12 col-sm-3" id="form-field-select-1" value={this.state.subject} onChange={this.setValue.bind(this,'subject')}>
                                                <option value="">Select Right Answer</option>
                                                <option value="English">English</option>
                                                <option value="Maths">Maths</option>
                                                <option value="Science">Science</option>
                                                <option value="Social">Social</option>
                                </select>				
                            </div>											
                        </div>	
                        <div className="clearfix form-actions">
                            <div className="col-md-offset-3 col-md-9">
                                <button className="btn btn-info" type="button" onClick={this.addQuestions.bind(this)}>
                                    <i className="ace-icon fa fa-check bigger-110"></i>
                                    Submit
                                </button>

                                &nbsp; &nbsp; &nbsp;
                                <button className="btn" type="reset" onClick={this.restQuestion.bind(this)}>
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
           );
       }
   }
   export default AddQuestions;