import React from "react";
//import { NavLink } from 'react-router-dom'
// we're gonna lose the ability for the (active) page that we're on to be selected by switching to react-bootstrap
import { Navbar, Nav } from "react-bootstrap";
import Contents from "./spaRouting.jsx";

function NavBar(){
    return ( 
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/" className="ml-3">Poe Stats</Navbar.Brand>
            <Nav>
                <Nav.Link href="/charts">Top Performers</Nav.Link>
            </Nav>         
        </Navbar>
    )
}
//<Nav.Link href="/report">Reports</Nav.Link>

export default function Page() {
    return (
        <div>
            <NavBar />
            <Contents />
        </div>
    )
}