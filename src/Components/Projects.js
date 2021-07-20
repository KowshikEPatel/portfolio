import React from 'react'
import './Projects.css'

export default function Projects() {
    const projects = [
                        {
                            "projectname":"microURL",
                            "projectdescription": "An easy to use URL shortening tool with a graph of number of clicks on each of the links created by current user.",
                            "projectlibraries":["React router dom","React context API", "ChartJS", "Express","Gmail API", "MongoDB NodeJS driver"],
                        },
                        {
                            "projectname":"microURL",
                            "projectdescription": "An easy to use URL shortening tool with a graph of number of clicks on each of the links created by current user.",
                            "projectlibraries":["React router dom","React context API", "ChartJS", "Express","Gmail API", "MongoDB NodeJS driver"],
                        },
                        {
                            "projectname":"microURL",
                            "projectdescription": "An easy to use URL shortening tool with a graph of number of clicks on each of the links created by current user.",
                            "projectlibraries":["React router dom","React context API", "ChartJS", "Express","Gmail API", "MongoDB NodeJS driver"],
                        },
                        {
                            "projectname":"microURL",
                            "projectdescription": "An easy to use URL shortening tool with a graph of number of clicks on each of the links created by current user.",
                            "projectlibraries":["React router dom","React context API", "ChartJS", "Express","Gmail API", "MongoDB NodeJS driver"],
                        }
                    ]
    return (
        <div className='projects'>
            <div>Projects</div>
            <div className='cardelement' style={{margin:'10px',padding:'10px',fontSize:'1.0rem'}}>
                { projects.map((element,index)=>{
                    return <div key={index}>
                                <div className='cardtitle'>{element['projectname']}</div>
                                <div >{element['projectdescription']}</div>
                                <div style={{display:'flex'}}>{element['projectlibraries'].map((e,index)=>{ return <div style={{border:"2px solid green",fontSize:'0.7rem',fontWeight:'510' ,margin:'3px',padding:'3px'}} key={index}>{e}</div> })}</div>
                                <div style={{display:'flex'}}>
                                    <div style={{margin:'0 5px 0 5px'}}><a target="_blank" rel="noreferrer" href='https://github.com/KowshikEPatel/urlshortnerfe'><i className="fab fa-github"></i></a></div>
                                    <div style={{margin:'0 5px 0 5px'}}><a target="_blank" rel="noreferrer" href='https://friendly-feynman-57301c.netlify.app'><i className="fas fa-link"></i></a></div>
                                </div>
                            </div>
                })}
                  <a className='otherprojects' rel="noreferrer" targer='_blank' href='https://github.com/KowshikEPatel?tab=repositories'> Check out my other projects on github</a>
            </div>
            
        </div>
    )
}
