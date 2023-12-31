const user = require('./user');

const initRoutes = (app) => {

    app.use('/user/', user);

    return app.use('/', (req, res)=>{
        return res.send("Server is onnnnnnn");
    })
}
module.exports = initRoutes;