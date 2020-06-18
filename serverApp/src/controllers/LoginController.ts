import { Request, Response} from 'express';
import knex from '../database/connection';


class LoginController {
    // async show (request: Request, response: Response)  {
    //     const { user, password } = request.params;
    //     const usuarios = await knex('tb_usuarios').select('id', 'ds_login', 'ds_password').where({ 'ds_login': user, 'ds_password': password }).first();
        
    //     if (!usuarios) {
    //         return response.status(400).json({ message: 'Login não encontrado!'})
    //     }
       
    //     return response.json({ usuarios });
    
    
    // }

    async create (request: Request, response: Response)  {
        const { user, password } = request.body;
        const usuarios = await knex('tb_usuarios').select('id', 'ds_login', 'ds_password').where({ 'ds_login': user, 'ds_password': password }).first();
        
        if (!usuarios) {
            return response.status(400).json({ message: 'Login not found!!'})
        }
       
        return response.json({ usuarios });
    
    
    }

}


export default LoginController;