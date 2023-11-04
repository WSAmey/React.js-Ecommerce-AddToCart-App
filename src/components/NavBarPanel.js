import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


const NavBar = () => {
    //useSelector hook is used to get or return the state from redux
    const cartProducts = useSelector(state => state.cart)
    //cartProducts variable will return all the current product that we have in cardSlice

    return (
        <div>
            <Navbar expand="lg" className="">
                <Container fluid>
                    <Navbar.Brand href="#">Ecommerce</Navbar.Brand>
                    <Nav>
                        <Nav.Link to="/" as={Link}>Products</Nav.Link>


                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className='justify-content-end'>
                        <Navbar.Text>
                            <Nav.Link to="/cart" as={Link}>My Cart {cartProducts.length}</Nav.Link>
                        </Navbar.Text>
                    </Navbar.Collapse>


                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar