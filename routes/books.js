import express from 'express';
import { getBooks, getBook, createBooks, updatebooks, deletebooks } from '../controllers/booksController.js';
const router = express.Router();

router.get('/', getBooks);

router.get('/:id', getBook);

router.post('/', createBooks);

router.patch('/:id', updatebooks);

router.delete('/:id', deletebooks);

export default router

