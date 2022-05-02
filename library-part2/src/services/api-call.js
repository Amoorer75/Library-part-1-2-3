import axios from 'axios'
 
export const getAllBooks = () => {
  let response = axios.get('http://localhost:3001/books')
  return response
}

export const getBook = (id) => {
  let response = axios.get(`http://localhost:3001/books/${id}`)
  return response
}

export const createBook = (newValue) => {
  let response = axios({
    url:`http://localhost:3001/book`,
    method: 'POST',
    data: newValue
})
  return response
}
export const editBook = (newValue,id) => {
  let response = axios({
    url:`http://localhost:3001/books/${id}`,
    method: 'PUT',
    data: newValue
})
  return response
}

// export const deleteBook = (id) => {
//   let response = axios({
//     url:`http://localhost:3001/book/${id}`,
//     method: 'DELETE'
// })
//   return response
// }