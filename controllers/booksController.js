import {v4 as uuidv4}  from 'uuid'
// import mysql from 'mysql';
import { pool } from '../database/index.js';


export const getBooks=(req,res)=>{
  pool.query("SELECT * FROM books",(err,results)=>{
       if(err)  throw err;
       if(results.length > 0){
         // const books=JSON.stringify(results);
           res.send(results)
       }
       else{
           res.send({message:"no books found"})
       }
   });
 //  res.send(books);
}


export const createBooks=(req,res)=>{
   const book=req.body;
    
       
       pool.query(`insert into books values(${uuidv4()},${book.username},${book.names},${book.mediaUrl},${book.Description},NOW(),${book.likes},${book.comments})`,(err,results)=>{
          if (err) throw err;
          if(results) res.send({"message":"table column created successfully!"});
      });
       
 }

export const getBook=(req,res)=>{
  const id=req.params.id;
  pool.query(`SELECT * FROM books WHERE bookId=${id}`,(err,result)=>{
     if(err) throw err;
     if(result){
       //book.push(JSON.stringify(result));
       res.send(result);
     }
   });
    
}

 export const updatebooks=(req,res)=>{
    const id=req.params.id;
   
    res.send(`books with id ${books.id} has been updated`);
}

export const deletebooks=(req,res)=>{
    const id=req.params.id;
   let newbookss=books.filter(books=>books.id!=id);
    res.send(newbooks);
};