import asyncHandler from "express-async-handler";
import Book from "../models/bookModel.js";

const getBooksById = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);

    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: "Book Not Found" });
    }
    console.log("hola");
});

const getBooks = asyncHandler(async (req, res) => {
    const books = await Book.find({});

    res.json(books);

    console.log("hello");
});

export { getBooksById, getBooks };
