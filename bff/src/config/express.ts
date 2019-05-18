// lib/app.ts
import * as express from 'express';
import { Request, Response, Application } from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cors from 'cors';
import { Routes } from '../routes/index';
import config from './config';

const { ipAllowOrigin, timeExpireHelmet } = config  ;

class Express {

    public app: Application;
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();       
        this.routePrv.routes(this.app);
    }

    private config(): void{
        this.initHelmetHeaders();
        this.initCrossDomain();
    }

    private initHelmetHeaders() {
        this.app.use(helmet.frameguard());
        this.app.use(helmet.xssFilter());
        this.app.use(helmet.noSniff());
        this.app.use(helmet.ieNoOpen());
        this.app.use(helmet.hsts({
            'maxAge': timeExpireHelmet,
            'includeSubDomains': true,
            'force': true
        }));
        this.app.disable('x-powered-by');
    };

    private initCrossDomain() {
        this.app.use(cors());
        this.app.use((req: Request, res: Response, next) => {
            res.set('Access-Control-Allow-Origin', ipAllowOrigin);
            res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
            res.set('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token');
            next();
        });
    };
}


export default new Express().app;