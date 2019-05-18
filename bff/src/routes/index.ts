import { Request, Response } from 'express';
import apis from './apis';
import ProxyController from '../controllers/proxy';

export class Routes {
    private proxyController: ProxyController;
    constructor() {
        this.proxyController = new ProxyController();
    }

    public routes(app): void {          
        app.use('/custom', apis)
        app.all('/graphql', this.proxyController.getProxyGraphQL)
        app.all('/api/*', this.proxyController.getProxyAPI)

        app.route('/health')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                status: 'up'
            })
        })  
    }
}