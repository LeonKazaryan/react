import './Library.css';
import { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import {Spin, Button, Card, Input} from 'antd';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes, Link, useParams} from 'react-router-dom';
import TextArea from 'antd/lib/input/TextArea';

let books = 
[
    {
        'name':'HTML',
        'author':'Anton Zemel',
        'year':2019,
        'id':1,
        'available':true,
        'description':'a book about HTML codding and the begging of making sites'
    },
    {
        'name':'CSS',
        'author':'Anton Zemel',
        'year':'2020',
        'id':2,
        'available':true,
        'description':'a book about HTML codding and the begging of making sites'
    },
    {
        'name':'Java Script',
        'author':'Anton Zemel',
        'year':2021,
        'id':3,
        'available':true,
        'description':'HTML codding and the begging of making sites'
    },
    {
        'name':'VUE',
        'author':'Shadiyar',
        'year':2021,
        'id':4,
        'available':true,
        'description':'HTML codding and the begging of making sites'

    },
    {
        'name':'Angular',
        'author':'Artyom from Zaporozhye',
        'year':2021,
        'id':5,
        'available':true,
        'description':'HTML codding and the begging of making sites'
    },
    {
        'name':'React',
        'author':'Sergey',
        'year':'2022',
        'id':6,
        'available':false,
        'description':'HTML codding and the begging of making sites'
    },
];

function Book({book}:any){
    let [available,setavailable]=useState(book.available)
    return <div className={available?'cards__card_available site-card-border-less-wrapper cards__card':'cards__card_notavailable site-card-border-less-wrapper cards__card'}>
    <Card title={book.name} bordered={true} style={{ width: 300 }}>
        <p>{book.description}</p>
        <p>{book.year}</p>
        <p><b>{book.author}</b></p>
        {available
        ?<Button onClick={()=>{setavailable(false)}}>Borrow</Button>
        :<Button onClick={()=>{setavailable(true)}} type="dashed">Return</Button>} 
    </Card>
</div>
}

export function CreatingBook(){
    return <div>
        <div className='creating__header'> Now you can create a book here</div>
        
        <form className='creating__form'>
            <div className='creating__form_name'>
                <div>Name of the book: </div>
                <Input showCount maxLength={20}/>
            </div>

            <div className='creating__form_description'>
                <div>A short description: </div>
                <Input  showCount maxLength={100} />
            </div>

            <div className='creating__form_content'>
                <div>Content: </div>
                <TextArea rows={4} maxLength={6}/>
            </div>
        </form>
    </div>
}



export function Library() {
  let availablebooks=books.filter((book)=>book.available)
  return <div>
      <div className="header">
        <div className='header__greeting'>  Welcome to our library</div>
        <div className='header__availablebooks'></div>These books are available: {availablebooks.map((book)=>book.name).join(' , ')} 
     </div>

     <div className="cards__container">
        {books.map((book)=>
           <Book book={book}></Book>
        )}
     </div>
      
     <Link to="/creatingbook"><Button type="primary">Create a new book</Button></Link>
     
     
  </div>
  //hidden={!infoVisible}
}


