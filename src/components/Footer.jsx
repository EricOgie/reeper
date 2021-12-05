import React from 'react';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <h1>Copyright &#169; {year}</h1>
        </footer>
    ); 
}

export default Footer;