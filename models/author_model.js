var ConnectDB = require('../config/config.js');

var Author = function(author){
    this.id = author.id;
    this.name = author.name;
    this.sex = author.sex;
    this.pseudonym = author.pseudonym;
};

Author.addAuthor = function (newAut, result) {    
    ConnectDB.query("INSERT INTO author set ?", newAut, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};

Author.update = function(id, author, result){
    ConnectDB.query("UPDATE author SET id=?,name=?,sex=?,pseudonym=? WHERE id = ?",
     [author.id, author.name, author.sex, author.pseudonym, id],
      function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};

Author.delete = function(id, result){
    ConnectDB.query("DELETE FROM author WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

Author.getDetails = function (id, result) {
    ConnectDB.query("Select * from author where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Author.getList = function (result) {
    ConnectDB.query("Select * from author", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('author : ', res);  
            result(null, res);
        }
    });   
};

module.exports= Author;