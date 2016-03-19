var db = require('../../config/database');

var refeicaoDAO = {}

refeicaoDAO.adiciona = function(req, res) {
    console.log('refeicaoDAO.adiciona');
    console.log('req.body');
    console.log(req.body);
    console.log('req.params');
    console.log(req.params);
    db.insert(req.body, function(err, newDoc) {
        if(err) return console.log(err);
        console.log('Adicionado com sucesso: ' + newDoc._id);
        res.json(newDoc._id);
    });  
};

refeicaoDAO.busca = function(req, res) {
    console.warn('refeicaoDAO.busca');
   db.findOne({_id: req.params.refeicaoId }, function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

refeicaoDAO.atualiza = function(req, res) {
    console.trace('refeicaoDAO.atualiza');
    
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

    db.find({}).sort({titulo: 1}).exec(function(err, doc) {
        console.log(doc);
        if (err) return console.log(err);
        res.json(doc);
    });
};

refeicaoDAO.listaPorGrupo = function(req, res) {
    console.log('refeicaoDAO.listaPorGrupo');

    var grupoId = parseInt(req.params.grupoId);
    db.find({grupo: grupoId}, function(err, doc) {
        if (err) return console.log(err);
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

refeicaoDAO.listaGrupos = function(req, res) {

    res.json([
        {
            _id: 1, 
            nome: 'esporte'
        }, 
        { 
            _id: 2, 
            nome: 'lugares', 
        }, 
        { 
            _id: 3, 
            nome: 'animais'
        }
    ]);
        
};


module.exports = refeicaoDAO;