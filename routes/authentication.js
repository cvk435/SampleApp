
var express = require('express');
var router = express.Router();
var authentication = require('../models/authentication');

            router.post('/:type', function(req, res, next) {
                if(req.params.type =='login'){
                    authentication.userLogin(req.body,function(err, rows) {
                        if (err) {
                            res.json(err);
                        } else {
                            res.json(rows);
                        }
                    });
                }else if(req.params.type =='register'){
                    authentication.userRegister(req.body,function(err, rows) {
                        if (err) {
                            res.json(err);
                        } else {
                            res.json(rows);
                        }
                    });
                }
         
                    
                });
           
    module.exports = router;
