var express = require('express');
var multer  = require('multer');
var bodyParser = require('body-parser');
var refeicao = require('./app/api/refeicaoDAO');
var tag = require('./app/api/tagDAO');
var agua = require('./app/api/aguaDAO');
var peso = require('./app/api/pesoDAO');
var usuario = require('./app/api/usuarioDAO');
var path = require('path');
var routes = require('./app/routes');
var app = express();

app.use(multer({ dest: './uploads/fotos'}));

app.use(bodyParser.json());

app.use( express.static('./public'));

app.use('/uploads', express.static('uploads'));

//trying to allow CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//Rota exclusive para salvar as fotos recebidas...
app.post('/v1/photos', function(req, res) {
    console.log('req.files');
    console.log(req.files);

    if(req.files == undefined) {
        console.log("Kop! [ERRO 01] req.files is UNDEFINED");
    } else if (req.files.file == undefined) {
        console.log("Kop! [ERRO 02] req.files.file is UNDEFINED");
    } else {
        console.log(req.files.file); // form fields
        res.send(req.files.file.name);
        res.status(204).end();
    }

    res.send(req.body.file);

});

//Rodas para inserir refeicao nova e listar todas refeicoes
app.route('/v1/refeicoes')
    .post(refeicao.adiciona)
    .get(refeicao.lista);
app.route('/v1/refeicoes/:refeicaoId')
    .delete(refeicao.remove)
    .get(refeicao.busca)
    .put(refeicao.atualiza);

//app.get('/v1/grupos', api.listaGrupos)
//app.get('/v1/fotos/grupo/:grupoId', api.listaPorGrupo);

//TAGS
app.route('/v1/tags')
    .post(tag.adiciona)
    .get(tag.lista);
app.route('/v1/tags/:tagId')
    .delete(tag.remove)
    .get(tag.busca)
    .put(tag.atualiza);

//AGUAS
app.route('/v1/aguas')
    .post(agua.adiciona)
    .get(agua.lista);
app.route('/v1/aguas/:aguaId')
    .delete(agua.remove)
    .get(agua.busca)
    .put(agua.atualiza);

//PESOS
app.route('/v1/pesos')
    .post(peso.adiciona)
    .get(peso.lista);
app.route('/v1/pesos/:pesoId')
    .delete(peso.remove)
    .get(peso.busca)
    .put(peso.atualiza);

//USUARIOS
app.route('/v1/usuarios')
    .post(usuario.adiciona)
    .get(usuario.lista);
app.route('/v1/usuarios/:usuarioId')
    .delete(usuario.remove)
    .get(usuario.busca)
    .put(usuario.atualiza);

app.route('/v1/login')
    .post(usuario.login);

// habilitando HTML5MODE
app.all('\\/*', function(req, res) {
    console.log('a');
    res.sendfile('index.html');
});

//app.listen(80, function(app) {
//    console.log('Servido escutando a porta 80');
//});

app.listen(3000, function(app) {
    console.log('Servido escutando a porta 3000');
});




