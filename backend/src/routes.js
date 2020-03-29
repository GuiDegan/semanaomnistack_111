const express = require('express');

const ongcontroller =  require('./controller/ongcontroller');
const incidentcontroller =  require('./controller/incidentcontroller');
const profilecontroller =  require('./controller/profilecontroller');
const sessioncontroller =  require('./controller/sessioncontroller');

const routes = express.Router();

routes.post('/sessions', sessioncontroller.create);

routes.get('/ongs', ongcontroller.index);
routes.post('/ongs', ongcontroller.create);

routes.get('./profile', profilecontroller.index);

routes.get('/incidents', incidentcontroller.index);
routes.post('/incidents', incidentcontroller.create);
routes.delete('/incidents/:id', incidentcontroller.delete);

module.exports = routes;