import React,{createContext,useState} from 'react'

export const BookContext = createContext()

export const BookContextProvider = (props)=>{
  const [books,setBooks] = useState([
      {id:1,title:'CryptoGraphy', author:'surya'},
      {id:2,title:'Computer Graphics',author:'Narasimha'}
  ])

  const addBook = (title,author)=>{
      setBooks([...books],{title,author})
  }
    return (
        <BookContext.Provider value={{books,addBook}}>
            {props.children}
        </BookContext.Provider>
    )
}