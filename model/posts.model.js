const getAll = () => {
  return db.query("select * from posts");
};

const getById = (postsId) => {
  return db.query("select * from posts where id = ?", [postsId]);
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
  create,
};
