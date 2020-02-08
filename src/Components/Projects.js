import React from 'react'
// import { Image } from 'react-bootstrap'
import './Projects.css'

import { img1, img2, img3, img5 } from './../assets/imageRender'

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
                <a href="https://law-chain-hot.github.io/llama-website/" >
                    <img src={img5} alt='' className="project-img" />
                </a>
                <div className="project-description">
                    <ul>
                        <li> Provided detailed information about the restaurant homepage page, about page, and contact page </li>
                        <li> Facilitated responsive layout and design with Bootstrap, Sass, and Gulp </li>
                        <li> Features: Carousel, Navigation and Navigation Bar, Breadcrumb </li>
                    </ul>
                </div>
            </div>




            <div className='project-container'>
                <h2> Recipe Search Website </h2>
                <div className="skill-time">
                    <p className="project-skill"> Webpack, Babel, Axios, Forkify-API, HTML, CSS, JavaScript </p>
                    <p className="project-time">November 2019</p>
                </div>
                <a href="https://law-chain-hot.github.io/recipe-project">
                    <img src={img1} alt='' className="project-img" />
                </a>
                <div className="project-description">
                    <ul>
                        <li> Built a website for user to search recipes by plain JavaScript </li>
                        <li> User changes the serving of a certain recipe and gets the corresponding amount of ingredients </li>
                        <li> Implemented likes button enables the user to add specific recipe into likes, which allow the user to quickly find it via localStorage when user reload the website next time </li>
                        <li> Features: pagination, adding an item into likes, adding/deleting ingredient, localstorage </li>
                    </ul>
                </div>
            </div>


            <div className='project-container'>
                <h2> Budget Calculator </h2>
                <div className="skill-time">
                    <p className="project-skill"> HTML, CSS, JavaScript </p>
                    <p className="project-time">November 2019</p>
                </div>
                <a href="https://law-chain-hot.github.io/budget-project/">
                    <img src={img2} alt='' className="project-img" />
                </a>
                <div className="project-description">
                    <ul>
                        <li> Designed a single-page for the user to calculate the budget of each month for income, expenses and the proportion </li>
                        <li> Features: deleting item, key-press with enter </li>
                    </ul>
                </div>
            </div>

            <div className='project-container'>
                <h2> Pig-Game </h2>
                <div className="skill-time">
                    <p className="project-skill"> HTML, CSS, JavaScript </p>
                    <p className="project-time">October 2019</p>
                </div>
                <a href="https://law-chain-hot.github.io/pig-game-project/">
                    <img src={img3} alt='' className="project-img" />
                </a>
                <div className="project-description">
                    <ul>
                        <li> Programmed classical 1950s Pig Dice Game with two play modes </li>
                        <li> Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold" </li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Projects