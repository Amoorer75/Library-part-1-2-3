import {useEffect, useState,} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import Layout from '../shared/Layout'
import BookForm from '../shared/BookForm'
import { editBook, getAllBooks } from '../services/api-call'
// import axios from 'axios'

export default function EditBook() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [bookData, setBookData] = useState({
        title: "",
        author: "",
        year: "",
        genres:[""],
        imageLink: "",
        ISBN: ""
    })
console.log(id)
    const [updated, setUpdated] = useState(false)

    const fetchData = async () => {
        try{
            const response = await  getAllBooks() 
            setBookData(response.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    const handleChange = 
    (event) => {
        const updatedField = { [event.target.name] : event.target.value }

        const editedItem = Object.assign(bookData, updatedField)

        setBookData(editedItem)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        editBook(bookData,id)
        .then(() => setUpdated(true)).catch(console.error)
    }
    useEffect(() => {
        if(updated) {
            return navigate(`/`)
        }
    })

     return(
         <Layout>
             <BookForm
               book={bookData}
               handleChange={(e) => handleChange(e)}
               handleSubmit={(e) => handleSubmit(e)}
               cancelPath={`/books/${id}`}
               />
         </Layout>
      )
}