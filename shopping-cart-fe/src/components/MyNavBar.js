import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";

export default function MyNavBar() {

    const links = [
        {
            to: "",
            title: "Home"
        },
        {
            to: "items",
            title: "Items"
        },
        {
            to: "cart",
            title: "Cart"
        },
    ]

    const LoginNav = () => {
        return (
            <Nav className="ms-auto fs-4">
                <LinkContainer to="login" key="login">
                    <Nav.Link>Login/Sign Up</Nav.Link>
                </LinkContainer>
            </Nav>
        );
    };    

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <LinkContainer to="/" style={{cursor: 'pointer'}}>
                    <Navbar.Brand className="fs-2 d-flex">
                    <img src="logo.png" alt="Cart" width="40" height="40" />
                    </Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto fs-4 justify-content: flex-end">
                    {links.map((link) => (
                        <LinkContainer to={`/${link.to}`} key={link.to}>
                            <Nav.Link>{link.title}</Nav.Link>
                        </LinkContainer>
                    ))}
                </Nav>
                <LoginNav />
            </Container>
        </Navbar>
    )
}