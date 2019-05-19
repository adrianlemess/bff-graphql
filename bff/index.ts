import app from './src/config/express';
import config from './src/config/config';

const { 
    port
} = config  ;


app.listen(port, () => {
    console.log(`Express server listening on port ${port} :D`);
})