import React from 'react';
import bgcontent from '../../assets/rectangle55.png';
import { Link } from 'react-router-dom';
import Content from "../../components/ContentCard";

const HomePage = () => {
    return(
        <>
        <Content />
        <div className='content-register'>
            <img src={bgcontent} alt='background content' />
            <div className='register-button'>
                <h1>Create Your Own Class</h1>
                <Link to='/register-page'><button>Register now</button></Link>
            </div>
        </div>
        </>
    )
}

export default HomePage