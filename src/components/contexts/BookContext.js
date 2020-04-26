import React,{createContext,useState} from 'react'
export const BookContext = createContext()

export const BookContextProvider = (props)=>{
  const [books,setBooks] = useState([
      {id:1,title:'CryptoGraphy', author:'surya'},
      {id:2,title:'Computer Graphics',author:'Narasimha'}
  ])

  const addBook = (title,author)=>{
      setBooks([...books],{title,author,id:Date.now()})
  }

  const removeBook =(id)=>{
      setBooks(books.filter(book=>book.id !==id))
  }
    return (
        <BookContext.Provider value={{books,addBook,removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}