
var db = require('../dbconnection');

var  authentication= {

    userRegister: function (data,callback) {

        db.query("select * from Websiteusers where Email=? ",[data.email],function(err,rows){
    if(rows.length>0){
        db.query("insert Websiteusers set where UserName=?,Email=?,Phone=?,Address=?,CreatedBy=?,CreatedDate=?,ModifiedBy=?,ModifiedDate=? ",[data.username,data.email,data.phone,data.address,data.createdby,data.createdDate,'',''],function(err,res){
            if(res.affectedRows==1){
                callback({status:200,messsage:'inserted successfully'})
            }
            else{
                callback({status:500,messsage:'data is not inserted'})
            }
        })
    }
        })},

        userLogin: function (data,callback) {
            console.log(data)
            db.query("select * from EmpTable where EmployeeId=? and Password=?",[data.userNo,data.password ],function(err,rows){
                if(rows.length>0){
                    callback({status:200,messsage:'Employee Logined Successfully',rows})
                }
                else{
                    callback({status:500,messsage:'Invalid Login Crediantials'})
                }
            })},
  

}

module.exports = authentication;
