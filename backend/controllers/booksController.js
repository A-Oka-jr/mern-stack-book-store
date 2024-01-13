import booksServices from "../services/booksServices.js";
const booksController = {};

booksController.getBooks = async (req, res) => {
  try {
    let books = await booksServices.findAll();
    return res.status(200).send({ count: books.length, data: books });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
};

booksController.getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    let book = await booksServices.findById(id);
    if (!book) {
      return res.status(404).json({ message: "book not found" });
    }
    return res.status(200).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

booksController.createBooks = async (req, res) => {
  try {
    if (!req.body.title || !req.body.auther || !req.body.publishYear) {
      return res.status(400).send({
        message: "send all requierd fields title, auther and publishYear",
      });
    }

    const newBook = {
      title: req.body.title,
      auther: req.body.auther,
      publishYear: req.body.publishYear,
    };

    let book = await booksServices.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
};

booksController.updateById = async (req, res) => {
  try {
    if (!req.body.title || !req.body.auther || !req.body.publishYear) {
      return res.status(400).send({
        message: "send all requierd fields title, auther and publishYear",
      });
    }

    const { id } = req.params;

    let result = await booksServices.updateById(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "book not found" });
    }

    return res.status(200).send({ message: "Book updated successfuly" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
};

booksController.deleteById = async (req, res) => {
  try {
    const { id } = req.params;

    let result = await booksServices.deleteById(id);

    if (!result) {
      return res.status(404).json({ message: "book not found" });
    }

    return res.status(200).send({ message: "Book deleted successfuly" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
};
export default booksController;
