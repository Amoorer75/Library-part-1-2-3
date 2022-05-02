import React from 'react';
import { getAllBooks } from "../services/api-call";
import {useEffect, useState} from "react"
import Layout from "../shared/Layout"
// import { useNavigate } from 'react-router-dom'
import {NavLink} from 'react-router-dom'

export default function Home (){
    // const navigate = useNavigate()

    const [booksData, setBooksData] = useState([])
 
    useEffect(() => {
     getAllBooks()
      .then((res) => setBooksData(res.data))
    }, [])

    

    const books = booksData.map((book,index) => {
        return(
        <div key={index} className='books'>
        
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Year: {book.year}</p>
        <p>Genres: {book.genres.join(', ')}</p>
        <p>ISBN: {book.ISBN}</p>
        <NavLink to={`/books/${book._id}`}>
            <button> Info</button>
        </NavLink>
        
        </div>
        
    )
    })

   
    console.log(booksData);
   
    return (
        <Layout>
            <h1>Books</h1>
        
        <div>

                {books}
        </div>
   

         </Layout>
         
        
        )
  
}