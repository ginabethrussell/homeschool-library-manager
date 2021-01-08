import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Character from '../character.png';

import './Home.css';


function Home() {
    const history = useHistory();
    
    return (
        <div className='home-wrapper'>
            <img className="jumbo-image" src={Character} alt='a mom in a pile of books'/>
            <div className='home-text'>
                <h1>Having trouble keeping track of your homeschool library?</h1>
                <p>As a former homeschool mom, I know what it's like to try to remember all of your books when in your local bookstore, at a used book sale, or at a homeschool convention.</p>
                <p>And how difficult it can be to keep track of all those books and resources you've loaned to your friends.</p>
                <p>With <span className='brand'>Homeschool Library Manager</span> you will have access to your home library at your fingertips. Always knowing what you have and what you've shared.</p>
                <p>Never miss out on a new resource or duplicate a purchase again.</p>
                <button onClick={()=> history.push('/signup')}className='cta-btn'>Get Started</button>
            </div>
        </div>
    )
}

export default Home;
