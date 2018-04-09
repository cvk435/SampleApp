
var express = require('express');
var router = express.Router();
var quizquestions = require('../models/quizquestions');

            router.post('/:type', function(req, res, next) {
                if(req.params.type =='addquestion'){
                    
                    quizquestions.addQuestion(req.body,function(err, rows) {
                        if (err) {
                            res.json(err);
                        } else {
                            res.json(rows);
                        }
                    });
                }
         
                    
                });
           
    module.exports = router;