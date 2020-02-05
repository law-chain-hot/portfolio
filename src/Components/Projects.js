import React from 'react'
// import { Image } from 'react-bootstrap'
import './Projects.css'

function Projects() {
    return (
        <div className='projects'>
            <hr />
            <div className='project-container'>
                <h2> Restaurant / Llama Homepage </h2>
                <div className="skill-time">
                    <p className="project-skill"> Bootstrap, SCSS, Gulp, jQuery, HTML, CSS, JavaScript </p>
                    <p className="project-time">December 2019</p>
                </div>
                <a href="https://law-chain-hot.github.io/recipe-project" >
                    <img src={require('./../../src/download-2.png')} alt='' className="project-img" />
                </a>
                <div className="project-description">
                    <p> • Provided detailed information about the restaurant homepage page, about page, and contact page </p>
                    <p> • Facilitated responsive layout and design with Bootstrap, Sass, and Gulp </p>
                    <p> • Features: Carousel, Navigation and Navigation Bar, Breadcrumb</p>
                </div>
            </div>




            <div className='project-container'>
                <h2> Recipe Search Website </h2>
                <div className="skill-time">
                    <p className="project-skill"> Webpack, Babel, Axios, Forkify-API, HTML, CSS, JavaScript </p>
                    <p className="project-time">November 2019</p>
                </div>
                <a href="https://law-chain-hot.github.io/recipe-project">
                    <img src={require('./../../src/download-2.png')} alt='' className="project-img" />
                </a>
                <div className="project-description">
                    <p> • Built a website for user to search recipes by plain JavaScript </p>
                    <p> • User changes the serving of a certain recipe and gets the corresponding amount of ingredients </p>
                    <p> • Implemented likes button enables the user to add specific recipe into likes, which allow the user to quickly find it via localStorage when user reload the website next time</p>
                    <p>• Features: pagination, adding an item into likes, adding/deleting ingredient, localstorage</p>
                </div>
            </div>

            <div className='project-container'>
                <h2> Restaurant / Llama Homepage </h2>
                <div className="skill-time">
                    <p className="project-skill"> Bootstrap, SCSS, Gulp, jQuery, HTML, CSS, JavaScript </p>
                    <p className="project-time">December 2019</p>
                </div>
                <a href="https://law-chain-hot.github.io/recipe-project">
                    <img src={require('./../../src/download-2.png')} alt='' className="project-img" />
                </a>
                <div className="project-description">
                    <p> • Provided detailed information about the restaurant homepage page, about page, and contact page </p>
                    <p> • Facilitated responsive layout and design with Bootstrap, Sass, and Gulp </p>
                    <p> • Features: Carousel, Navigation and Navigation Bar, Breadcrumb</p>
                </div>
            </div>

            <div className='project-container'>
                <h2> Restaurant / Llama Homepage </h2>
                <div className="skill-time">
                    <p className="project-skill"> Bootstrap, SCSS, Gulp, jQuery, HTML, CSS, JavaScript </p>
                    <p className="project-time">December 2019</p>
                </div>
                <a href="https://law-chain-hot.github.io/recipe-project">
                    <img src={require('./../../src/download-2.png')} alt='' className="project-img" />
                </a>
                <div className="project-description">
                    <p> • Provided detailed information about the restaurant homepage page, about page, and contact page </p>
                    <p> • Facilitated responsive layout and design with Bootstrap, Sass, and Gulp </p>
                    <p> • Features: Carousel, Navigation and Navigation Bar, Breadcrumb</p>
                </div>
            </div>
        </div>
    )
}

export default Projects