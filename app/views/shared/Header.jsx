import React from 'react';
import {Button, Form, FormControl, FormLabel, Nav, Navbar} from 'react-bootstrap';

const Header = (props) => {

    return (
        <Navbar bg="primary" expand="lg" variant="dark full">
            <Navbar.Brand href="/">Project Explorer</Navbar.Brand>
            <Navbar.Collapse>
                <Form name="searchForm">
                    <FormLabel className="sr-only">Search Projects:</FormLabel>
                    <FormControl type="text" name="searchForm" placeholder="Search Projects" />
                    <Button variant="outline-light" type="submit">Search</Button>
                </Form>
                <Nav className="mr-auto">
                    <Nav.Link href="/projects/submit">Projects</Nav.Link>
                </Nav>

                <Nav className="ml-auto">
                    {props.user ?
                        (<>
                        <Nav.Link href="/logout" id="logout">Logout</Nav.Link>
                        <Navbar.Text id="username">{`Hi ${props.user.firstname}`}</Navbar.Text>
                        </>) : (<>
                        <Nav.Link href="/signup" id="signup">Sign Up</Nav.Link>
                        <Nav.Link href="/login" id="login">Login</Nav.Link>
                        </>)}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;
