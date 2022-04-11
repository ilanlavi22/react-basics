import React from 'react';
import ReactDOM from 'react-dom'
import './styles.css'


const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
    </section>
  )
}

const author = 'Cottage Door Press';

const Book = () => {
  const title = 'Hippity, Little Bunny - Finger Puppet';
  return (
    <article className='book'>
      <img src="https://images-na.ssl-images-amazon.com/images/I/91YKVfaKDsL._AC_UL604_SR604,400_.jpg" alt='' />
      <h1>{title.toUpperCase()}</h1>
      <h4>{author}</h4>
      {/* <p>{let x =6}</p> */}
      <p>{(6 + 2).toFixed(1)}</p>
    </article>
  )
}


ReactDOM.render(<BookList />, document.getElementById('root'))