// eslint-disable-next-line import/no-extraneous-dependencies
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
// terapkan CORS pada cakupan server agar tak perlu lagi repot-repot mendefinisikan CORS pada setiap route
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });
    
    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();