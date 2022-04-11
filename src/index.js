import React from 'react';
import ReactDOM from 'react-dom/client'
import './styles.css'
import books from './books.js'

//Setup Vars

// const books = [
//   {
//     id: 1,
//     title: 'Hippity, Little Bunny - Finger Puppet',
//     author: 'Cottage Door Press',
//     img: 'https://images-na.ssl-images-amazon.com/images/I/91YKVfaKDsL._AC_UL604_SR604,400_.jpg'
//   },

//   {
//     id: 2,
//     title: 'Where the Crawdads Sing',
//     author: 'Delia Owens',
//     img: 'https://images-na.ssl-images-amazon.com/images/I/61m1Vxw8tiL._AC_UL604_SR604,400_.jpg',
//   }
// ];

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          // <Book key={book.id} book={book}></Book> option 1
          <Book key={book.id} {...book}></Book> // option 2 using spread operator
        )
      })}
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  // const { img, title, author } = props.book; related to option 1
  const { name, age, image } = props; // related to option 2
  return (
    <article className='book'>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <h4>{age}</h4>
    </article>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);