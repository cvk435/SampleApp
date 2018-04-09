'use strict'
import serviceBase from './serviceBase'
const usersService = {
    registeration:(data)=>serviceBase.post('/users/register',data),
    sigin:(data)=>serviceBase.post('/users/login',data),
}
export default usersService