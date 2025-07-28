import { useState, useEffect } from "react";

function App() {
  // Book List

  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem('books')
    return saved ? JSON.parse(saved) : []
  })

  // inputs

  const [title, settitle] = useState('')
  const [author, setauthor] = useState('')
  const [status, setstatus] = useState('wants to read ')

  // filter

  const [filter, setfilter] = useState('all')

  // save to localstorage

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])

  // add books

  const handleAddBook = (e) => {
    e.preventDefault()
    if (!title || !author) return alert("fill the fields!")
    const newBook = {
      id: Date.now(),
      title,
      author,
      status

    }

    setBooks([...books, newBook])
    settitle('')
    setauthor('')
    setstatus('')

  }

  // delete book

  const handelDelete = (id) => {
    setBooks(books.filter(book => book.id !== id))
  }

  // filtered list

  const filterBooks = filter === 'all'
    ? books
    : books.filter(book => book.status === filter)

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h1>BookShelf Manager</h1>
      <form onSubmit={handleAddBook} style={{ marginBottom: '20px' }}>
        <input
          placeholder="Book title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}

        />
        <input
          placeholder="author"
          value={author}
          onChange={(e) => setauthor(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <select
          value={status}
          onChange={(e) => setstatus(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}>

          <option >Want to read</option>
          <option >Currently Reading</option>
          <option >Read</option>
        </select>
        <button type="submit" style={{ padding: '10px 15px' }}>Add Book</button>
      </form>

      <div style={{ marginBottom: '20px' }}>
        <select
          value={filter}
          onChange={(e) => setfilter(e.target.value)}
          style={{ width: '100%', padding: '8px' }}>
          <option value="All">All</option>
          <option value="Want to Read">Want to Read</option>
          <option value="currently reading">currently reading</option>
          <option value="read">read</option>
        </select>
      </div>

      <h2>Your Books</h2>
      {filterBooks.length === 0 ? (
        <p>No Books Found</p>
      ) : (
        <ul style={{ padding: '0', listStyle: 'none' }}>
          {filterBooks.map((book) => (
            <li key={book.id} style={{ marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
              <strong>{book.title}</strong><br />
              <small>{book.author}</small><br />
              <span>Status : {book.status}</span><br />
              <button onClick={() => handelDelete(book.id)} style={{ margin: '5px' }}>Delete </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;