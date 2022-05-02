const express = require('express');
const app = express();
const bookModel = require('../models/Book')

app.get('/books', async (req,res) => {

    const books = await bookModel.find({})

    try{
        res.send(books)
    }catch(err){
        res.status(500).send(error)
    }

})

app.post("/book", async (request, response) => {
   try {
        const book = await new bookModel(request.body);
      await book.save();
      return response.status(200).send({book});
    } catch (error) {
      return response.status(500).jason({error: error.message});
    }
  });

app.get('/books/:id', async (req,res) => {
    try {
        const { id } = req.params;
        const book = await bookModel.findById(id)
        if  (book) {
            return res.status(200).json({book})
        }

    }catch(err){
        return res.status(500).send('item with given id does not exist')
    }
})

app.put("/books/:id", async (req, res)=> {
  try {
    const { id } = req.params; 
    bookModel.findByIdAndUpdate(id, req.body, {new:true}, (err, book) => {
      
        if (err) {
            return res.status(500).send(err)
        }
        if (!book) {
            return res.status(500).send('item not found')
        }
        return res.status(200).json(book)
    })
    

}catch(err){
    return res.status(500).send(err.message)
}
})


app.delete("/books/:id", async (request, response) => {
    try {
      const book = await bookModel.findByIdAndDelete(request.params.id);
  
      if (!book) {
      response.status(404).send("No item found");
      }
      response.status(200).send();
    } catch (error) {
      response.status(500).send(error);
    }
  });

module.exports = app;