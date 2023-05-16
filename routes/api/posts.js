const {
  getAll,
  create,
  getById,
  getByAuthorId,
  getByPost,
} = require("../../model/posts.model");

const router = require("express").Router();

// GET api/posts
router.get("/", async (req, res) => {
  // res.json("pasa por el getAll");
  try {
    const [result] = await getAll();
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

// GET /api/posts/authors
router.get("/authors", async (req, res) => {
  //res.json("Pasa por aqui?");
  //res.json(req.params);
  const { postsId } = req.params;
  try {
    const [result] = await getByPost(postsId);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

// GET /api/posts/authors/IDAUTOR
router.get("/authors/:authorsId", async (req, res) => {
  //res.json("Pasa por el getByAuthorId");
  const { authorsId } = req.params;
  try {
    const result = await getByAuthorId(authorsId);
    if (result.length === 0) {
      return res.json({ fatal: "No existe ningún post con este id de autor" });
    }
    res.json(result[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

// POST api/posts
router.post("/", async (req, res) => {
  //   console.log(req.body);
  //   res.json("Creamos un nuevo autor");
  try {
    const [result] = await create(req.body);
    const [post] = await getById(result.insertId);
    res.json(post[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});
module.exports = router;
