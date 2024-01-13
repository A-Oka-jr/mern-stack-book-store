import express from "express";
import booksController from "../controllers/booksController.js";
const router = express.Router();

/* GET home page. */
router.route("/").get(booksController.getBooks);

router.route("/").post(booksController.createBooks);

router.route("/:id").get(booksController.getBookById);

router.route("/:id").put(booksController.updateById);

router.route("/:id").delete(booksController.deleteById);

export default router;
