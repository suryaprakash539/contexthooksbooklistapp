import React from 'react';
import {BookContextProvider} from './components/contexts/BookContext'
import NavBar from './components/NavBar'
import BookList from './components/BookList'

function App() {
  return (
    <div className="App">
      <BookContextProvider>
         <NavBar/>
         <BookList/>
      </BookContextProvider>
    </div>
  );
}

export default App;
