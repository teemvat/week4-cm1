import React, { useState } from 'react'

function BookCollectionManager() {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const [books, setBooks] = useState([{ title: "Neuromancer", author: "William Gibson", year: "1984" },
  { title: "The Lord of the Rings", author: "J. R. R. Tolkien", year: "1955" }
  ]);

  function handleTitleChange(event) {
    setTitle(event.target.value)
  }

  function handleAuthorChange(event) {
    setAuthor(event.target.value)
  }

  function handleYearChange(event) {
    setYear(event.target.value)
  }

  function addBook() {
    const newBook = {
      title: title,
      author: author,
      year: year
    };

    setBooks(b => [...b, newBook])
  }

  function deleteBook(index) {
    setBooks(b => b.filter((_, i) => i !== index))
  }

  return (
    <div className='flex flex-col rounded-md '>
      <h1 className='text-center font-serif font-bold'>Book Collection Manager</h1>
      <div>
        <form className='flex flex-col '>
          <input
            className="m-2 p-2 rounded-md border"
            type="text"
            placeholder="Book Title"
            onChange={handleTitleChange} />
          <input
            className="m-2 p-2 rounded-md border"
            type="text"
            placeholder="Author"
            onChange={handleAuthorChange} />
          <input
            className="m-2 p-2 rounded-md border"
            type="number"
            placeholder='Year of Publication'
            onChange={handleYearChange} />
          <button
            className='w-32 border bg-lime-600 hover:bg-lime-500 transition text-white rounded-md p-2 m-2'
            onClick={() => addBook()}>
            Add Book
          </button>
        </form>
      </div>
      <ol className='m-2 font-serif'>
        {books.map((book, index) =>
          <li key={index}>
            <div
              className='flex justify-between items-center'>
              <h2
                className='text-2xl font-bold'>{book.title}</h2>
              <p><b>Author: </b>{book.author}</p>
              <p><b>Year: </b>{book.year}</p>
              <button
                className='border bg-red-600 hover:bg-red-500 font-sans transition text-white rounded-md p-2 w-20'
                onClick={() => deleteBook(index)}>
                Delete
              </button>
            </div>
            <hr className="border-t border-gray-300 my-2" />
          </li>
        )}
      </ol>

    </div>
  )
}

export default BookCollectionManager
