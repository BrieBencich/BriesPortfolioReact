import React from 'react'; 

function Footer() { 
    const icons = [
        { 
            name: "fab fa-github",
            link: "https://github.com/BrieBencich"
        }, 
       {
           name: "fab fa-linkedin", 
           linke: "https://www.linkedin.com/in/brie-bencich-0b04b967/"
       }
    ]

    return ( 
        <footer className="flex-row px-1">
            {icons.map(icon =>
                ( 
                    <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
                )
                )}
        </footer>
    );
}

export default Footer; 

