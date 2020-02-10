import React from 'react'

import './Projects.css'
import './History.css'

function History() {
    return (
        <div className='projects'>
            <hr />

            <div className='project-container about'>
                <h2> 02/08 2020 </h2>
                <div className="skill-time">
                    <p className="project-skill"> image-webpack-loader </p>
                    <p className="project-time"></p>
                </div>
                <div className="project-description">
                    <ul>
                        <li> Added 'image-webpack-loader' into webpack.config.js, in order to compress images.</li>
                    </ul>
                </div>
            </div>

            <div className='project-container about'>
                <h2> 02/07 2020 </h2>
                <div className="skill-time">
                    <p className="project-skill"> React Bootstrap, Router, HashRouter </p>
                    <p className="project-time"></p>
                </div>
                <div className="project-description">
                    <ul>
                        <li> Added About Page and Router </li>
                        <li> So that I could have multiple pages on my portfolio, this website may be updated in the future</li>
                    </ul>
                </div>
            </div>


            <div className='project-container about'>
                <h2> 02/05 2020 </h2>
                <div className="skill-time">
                    <p className="project-skill"> Font-Awesome, and Metrial-UI </p>
                    <p className="project-time"></p>
                </div>
                <div className="project-description">
                    <ul>
                        <li> Added icon of info, and ToolTips </li>
                        <li> Customized ToolTips </li>
                    </ul>
                </div>
            </div>

            <div className='project-container about'>
                <h2> 02/04 2020 </h2>
                <div className="skill-time">
                    <p className="project-skill"> React Bootstrap </p>
                    <p className="project-time"></p>
                </div>
                <div className="project-description">
                    <ul>
                        <li> Added Avatar, and Projects </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default History;