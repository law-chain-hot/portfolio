import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'

import './Portfolio.css'

import Avatar from './Avatar'
import Projects from './Projects'
import ProjectsHead from './ProjectsHead'
import AboutHead from './AboutHead'
import AvatarInfo from './AvatarInfo'
import { Switch, Route } from 'react-router-dom'
import NavComponent from './NavComponent'

class Portfolio extends React.Component {

    render() {
        const HomePage = () => {
            return (
                <Container>
                    <Row>
                        <Col md={12} lg={4} className='left-col'>
                            <Avatar />
                            <AvatarInfo />
                        </Col>


                        <Col md={12} lg={8} className='right-col'>
                            <ProjectsHead />
                            <Projects />
                        </Col>
                    </Row>
                </Container>
            );
        }

        const AboutPage = () => {
            return (
                <Container>
                    <Row>
                        <Col md={12} lg={4} className='left-col'>
                            <Avatar />
                            <AvatarInfo />
                        </Col>


                        <Col md={12} lg={8} className='right-col'>
                            <AboutHead />
                        </Col>
                    </Row>
                </Container>
            );
        }

        return (
            <div>
                <NavComponent />
                <HomePage/>
                {/* <HomePage/> */}
                {/* <Switch> */}
                    {/* <Route exact path='/portfolio' component={HomePage} /> */}
                    {/* <Route exact path='/portfolio#about' component={AboutPage} /> */}
                {/* </Switch> */}
            </div>

        )
    }

}

export default Portfolio;