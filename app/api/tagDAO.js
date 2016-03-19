var db = require('../../config/database');

var tagDAO = {}

tagDAO.adiciona = function(req, res) {
    console.log('tagDAO.adiciona');
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

tagDAO.busca = function(req, res) {
    console.log('tagDAO.busca');
   db.findOne({_id: req.params.tagId }, function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

tagDAO.atualiza = function(req, res) {
    console.log('tagDAO.atualiza');
    
    db.update({_id : req.params.tagId }, req.body, function(err, numReplaced) {
        if (err) return console.log(err);
        if(numReplaced) res.status(200).end();
        res.status(500).end();
        console.log('Atualizado com sucesso: ' + req.body._id);
        res.status(200).end();
    });  
};

tagDAO.lista = function(req, res) {
    console.log('tagDAO.lista');

    db.find({}).sort({titulo: 1}).exec(function(err, doc) {
        console.log(doc);
        if (err) return console.log(err);
        res.json(doc);
    });
};

tagDAO.listaPorGrupo = function(req, res) {
    console.log('tagDAO.listaPorGrupo');

    var grupoId = parseInt(req.params.grupoId);
    db.find({grupo: grupoId}, function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });

};

tagDAO.remove = function(req, res) {
    console.log('tagDAO.remove');

    db.remove({ _id: req.params.tagId }, {}, function (err, numRemoved) {
        if (err) return console.log(err);
        console.log('removido com sucesso');
        if(numRemoved) res.status(200).end();
        res.status(500).end();
    });
};

tagDAO.listaGrupos = function(req, res) {

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


module.exports = tagDAO;