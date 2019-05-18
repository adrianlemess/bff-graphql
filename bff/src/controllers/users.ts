import { Request, Response } from 'express';
import axios from 'axios';
import { User } from '../models/user';
import config from '../config/config';
config
const { 
    proxyApiUrl
} = config  ;

class UsersController {
    getUsersWithCompleteName(req: Request, res: Response){
        const users = axios.get(`${proxyApiUrl}/users`)
            .then(({ data: users }) => {
                const newUsers = users.map(user => {
                    return new User(user)
                })
        
                return res.send(newUsers)
            })
        
    }
}

export default UsersController;