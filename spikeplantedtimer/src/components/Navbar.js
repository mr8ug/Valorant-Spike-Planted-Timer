
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';

import valorant_logo from '../static/images/valorant-logo.png';

function OffcanvasExample() {

    const expand = "xxl";
    return (
        <>
            <Navbar key={expand} bg="dark" variant='dark' expand={expand} className="mb-3">
                    <Container fluid>
                    
                        <Navbar.Brand href="#">
                        <img src={valorant_logo} alt="Valorant Logo" className='Header-Logo' />
                            <strong>Spike Planted</strong> Timer
                            </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    VALORANT SPIKE PLANTED TIMER
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="https://paypal.me/MR8UG?country.x=GT&locale.x=es_XC">Buy Me A Coffee ☕ </Nav.Link>
                                    <Nav.Link href="https://www.github.com/mr8ug">Github</Nav.Link>
                                </Nav>
                                
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
        </>
    );
}

export default OffcanvasExample;