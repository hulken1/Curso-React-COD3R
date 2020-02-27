import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";


export default class Menu extends React.Component {
    render() {
        return (
            <Navbar className='navbar-dark bg-dark'>
                <Container>
                    <Navbar>
                        <Navbar.Brand href='/todos'>
                            <FontAwesomeIcon icon={faCalendarCheck} /> TodoApp
                        </Navbar.Brand>
                    </Navbar>
                    <Navbar.Collapse id='navbar'>
                        <Nav>
                            <Nav.Link href='/todos'>Tarefas</Nav.Link>
                            <Nav.Link href='/about'>Sobre</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
