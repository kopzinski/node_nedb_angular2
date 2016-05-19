var db = require('../../config/database');
var tipos = require('./tipos');

var usuarioDAO = {}

usuarioDAO.adiciona = function(req, res) {
    console.log('usuarioDAO.adiciona()');
    console.log('Recebido(body)');
    console.log(req.body);

    req.body.type = tipos.atleta;
    req.body.type = tipos.nutricionista;

    db.insert(req.body, function(err, newDoc) {
        if(err) return console.log(err);
        console.log('Adicionado com sucesso: ' + newDoc._id);
        console.log('Salvo:');
        console.log(newDoc);
        res.json(newDoc);
    });

};

usuarioDAO.busca = function(req, res) {
    console.log('usuarioDAO.busca()');
    console.log('Recebido(params):');
    console.log(req.params);
    console.log('Recebido(body):');
    console.log(req.body);
    db.findOne({_id: req.params.usuarioId }, function(err, doc) {
        if (err) return console.log(err);
        console.log('Retornado:');
        console.log(doc);
        res.json(doc);
    });
};

usuarioDAO.login = function(req, res) {
    console.log('usuarioDAO.login()');
    console.log('Recebido(params):');
    console.log(req.params);
    console.log('Recebido(body):');
    console.log(req.body);
    db.findOne({type : tipos.atleta, login: req.body.login, senha : req.body.senha }, function(err, doc) {
        if (err) return console.log(err);
        console.log('Retornado:');
        console.log(doc);
        res.json(doc);
    });
};

usuarioDAO.atualiza = function(req, res) {
    console.log('usuarioDAO.atualiza()');
    console.log('Recebido(params):');
    console.log(req.params);
    console.log('Recebido(body):');
    console.log(req.body);

    db.update({_id : req.params.usuarioId }, req.body, function(err, numReplaced) {
        if (err) return console.log(err);
        if(numReplaced) res.status(200).end();
        res.status(500).end();
        console.log('Atualizado com sucesso: ' + req.body._id);
        res.status(200).end();
    });
};

usuarioDAO.lista = function(req, res) {
    console.log('usuarioDAO.lista()');
    console.log('Recebido(params)');
    console.log(req.params);
    console.log('Recebido(body)');
    console.log(req.body);

    db.find({type : tipos.atleta}).sort({data: -1}).exec(function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
        console.log('Retornado:');
        console.log(doc);
    });
};

usuarioDAO.remove = function(req, res) {
    console.log('usuarioDAO.remove()');
    console.log('Recebido(params)');
    console.log(req.params);
    console.log('Recebido(body)');
    console.log(req.body);

    db.remove({ _id: req.params.usuarioId }, {}, function (err, numRemoved) {
        if (err) return console.log(err);
        console.log('removido com sucesso');
        if(numRemoved) res.status(200).end();
        res.status(500).end();
    });
};


module.exports = usuarioDAO;