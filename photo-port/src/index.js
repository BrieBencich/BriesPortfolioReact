import React from 'react';
import PageContent from '../PageContent'; 
import About from '../About'; 
import Portfolio from '../Portfolio'; 
import Contact from '../Contaact'; 
import Resume from '../Resume';
import { captializeFirstLetter } from '../../utils/helpers'; 

function Page({ currentPage }) { 
  const renderPage = () => { 
    switch (currentPage.name) { 
      case 'about me': 
      return <About />; 
      case 'protfolio': 
      return <Portfolio />; 
      case 'contact':
        return <Contact />;
        case 'resume':
          return <Resume />;
          default: 
          return <About />;
    }
  }; 


return (
  <section>
    <h2>{captializeFirstLetter(currentPage.name)}</h2>
    <PageContent>{renderPage()}</PageContent>
      </section>
); 
} 

export default Page; 
