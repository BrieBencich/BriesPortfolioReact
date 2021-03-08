import React, { useEffect } from 'react'; 
import Page from '../..';
import  { capitalFirstLetter } from '../../utils/helpers'; 

function Nav(props) { 
    const { 
        pages = [], 
        setCurrentPage, 
        currentPage, 
    } = props;

    useEffect(() => { 
        document.title = capitalFirstLetter(currentPage.name); 
    }, [currentPage]);

    return ( 
        <nav>
            <ul className="flex-row">
                {pages.map((page) => ( 
                    <li
                    className={`mx-5 ${
                        currentPage.name === Page.name && 'navActive'
                    }`}
                    key={Page.name}
                    >
                        <span 
                        onClick={() => setCurrentPage(Page)}
                        >
                            {capitalFirstLetter(Page.name)}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav; 
