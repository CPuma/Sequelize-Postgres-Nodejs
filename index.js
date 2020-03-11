// Importante para que arranque el codigo traducido por BABEL
import '@babel/polyfill';

import app from './app';

import config from './config/app';
app.set('port', config.server.port);

app.listen(app.get('port'), () => {
	console.log(`Servidor escuando el puerto ${app.get('port')}`);
});
