import { Container, Nav, Navbar } from "react-bootstrap";


const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={{height:"60px"}}>
            <Container>
            <Navbar.Brand href="/">Junmannn</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/epl">EPL</Nav.Link>
                <Nav.Link href="/ligue_1">Ligue 1</Nav.Link>
                <Nav.Link href="/bundesliga">Bundesliga</Nav.Link>
                <Nav.Link href="/laliga">Laliga</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header