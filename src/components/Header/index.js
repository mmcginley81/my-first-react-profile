import React from 'react';

function Header(props){

    return(

        <header className="flex-row px-1 bg-light">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        <h2>
          <a data-testid="link" href="/">
            Matt McGinley
          </a>

        </h2>{props.children}
        </header>

    )
}

export default Header;