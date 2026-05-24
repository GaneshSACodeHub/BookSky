const express = require('express');
const router = express.Router();
const db = require('../../../Booklist/config/db');

// GET all books
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM books ORDER BY created_at DESC';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching books', error: err.message });
    }
    res.status(200).json({ message: 'Books fetched successfully', data: results });
  });
});

// GET single book by ID
router.get('/:id', (req, res) => {
  const sql = 'SELECT * FROM books WHERE id = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching book', error: err.message });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Book fetched successfully', data: result[0] });
  });
});

// POST - Add new book
router.post('/', (req, res) => {
  const { title, author, genre, price, description } = req.body;

  if (!title || !author) {
    return res.status(400).json({ message: 'Title and Author are required' });
  }

  const sql = 'INSERT INTO books (title, author, genre, price, description) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [title, author, genre, price, description], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error adding book', error: err.message });
    }
    res.status(201).json({ message: 'Book added successfully', bookId: result.insertId });
  });
});

// PUT - Update book by ID
router.put('/:id', (req, res) => {
  const { title, author, genre, price, description } = req.body;

  const sql = 'UPDATE books SET title=?, author=?, genre=?, price=?, description=? WHERE id=?';
  db.query(sql, [title, author, genre, price, description, req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error updating book', error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Book updated successfully' });
  });
});

// DELETE - Delete book by ID
router.delete('/:id', (req, res) => {
  const sql = 'DELETE FROM books WHERE id = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error deleting book', error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Book deleted successfully' });
  });
});

module.exports = router;