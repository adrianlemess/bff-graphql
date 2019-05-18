import { Request, Response } from "express";
import * as requestProxy from "express-request-proxy";
import config from '../config/config';
config
const { 
    proxyApiUrl, 
    proxyGraphQLUrl, 
    proxyTimeout: timeout 
} = config  ;

class ProxyController {
  constructor() {}
  getProxyAPI(req: Request, res: Response, next) {
    const proxy = requestProxy({
      url: `${proxyApiUrl}/*`,
      timeout
    });
    proxy(req, res, next);
  }

  getProxyGraphQL(req: Request, res: Response, next) {
    const proxy = requestProxy({
      url: `${proxyGraphQLUrl}/graphql`,
      timeout
    });
    proxy(req, res, next);
  }
}

export default ProxyController;
