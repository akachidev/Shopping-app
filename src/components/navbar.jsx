import React, { Component } from 'react';


//Stateless Functional Component
//const Navbar = (props) => {}
const Navbar = ({totalCounters}) => {
    return (
        <React.Fragment>
            <nav class="navbar bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        Navbar{" "} <span className="badge badge-pill badge-secondary">
                            {totalCounters}
                        </span>
                    </a>
                </div>
            </nav>
        </React.Fragment>
    );
}
 
export default Navbar;