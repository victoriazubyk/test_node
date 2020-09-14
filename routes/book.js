const express = require('express')
const router = express.Router()
const book = require("../controllers/book_controller.js");

router.post("/", book.addBook);

router.put("/:id", book.update);
  
router.delete("/:id", book.delete);

router.get("/:id", book.getDetails);

router.get("/", book.getList);

module.exports = router