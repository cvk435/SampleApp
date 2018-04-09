'use strict'
import serviceBase from './serviceBase'
const usersService = {
    addquestions:(data)=>serviceBase.post('/quiz/addquestion',data),
    // sigin:(data)=>serviceBase.post('/users/login',data),
}
export default usersService