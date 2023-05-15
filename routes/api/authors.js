const router = require("express").Router();

const { getAll, getById, create } = require("../../model/author.model");

// GET api/authors
router.get("/", async (req, res) => {
  //console.log("DENTRO DE Authors.js", req.user);
  try {
    const [result] = await getAll();
    res.json(result);
  } catch (error) {
    res.status(503).json({ fatal: error.message });
  }
});

// GET api/authors/IDAUTOR
router.get("/:authorId", async (req, res) => {
  //res.send("ENTRA EN EL METODO");
  const { authorId } = req.params;
  //console.log(authorId);
  try {
    const [result] = await getById(authorId);
    if (result.length === 0) {
      return res.json({ fatal: "No existe el autor con ese ID " });
    }
    res.json(result[0]);
  } catch (error) {
    res.status(503).json({ fatal: error.message });
  }
});

// POST api/authors
router.post("/", async (req, res) => {
  //console.log(req.body);
  //res.json("Creamos un nuevo autor");
  try {
    const [result] = await create(req.body);
    //res.json({ success: "Autor creado con éxito" });
    const [author] = await getById(result.insertId);
    res.json(author[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

module.exports = router;
