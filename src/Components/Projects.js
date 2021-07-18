import React from 'react'
import './Projects.css'

export default function Projects() {
    const projects = [
                        {
                            "projectname":"microURL",
                            "projectdescription": "An easy to use URL shortening tool with a graph of number of clicks on each of the links ",
                            "projectlibraries":["React router dom","React context API", "ChartJS", "Gmail API",""],
                        },
                        {
                            "projectname":"",
                            "projectdescription":"",
                            "projectlibraries":[ ],
                        },
                    ]
    return (
        <div className='projects'>
            <div>Projects</div>
            <div className='cardelement'>
                <div className='cardtitle'>{projects[0]['projectname']}</div>
                <div >{projects[0]['projectdescription']}</div>
                <div style={{display:'flex'}}>{projects[0]['projectlibraries'].map((e,index)=>{ return <div style={{border:"2px solid green",fontSize:'0.7rem',fontWeight:'510' ,margin:'3px',padding:'3px'}} key={index}>{e}</div> })}</div>
                <div><a href='https://friendly-feynman-57301c.netlify.app'><i class="fas fa-link"></i></a></div>
            </div>
        </div>
    )
}
