
var db = require('../dbconnection');

var  authentication= {

    addQuestion: function (data,callback) {

        db.query("select * from Questions where Question=? ",[data.question],function(err,rows){
  
            if(rows.length==0){
                console.log(data,'test')
          
                db.query("insert Questions set Question=?,OptionA=?,OptionB=?,OptionC=?,RightAnswer=?,NoViews=?,status=?,Subject=?,PostedBy=?,postedDate=?",[data.question,data.optionA,data.optionB,data.optionC,data.rightAnswer,0,'',data.subject,data.userId,data.postedDate],function(err,res){
 
            if(res.affectedRows==1){
                callback({status:200,messsage:'inserted successfully'})
            }
            else{
                callback({status:500,messsage:'data is not inserted'})
            }
        })
    }
        })},

   
   

}

module.exports = authentication;
