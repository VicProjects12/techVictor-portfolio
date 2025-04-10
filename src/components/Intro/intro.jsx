import React from 'react'
import './intro.css'
import bg from '../../assets/profile.png';
import { Link } from 'react-scroll';
import btnImage from '../../assets/hireme.png';
const Intro = () => {
    return (
        <section id='intro'>
            <div className="introContent">
                <span className='hello'>Hello, </span>
                <span className='introText'>I'm <span className='introName'>Victor</span> <br />Software Developer</span>
                <p className='introPara'> I am a skilled software developer with a passion for creating <br /> innovative and user-friendly software applications.</p>
                <Link><button className="btn"><img src={btnImage} alt="Hire Me" className='btnImg' />Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;


