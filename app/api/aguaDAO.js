var db = require('../../config/database');
var tipos = require('./tipos');

var aguaDAO = {}

aguaDAO.adiciona = function(req, res) {
    console.log('aguaDAO.adiciona()');
    console.log('Recebido(params)');
    console.log(req.params);
    console.log('Recebido(body)');
    console.log(req.body);

    if(req.body._id != undefined) {
        db.update({_id : req.body._id }, req.body, function(err, numReplaced) {
            if (err) return console.log(err);
            if(numReplaced) {
                console.log(numReplaced);
                res.status(200).end();
            }
            res.status(500).end();
            console.log('Atualizado com sucesso: ' + req.body._id);
            res.status(200).end();
        });
    } else {
        req.body.type = tipos.agua;

        db.insert(req.body, function(err, newDoc) {
            if(err) return console.log(err);
            console.log('Adicionado com sucesso: ' + newDoc._id);
            console.log('Salvo:');
            console.log(newDoc);
            res.json(newDoc);
        });
    }

};

aguaDAO.busca = function(req, res) {
    console.log('aguaDAO.busca()');
    console.log('Recebido(params):');
    console.log(req.params);
    console.log('Recebido(body):');
    console.log(req.body);
    db.findOne({_id: req.params.aguaId }, function(err, doc) {
        if (err) return console.log(err);
        console.log('Retornado:');
        console.log(doc);
        res.json(doc);
    });
};

aguaDAO.atualiza = function(req, res) {
    console.log('aguaDAO.atualiza()');
    console.log('Recebido(params):');
    console.log(req.params);
    console.log('Recebido(body):');
    console.log(req.body);

    db.update({_id : req.params.aguaId }, req.body, function(err, numReplaced) {
        if (err) return console.log(err);
        if(numReplaced) res.status(200).end();
        res.status(500).end();
        console.log('Atualizado com sucesso: ' + req.body._id);
        res.status(200).end();
    });
};

aguaDAO.lista = function(req, res) {
    console.log('aguaDAO.lista()');
    console.log('Recebido(params)');
    console.log(req.params);
    console.log('Recebido(body)');
    console.log(req.body);

    db.find({type : tipos.agua}).sort({data: -1}).exec(function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
        console.log('Retornado:');
        console.log(doc);
    });
};

aguaDAO.remove = function(req, res) {
    console.log('aguaDAO.remove()');
    console.log('Recebido(params)');
    console.log(req.params);
    console.log('Recebido(body)');
    console.log(req.body);

    db.remove({ _id: req.params.aguaId }, {}, function (err, numRemoved) {
        if (err) return console.log(err);
        console.log('removido com sucesso');
        if(numRemoved) res.status(200).end();
        res.status(500).end();
    });
};


module.exports = aguaDAO;