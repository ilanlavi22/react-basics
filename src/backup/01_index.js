import React from 'react';
import ReactDOM from 'react-dom'
import './styles.css'


const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}
const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/91YKVfaKDsL._AC_UL604_SR604,400_.jpg" alt='' />
const Title = () => <h1>Hippity, Little Bunny - Finger Puppet</h1>
const Author = () => <h4 style={{ marginBlock: '0.5rem', fontSize: '0.7rem', color: 'deepskyblue' }}>Cottage Door Press</h4>

// const Person = () => <h2 className='myclass'>John Doe</h2>;
// const Message = () => {
//   return <p>This is my message</p>
// };

// function Greeting() {
//   return <h4>Hello1</h4>
// }
ReactDOM.render(<BookList />, document.getElementById('root'))