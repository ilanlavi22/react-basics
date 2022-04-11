import React from 'react';
import ReactDOM from 'react-dom/client'
import './styles.css'

//Setup Vars

const author = 'Cottage Door Press';
const title = 'Hippity, Little Bunny - Finger Puppet';

const BookList = () => {
  return (
    <section className='booklist'>
      <Book job="developer" />
      <Book title="random title" number={22} />
    </section>
  )
}

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src="https://images-na.ssl-images-amazon.com/images/I/91YKVfaKDsL._AC_UL604_SR604,400_.jpg" alt='' />
      <h1>{title.toUpperCase()}</h1>
      <h4>{author}</h4>
      <p>{props.job}</p>
      <p>{props.number}</p>
    </article>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);