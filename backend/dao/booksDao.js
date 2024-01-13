import mongoose from "mongoose";
import { Book } from "../models/bookModels.js";

const booksDao = {};

booksDao.findAll = async () => {
  let books = await Book.find();
  return books;
};

booksDao.findById = async (id) => {
  let book = await Book.findById(id);
  return book;
};

booksDao.create = async (newBook) => {
  let book = await Book.create(newBook);
  return book;
};

booksDao.updateById = async (id, data) => {
  let result = await Book.findByIdAndUpdate(id, data);
  return result;
};

booksDao.deleteById = async (id) => {
  let result = await Book.findByIdAndDelete(id);
  return result;
};
export default booksDao;
