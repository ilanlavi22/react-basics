import React from 'react';
import ReactDOM from 'react-dom/client'
import './styles.css'

//Setup Vars

const firstBook = {
  title: 'Hippity, Little Bunny - Finger Puppet',
  author: 'Cottage Door Press',
  img: 'https://images-na.ssl-images-amazon.com/images/I/91YKVfaKDsL._AC_UL604_SR604,400_.jpg'
}

const secondBook = {
  title: 'Where the Crawdads Sing',
  author: 'Delia Owens',
  img: 'https://images-na.ssl-images-amazon.com/images/I/61m1Vxw8tiL._AC_UL604_SR604,400_.jpg'
}

const BookList = () => {
  return (
    <section className='booklist'>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
    </section>
  )
}

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={props.img} alt='' />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);