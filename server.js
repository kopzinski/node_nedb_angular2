var express = require('express');
var  multer  = require('multer');
var refeicao = require('./app/api/refeicaoDAO');
var tag = require('./app/api/tagDAO');
var path = require('path');
var routes = require('./app/routes');
var app = express();

app.use(multer({ dest: './uploads/fotos'}));
app.use('public', express.static('public'));
app.use('/uploads', express.static('uploads'));

//app.get('/', function(req, res) {
//    res.send('index.html');
//});

app.post('/v1/photos', function(req, res){
    //console.log(req.body) // form fields
    //console.log(req.files) // form files
    res.send(req.files.filefield.name);
    //res.status(204).end()
});

app.route('/v1/tags')
    .post(tag.adiciona)
    .get(tag.lista);

app.route('/v1/tags/:tagId')
    .delete(tag.remove)
    .get(tag.busca)
    .put(tag.atualiza);

app.route('/v1/refeicoes')
    .post(refeicao.adiciona)
    .get(refeicao.lista);

app.route('/v1/refeicoes/:refeicaoId')
    .delete(refeicao.remove)
    .get(refeicao.busca)
    .put(refeicao.atualiza);

//app.get('/v1/grupos', api.listaGrupos)
//app.get('/v1/fotos/grupo/:grupoId', api.listaPorGrupo);

// habilitando HTML5MODE
app.all('/*', function(req, res) {
    res.send('public/index.html');
});

app.listen(3000, function(app) {
    console.log('Servido escutando a porta 3000');
});