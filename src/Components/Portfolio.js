import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './Portfolio.css'

import Avatar from './Avatar'
import Projects from './Projects'
import ProjectsHead from './ProjectsHead'
import AvatarInfo from './AvatarInfo'

function Portfolio() {

    return (
        <Container>
            <Row>
                <Col md={12} lg={4} className='left-col'>
                    <Avatar/>
                    <AvatarInfo/>
                </Col>




                <Col md={12} lg={8} className='right-col'>
                    <ProjectsHead/>
                    <Projects/>
                </Col>
            </Row>
        </Container>
    )
}

export default Portfolio;