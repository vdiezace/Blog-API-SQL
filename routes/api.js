const router = require("express").Router();

router.use("/authors", require("./api/authors"));

module.exports = router;
