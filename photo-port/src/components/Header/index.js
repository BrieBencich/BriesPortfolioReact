import React from 'react'; 
import coverImage from '../../assets/cover/..'; 

function Header(props) { 

    return ( 
        <header className="flex-row space-between px-1">
            <h1>Brie Bencich</h1>
            {props.children}
        </header>
    );
}

export default Header; 

