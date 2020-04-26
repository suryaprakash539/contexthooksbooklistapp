import React,{useContext}from 'react'
import {BookContext} from './contexts/BookContext'
import BookDetails from './BookDetails'

const BookList =(props)=>{
  const {books} = useContext(BookContext)
  console.log(books)
  return books.length? (
      <div className='book-list'>
          <ul>
          {books.map(book=>{
              return <BookDetails book={book} key={book.id}/>
          })}
          </ul>
         
      </div>
  ):(
      <div className='empty'>
          No books to read
      </div>
  )
}

export default BookList