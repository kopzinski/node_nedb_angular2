var db = require('../../config/database');
var tipos = require('./tipos');

var tagDAO = {}

tagDAO.adiciona = function(req, res) {
    console.log('tagDAO.adiciona()');
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
        req.body.type = tipos.tag;

        db.insert(req.body, function(err, newDoc) {
            if(err) return console.log(err);
            console.log('Adicionado com sucesso: ' + newDoc._id);
            console.log('Salvo:');
            console.log(newDoc);
            res.json(newDoc._id);
        });
    }

};

tagDAO.busca = function(req, res) {
    console.log('tagDAO.busca()');
    console.log('Recebido(params):');
    console.log(req.params);
    console.log('Recebido(body):');
    console.log(req.body);
   db.findOne({_id: req.params.tagId }, function(err, doc) {
        if (err) return console.log(err);
       console.log('Retornado:');
       console.log(doc);
        res.json(doc);
    });
};

tagDAO.atualiza = function(req, res) {
    console.log('tagDAO.atualiza()');
    console.log('Recebido(params):');
    console.log(req.params);
    console.log('Recebido(body):');
    console.log(req.body);

    db.update({_id : req.params.tagId }, req.body, function(err, numReplaced) {
        if (err) return console.log(err);
        if(numReplaced) res.status(200).end();
        res.status(500).end();
        console.log('Atualizado com sucesso: ' + req.body._id);
        res.status(200).end();
    });  
};

tagDAO.lista = function(req, res) {
    console.log('tagDAO.lista()');
    console.log('Recebido(params)');
    console.log(req.params);
    console.log('Recebido(body)');
    console.log(req.body);

    db.find({type : tipos.tag}).sort({texto: 1}).exec(function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
        console.log('Retornado:');
        console.log(doc);
    });
};

tagDAO.remove = function(req, res) {
    console.log('tagDAO.remove()');
    console.log('Recebido(params)');
    console.log(req.params);
    console.log('Recebido(body)');
    console.log(req.body);

    db.remove({ _id: req.params.tagId }, {}, function (err, numRemoved) {
        if (err) return console.log(err);
        console.log('removido com sucesso');
        if(numRemoved) res.status(200).end();
        res.status(500).end();
    });
};


module.exports = tagDAO;