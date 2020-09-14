const express = require('express')
const router = express.Router()
const author = require("../controllers/author_controller.js");

router.post("/", author.addAuthor);

router.put("/:id", author.update);
  
router.delete("/:id", author.delete);

router.get("/:id", author.getDetails);

router.get("/", author.getList);

module.exports = router