import React, { useEffect } from 'react';



function Nav(props) {

    const {
        pages = [pages],
        setCurrentPage,
        currentPage
    } = props

    return (
        

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-row">
        {pages.map((Page => (
            <li className="nav-item">
                <a className="nav-link" onClick={() => setCurrentPage(Page)}>{Page.name}</a>
            </li>
        )))}
      </ul>
      </div>
    </nav>
 

    );


}

export default Nav;