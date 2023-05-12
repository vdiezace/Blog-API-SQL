const router = require("express").Router();

// GET api/authors
router.get("/", (req, res) => {
  res.json("Recupera todos los autores");
});

// GET api/authors/IDAUTOR
router.get("/:authorId", (req, res) => {
  res.json("Recupera un autor por su ID");
});

// POST api/authors
router.post("/", (req, res) => {
  res.json("Creamos un nuevo autor");
});

module.exports = router;
