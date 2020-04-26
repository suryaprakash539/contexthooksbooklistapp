import React,{useContext} from 'react'
import {BookContext} from './contexts/BookContext'

const NavBar = (props)=>{
     const {books} = useContext(BookContext)
    return (
        
        <div>
            <h1>bookList</h1>
            <p>Currently there {books.length} books in the store</p>
        </div>
    )
}

export default NavBar