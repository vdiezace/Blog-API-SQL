const getAll = () => {
  return db.query("select * from authors");
};

const getById = (authorId) => {
  return db.query("select * from authors where id = ?", [authorId]);
};

const create = ({ name, email, image }) => {
  return db.query("insert into authors (name, email, image) values (?, ?, ?)", [
    name,
    email,
    image,
  ]);
};

module.exports = {
  getAll,
  getById,
  create,
};
