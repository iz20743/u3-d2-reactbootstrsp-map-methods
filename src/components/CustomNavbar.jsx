import { Component } from "react";
import{Container, Navbar, NavDropdown, Nav,} from 'react-bootstrap';


class CustomNavbar extends Component{
    render(){
        return(
            <div className="justi">
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <NavDropdown title="GENER" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">FANTASY</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        HISTORY
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        ROMANCE
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action6">
                                        SIFI
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

        );
    }

}

export default CustomNavbar