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
  img: 'https://images-na.ssl-images-amazon.com/images/I/61m1Vxw8tiL._AC_UL604_SR604,400_.jpg',
}

const BookList = () => {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ipsum!</p>
        <button>Click Me</button>
      </Book>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} comments={secondBook.comments} />
    </section>
  )
}

// const Book = (props) => {
//   const { img, title, author } = props; // deconstruct option 1

const Book = ({ img, title, author, children }) => { // deconstruct option 2
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);