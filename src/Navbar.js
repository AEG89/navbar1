import React, {useState, useRef, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import logo from './logo.svg';
import {links,social} from './Data';


const Navbar = () => {
    const [showLinks,setShowLinks] = useState(true);
    const linkContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() =>{
        const linksHeight =linksRef.current.getBoundingClientRect().height;
        console.log(linksHeight);
        if(showLinks) {
            linkContainerRef.current.style.height = (linksHeight)+'px'
        }
        else{
            linkContainerRef.current.style.height = '0px'
        }
        
    },[showLinks])

    

    return <nav>
        <div className='nav-center'>
            <div className='nav-header'>
                <img src={logo} alt='logo'/>
                <button className='nav-toggle' onClick={() =>
                  setShowLinks(!showLinks)
                }>
                    <FaBars />
                </button>
            </div>
            <div className='links-container' ref={linkContainerRef}>
                <ul className='links' ref={linksRef}> 
                    {links.map((link) => {
                        const {id,url,text} = link;
                        return <li key={id}><a href={url}>{text}</a></li>
                    })}
                </ul>
            </div>
            <ul className='social-icons'>
            {social.map((sociallink) => {
                        const {id,url,icon} = sociallink;
                        return <li key={id}><a href={url}>{icon}</a></li>
                    })}
            </ul>
        </div>
    </nav>
}

export default Navbar;