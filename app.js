import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import booksRouter from './routes/books.js';
import { pool } from './database/index.js';

const app = express();

pool.connect((err)=>{
  if(!err){
      console.log("database connected sucessfuly!");
  }
  else{
      throw err;
  }
});
const PORT=process.env.PORT || 5005;
app.use(bodyParser.json());
app.use(cors());

// app.use((req,res,next)=>{
//     res.setHeader('Acces-Control-Allow-Origin','*');
//     res.setHeader('Acces-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
//     res.setHeader('Acces-Contorl-Allow-Methods','Content-Type','Authorization');
//     next(); 
// })


app.use('/api/v1/books',booksRouter);
app.listen(PORT,()=>{
    console.log(`app is listening on http://localhost:${PORT}`);
});