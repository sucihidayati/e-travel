import react from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

const NavbarComponent = () => {
	return (
		<div>
			<Navbar variant="dark" expand="lg">
				<Container>
					<Navbar.Brand href="#home"><strong>E - </strong> TRAVEL</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="/">Home</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	)
}

export default NavbarComponent