-- Create Database
CREATE DATABASE IF NOT EXISTS booksky_db;
USE booksky_db;

-- Create Books Table
CREATE TABLE IF NOT EXISTS books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  genre VARCHAR(100),
  price DECIMAL(10, 2),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Sample Data
INSERT INTO books (title, author, genre, price, description) VALUES
('The Alchemist', 'Paulo Coelho', 'Fiction', 299.00, 'A journey of self-discovery'),
('Atomic Habits', 'James Clear', 'Self-Help', 399.00, 'Tiny changes, remarkable results'),
('Clean Code', 'Robert C. Martin', 'Technology', 599.00, 'A handbook of agile software craftsmanship');