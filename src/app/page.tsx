import React from 'react';
import '../styles/layout.css'
import { getTodo } from '../apis/testApi';

const Home: React.FC = async () => {

  const data = await getTodo();

  return (
    <main id='main-container'>
      <section id='main-section'>main</section>
      <div id='card-container'>
        {Array.from(data).map((todo) => {
          return <div className='card-item'><p>{todo.id}</p><p>{todo.title}</p></div>
        })}
      </div>
    </main>
  );
};

export default Home;
