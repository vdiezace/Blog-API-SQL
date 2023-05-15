const { getAll, create, getById } = require("../../model/posts.model");

const router = require("express").Router();

// GET api/posts
router.get("/", async (req, res) => {
  try {
    const [result] = await getAll();
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

// GET /api/posts/IDPOSTS
router.get("/:postsId", async (req, res) => {
  //res.json("Pasa por aqui?");
  //res.json(req.params);
  const { postsId } = req.params;
  try {
    const result = await getById(postsId);
    res.json(result[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

// GET /api/posts/authors/IDAUTOR

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
