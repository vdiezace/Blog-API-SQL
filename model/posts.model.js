const getAll = () => {
  return db.query("select * from posts");
};

const getById = (postsId) => {
  return db.query(
    "select * from posts AS p JOIN authors AS a ON p.authors_id = a.id",
    [postsId]
  );
};

const getByAuthor = (authorId) => {
  return db.query("select * from posts where authors_id = ?", [authorId]);
};

const create = ({ title, description, created_at, category, authors_id }) => {
  return db.query(
    "insert into posts (title, description, created_at, category, authors_id) values (?, ?, ?, ?, ?)",
    [title, description, created_at, category, authors_id]
  );
};

module.exports = {
  getAll,
  getById,
  getByAuthor,
  create,
};
