var db = require('../../config/database');
var tipos = require('./tipos');

var refeicaoDAO = {}



refeicaoDAO.adiciona = function(req, res) {
    console.log('refeicaoDAO.adiciona');
    console.log('req.body');
    console.log(req.body);

    if(req.body._id != undefined) {
        db.update({_id : req.body_id }, req.body, function(err, numReplaced) {
            if (err) return console.log(err);
            if(numReplaced) res.status(200).end();
            res.status(500).end();
            console.log('Atualizado com sucesso: ' + req.body._id);
            res.status(200).end();
        });
    } else {
        req.body.type = tipos.refeicao;

        db.insert(req.body, function(err, newDoc) {
            if(err) return console.log(err);
            console.log('Adicionado com sucesso: ' + newDoc._id);
            console.log(newDoc);
            res.json(newDoc._id);
        });
    }


};

refeicaoDAO.busca = function(req, res) {
    console.warn('refeicaoDAO.busca');
   db.findOne({_id: req.params.refeicaoId }, function(err, doc) {
        if (err) return console.log(err);
        console.log(doc);
        res.json(doc);
    });
};

refeicaoDAO.atualiza = function(req, res) {
    console.log('refeicaoDAO.atualiza');
    console.log(req.body);
    db.update({_id : req.params.refeicaoId }, req.body, function(err, numReplaced) {
        if (err) return console.log(err);
        if(numReplaced) res.status(200).end();
        res.status(500).end();
        console.log('Atualizado com sucesso: ' + req.body._id);
        res.status(200).end();
    });  
};

refeicaoDAO.lista = function(req, res) {
    console.log('refeicaoDAO.lista');

    db.find({type : tipos.refeicao, status : 'NAO_AVALIADO'}).sort({data: -1}).exec(function(err, doc) {
        console.log(doc);
        if (err) return console.log(err);

        //for (i = 0; i < doc.length; i++) {
        //    var tmpFoto = doc[i].foto;
        //    doc[i].foto = 'http://45.55.192.57/'+tmpFoto;
        //}

        res.json(doc);
    });
};

refeicaoDAO.remove = function(req, res) {
    console.log('refeicaoDAO.remove');

    db.remove({ _id: req.params.refeicaoId }, {}, function (err, numRemoved) {
        if (err) return console.log(err);
        console.log('removido com sucesso');
        if(numRemoved) res.status(200).end();
        res.status(500).end();
    });
};


module.exports = refeicaoDAO;