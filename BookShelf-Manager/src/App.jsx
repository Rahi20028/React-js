import { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem('books');
    return saved ? JSON.parse(saved) : [];
  });

  const [title, settitle] = useState('');
  const [author, setauthor] = useState('');
  const [status, setstatus] = useState('Want to Read');
  const [filter, setfilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const handleAddBook = (e) => {
    e.preventDefault();
    if (!title || !author) return alert("Please fill in all fields!");

    const newBook = {
      id: Date.now(),
      title,
      author,
      status,
    };

    setBooks([...books, newBook]);
    settitle('');
    setauthor('');
    setstatus('Want to Read');
  };

  const handelDelete = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const filterBooks = filter === 'all'
    ? books
    : books.filter(book => book.status.toLowerCase() === filter.toLowerCase());

  const containerStyle = {
    padding: '30px',
    maxWidth: '600px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  };

  const bookCardStyle = {
    backgroundColor: '#fff',
    padding: '15px',
    marginBottom: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>📚 BookShelf Manager</h1>

      <form onSubmit={handleAddBook}>
        <input
          style={inputStyle}
          placeholder="Book Title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <input
          style={inputStyle}
          placeholder="Author"
          value={author}
          onChange={(e) => setauthor(e.target.value)}
        />
        <select
          style={inputStyle}
          value={status}
          onChange={(e) => setstatus(e.target.value)}
        >
          <option>Want to Read</option>
          <option>Currently Reading</option>
          <option>Read</option>
        </select>
        <button type="submit" style={buttonStyle}>➕ Add Book</button>
      </form>

      <div style={{ margin: '20px 0' }}>
        <select
          style={inputStyle}
          value={filter}
          onChange={(e) => setfilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Want to Read">Want to Read</option>
          <option value="Currently Reading">Currently Reading</option>
          <option value="Read">Read</option>
        </select>
      </div>

      <h2 style={{ color: '#333' }}>📖 Your Books</h2>
      {filterBooks.length === 0 ? (
        <p>No Books Found.</p>
      ) : (
        filterBooks.map((book) => (
          <div key={book.id} style={bookCardStyle}>
            <h3 style={{ margin: '0 0 5px 0' }}>{book.title}</h3>
            <p style={{ margin: '0 0 5px 0' }}><strong>Author:</strong> {book.author}</p>
            <p style={{ margin: '0 0 10px 0' }}><strong>Status:</strong> {book.status}</p>
            <button
              onClick={() => handelDelete(book.id)}
              style={{ ...buttonStyle, backgroundColor: '#dc3545' }}
            >
              🗑️ Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
