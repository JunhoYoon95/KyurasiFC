import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";


const Header = () => {
    return (
        <Navbar expand="lg" bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="/">Junmannn</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-football" />
                <Navbar.Collapse id="navbar-football">
                    <Nav className="ms-3">
                        <NavDropdown title="Football" id="football-dropdown">
                            <NavDropdown.Item href="/epl">EPL</NavDropdown.Item>
                            <NavDropdown.Item href="/ligue_1">Ligue 1</NavDropdown.Item>
                            <NavDropdown.Item href="/bundesliga">Bundesliga</NavDropdown.Item>
                            <NavDropdown.Item href="/laliga">Laliga</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="navbar-movie">
                    <Nav className="ms-3">
                        <NavDropdown title="Movie" id="movie-dropdown">
                            <NavDropdown.Item href="/movie">Movie</NavDropdown.Item>
                            <NavDropdown.Item href="/ligue_1">Ligue 1</NavDropdown.Item>
                            <NavDropdown.Item href="/bundesliga">Bundesliga</NavDropdown.Item>
                            <NavDropdown.Item href="/laliga">Laliga</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
               
            </Container>
        </Navbar>
    );
}

export default Header