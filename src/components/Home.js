import React from 'react';
import './Home.css';
import bg from './bg.jpg';
import f from './f.png';
import ftitle from './ftitle.png';
import tb from './tb.png';
import b1 from './b1.png';
import b2 from './b2.png';
import b3 from './b3.png';
import b4 from './b4.png';

import b5 from './b55-n.png';

import b6 from './b6-removebg-preview.png';
import b7 from './b7-removebg-preview.png';
import b8 from './b8-removebg-preview.png';
import b9 from './b9-removebg-preview.png';
import b10 from './b6-n.png';
import Mike from './Mike-Yam.png';
import Renee from './Renee-Nicholson.png';

const Header = () => {
  return (
    <header className="App-header ">

      <div className='main'>
      <div className="header-content">
      <img src={f} alt="title" className='icon' />
        <nav>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </div>
      
      <div className="dis">
        <div>
        <h2>
       Welcome to Your Personalized Book Library
       </h2>
       <p >
            Discover a world of curated literature tailored to your 
              unique tastes and interests. Our personalized book library 
               offers a vast collection of genres and titles, ensuring
               that you'll find the perfect read for every mood. </p>
       <p>
             Whether you're a fan of thrilling mysteries,
                heartwarming romances, or enlightening non-fiction, your next great read awaits. </p>
        <p className='p3'>
         <strong>Explore, enjoy with us!!</strong></p>
      </div>
      
      <img src={tb} alt="title" className='b' />
     </div>
     </div>




<div className='sec2'>
 <h1>Featured Books</h1>

    <div className="Bcard">
      <img src={b1} alt="title" />
      <p><strong>Price- </strong>$ 40/-</p>
    </div>

    <div className="Bcard">
      <img src={b2} alt="title" />
      
      <p><strong>Price- </strong> $ 100/-</p>
    </div>

    <div className="Bcard">
      <img src={b3} alt="title" />
     
      <p><strong>Price- </strong>$ 20/-</p>
    </div>

    <div className="Bcard">
      <img src={b4} alt="title" />
      <p><strong>Price- </strong>$ 50/-</p>
    </div>
   

    <div className="Bcard">
      <img src={b5} alt="title" />
      <p><strong>Price- </strong>$ 40/-</p>
    </div>
    <div className="Bcard">
      <img src={b6} alt="title" />
      
      <p><strong>Price- </strong> $ 50/-</p>
    </div>
    <div className="Bcard">
      <img src={b7} alt="title" />
      <p><strong>Price- </strong> $ 80/-</p>
    </div>
    <div className="Bcard">
      <img src={b8} alt="title" />
      <p><strong>Price- </strong>$ 20/-</p>
    </div>
    <div className="Bcard">
      <img src={b9} alt="title" />
      <p><strong>Price- </strong>$ 150/-</p>
    </div>
    <div className="Bcard">
      <img src={b10} alt="title" />
      <p><strong>Price- </strong> $ 50/-</p>
    </div>
</div>
    


<div className="Bcard2 Bcard3">
      <img src={ftitle} alt="title" />
      <div className="card-body">
        <p className='pt'> World of Falded Pages is here.</p>
           <p className='pt'>
Explore this world and live in it.</p>
      </div>
    </div>


<div className='sec'>
 <h1>Testimonials</h1>

    <div className="Bcard2 t1">
      <img src={Mike} alt="title" />
      <div className="card-body">
        <p className='pt'> " I can’t thank you guys enough for all the help. 
          I know how much of a grind all of this is, and your constant 
          push and ideas were terrific! "</p>
          <p className='pt'>
 - Michael Yam
Author of the children's picture book Fried Rice & Marinara and NFL Network studio host</p>
      </div>
    </div>

    <div className="Bcard2 t2">
      <img src={Renee} alt="title" />
      <div className="card-body">
        <p className='pt'> "One of the best things
           I did for my book was to hire Books Forward to create and execute a publicity campaign. "</p>
           <p className='pt'>
- Renee Nicholson
Author of the Library Journal-heralded Fierce and Delicate: Essays on Dance and Illness</p>
      </div>
    </div>

  
</div>




    </header>
  );
};

export default Header;
