import booksDao from "../dao/booksDao.js";
const booksServices = {};

booksServices.findAll = () => {
  return booksDao.findAll();
};

booksServices.findById = (id) => {
  return booksDao.findById(id);
};

booksServices.create = (newBook) => {
  return booksDao.create(newBook);
};

booksServices.updateById = (id, data) => {
  return booksDao.updateById(id, data);
};

booksServices.deleteById = (id) => {
  return booksDao.deleteById(id);
};

export default booksServices;
