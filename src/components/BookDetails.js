import React,{useContext} from 'react'
import {BookContext} from './contexts/BookContext'

const BookDetails =(props)=>{
    console.log(props)
    const {removeBook} = useContext(BookContext)
    return(
        <li onClick={()=>{
            removeBook(props.book.id)
        }}>
            <div className='author'>{props.book.author}</div>
            <div className ='title'>{props.book.title}</div>
        </li> 
    )
}

export default BookDetails