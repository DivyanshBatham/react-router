import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    
    console.log(props);
    
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <a className="brand-logo">Logo</a>
                <ul className="right">
                    {/* <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li> */}

                    {/* Link get's converted to anchor tag, but it prevents deault action of anchor tag to make the request to the server. */}
                    {/* <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li> */}
                    {/* We can also use inline css styles
                    <Link to="/about" activeStyle={{ color: 'red' }}></Link> */}

                    {/* NavLink also does the same, but it also provides and class="active" */}
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>


                </ul>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);