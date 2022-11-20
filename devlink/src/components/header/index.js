import './header.css'
//import {Link} from 'react-router-dom'
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Header(){
    return(
        <Navbar fixed='top' className='justify-content-center'>
        <Container>
          <Nav className='links'>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}