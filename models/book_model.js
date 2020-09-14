var ConnectDB = require('../config/config.js');

var Book = function(book){
    this.id = book.id;
    this.name = book.name;
    this.description = book.description;
    this.author_id = book.author_id;
};

Book.addBook = function (newAut, result) {    
    ConnectDB.query("INSERT INTO book set ?", newAut, function (err, res) {
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

Book.update = function(id, book, result){
    ConnectDB.query("UPDATE book SET id=?,name=?,description=?,author_id=? WHERE id = ?",
     [book.id, book.name, book.description, book.author_id, id],
      function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};

Book.delete = function(id, result){
    ConnectDB.query("DELETE FROM book WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

Book.getDetails = function (id, result) {
    ConnectDB.query("Select * from book where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Book.getList = function (result) {
    ConnectDB.query("Select * from book", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('book : ', res);  
            result(null, res);
        }
    });   
};

module.exports= Book;