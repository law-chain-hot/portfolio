import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'

import './Portfolio.css'

import Avatar from './Avatar'
import Projects from './Projects'
import ProjectsHead from './ProjectsHead'
import HistoryHead from './HistoryHead'
import AvatarInfo from './AvatarInfo'
import { HashRouter, Switch, Route, BrowserRouter as Router , Redirect} from 'react-router-dom'
import NavComponent from './NavComponent'
import History from './History'


class Portfolio extends React.Component {

    render() {
        const HomePage = () => {
            return (
                <Container>
                    <Row>
                        <Col sm={12} md={4} className='left-col'>
                            <Avatar />
                            <AvatarInfo />
                        </Col>


                        <Col sm={12} md={8} className='right-col'>
                            <ProjectsHead />
                            <Projects />
                        </Col>
                    </Row>
                </Container>
            );
        }

        const HistoryPage = () => {
            return (
                <Container>
                    <Row>
                        <Col sm={12} md={4} className='left-col'>
                            <Avatar />
                            <AvatarInfo />
                        </Col>

                        <Col sm={12} md={8} className='right-col'>
                            <HistoryHead />
                            <History />
                        </Col>
                    </Row>
                </Container>
            );
        }

        return (
            <div>
                
                <HashRouter >
                <NavComponent />
                    {/* <HomePage/> */}
                    <Switch>
                        <Route exact path='/home' component={HomePage} />
                        <Route exact path='/history' component={HistoryPage} />
                        <Redirect to='/home'/>
                    </Switch>
                </HashRouter>
            </div>

        )
    }

}

export default Portfolio;