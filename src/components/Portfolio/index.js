import React, { useState } from 'react'; 
import Project from "../Project"; 

function Portfolio() { 

    // my projects 
    const [projects] = useState([
        { 
            name: 'Cake App', 
            description: 'Fullstack App HTML, CSS, Bootstrap, Javascript, JQUERY',
            link:"https://cake-lab-app.herokuapp.com/", 
            repo: "https://github.com/lylylong/cake-app.git"
        }, 
        { 
            name: 'Moviegoer', 
            description: 'MERN Stack', 
            link: "https://moviegoer-2021.herokuapp.com/", 
            repo: "https://github.com/lylylong/moviegoer"
        }, 
        { 
            name: 'Covid19 Tracking App', 
            descripton: 'HTML,CSS,Javascript',
            link: "https://briebencich.github.io/Covid-19-Tracking", 
            repo: "https://github.com/BrieBencich/Covid-19-Tracking"
        }, 
        { 
            name: 'Weather Tracking App', 
            description: 'HTML, CSS, Javascript',
            link: " https://briebencich.github.io/Weather-Application/", 
            repo: "https://github.com/BrieBencich/Weather-Application"

        },
    ]);

    return ( 
        <div>
            <div className="flex-row">
                {projects.map((project, idx) => (
                <Project 
                project={project}
                key={"project" + idx}
                />
                ))}
            </div>
        </div>

    );

} ; 

export default Portfolio; 

