/* eslint-disable no-unused-vars */
import * as path from 'path';
import { IConfig } from 'src/interfaces/config';

const config = {
	all: {
		env: process.env.NODE_ENV || 'dev',
		port: process.env.PORT || 4500,
        proxyTimeout: 10000,
        timeExpireHelmet: 15778476000,
        ipAllowOrigin: process.env.IP_ALLOW_ORIGIN || '*',
        proxyApiUrl: process.env.PROXY_API_URL || 'http://localhost:3000',
        proxyGraphQLUrl: process.env.PROXY_GRAPHQL_URL || 'http://localhost:5000'
	},
	dev: {
		isDebug: true
	},
	qa: {
		isDebug: true,
	},
	prd: {
		isDebug: false,
		ip: process.env.HOSTNAME || '0.0.0.0',
		port: process.env.PORT || 8080,
	}
};

const getConfig = (): IConfig => {
    return { ...config.all,
        ...config[config.all.env]
    };
}

export default getConfig();