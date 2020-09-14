const Author = require('../models/author_model');

exports.addAuthor = function(req, res) {
  const new_author = new Author(req.body);

 if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Author.create(new_author, function(err, author) {
          if (err)
          res.send(err);
          res.json({error:false,message:"Author added successfully!",data:author});
      });
  }
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Author.update(req.params.id, new Author(req.body), function(err, author) {
          if (err)
          res.send(err);
          res.json({ error:false, message: 'Author successfully updated' });
      });
  }

};

exports.delete = function(req, res) {
  Author.delete( req.params.id, function(err, author) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Author successfully deleted' });
  });
};

exports.getDetails = function(req, res) {
  Author.getDetails(req.params.id, function(err, author) {
        if (err)
        res.send(err);
        res.json(author);
    });
};

exports.getList = function(req, res) {
  Author.findAll(function(err, author) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', author);
    res.send(author);
  });
};





