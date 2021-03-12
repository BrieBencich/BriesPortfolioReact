import React from 'react';
import PageContent from '../src/components/PageContent'; 
import About from '../src/components/About'; 
import Portfolio from '../src/components/Portfolio'; 
import Contact from '../src/components/Contact'; 
import Resume from '../src/components/Resume';
import { captializeFirstLetter } from './utils/helpers'; 

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
