import React from 'react'

import './Projects.css'
import './History.css'

function History() {
    return (
        <div className='projects'>
            <hr />

            <div className='project-container about'>
                <h2> Added About Page and Router </h2>
                <div className="skill-time">
                    <p className="project-skill"> React Bootstrap, Router, HashRouter </p>
                    <p className="project-time">02/07 2020</p>
                </div>
                <div className="project-description">
                    <ul>
                        <li> So that I could have multiple pages on my portfolio, this website may be updated in the future</li>
                    </ul>
                </div>
            </div>


            <div className='project-container about'>
                <h2> Added icon of info, and ToolTips </h2>
                <div className="skill-time">
                    <p className="project-skill"> Font-Awesome, and Metrial-UI </p>
                    <p className="project-time">02/05 2020</p>
                </div>
                <div className="project-description">
                    <ul>
                        <li> Customized ToolTips </li>
                    </ul>
                </div>
            </div>

            <div className='project-container about'>
                <h2> Added Avatar, and Projects </h2>
                <div className="skill-time">
                    <p className="project-skill"> React Bootstrap </p>
                    <p className="project-time">02/04 2020</p>
                </div>
                <div className="project-description">
                    {/* <p> • Customized ToolTips </p> */}
                </div>
            </div>

        </div>
    )
}

export default History;