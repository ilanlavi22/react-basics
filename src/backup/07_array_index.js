import React from 'react';
import ReactDOM from 'react-dom/client'
import './styles.css'

//Setup Vars

const books = [
  {
    title: 'Hippity, Little Bunny - Finger Puppet',
    author: 'Cottage Door Press',
    img: 'https://images-na.ssl-images-amazon.com/images/I/91YKVfaKDsL._AC_UL604_SR604,400_.jpg'
  },

  {
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    img: 'https://images-na.ssl-images-amazon.com/images/I/61m1Vxw8tiL._AC_UL604_SR604,400_.jpg',
  }
]

let names = ['John', 'Peter', 'Sussan']
let newNames = names.map((name) => {
  return <h1>{name}</h1>;
});

const BookList = () => {
  return (
    <section className='booklist'>
      {newNames}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);