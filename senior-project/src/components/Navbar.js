import React, { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
/*global google*/

function Navbar() {
  //login stuff
  const [ user, setUser ] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID Token: " + response.credential);
    var userObj = jwtDecode(response.credential);
    console.log(userObj);
    setUser(userObj);
    
  }

  function handleSignOut(event) {
    setUser({});
  }

  //menu stuff
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    //login stuff
    google.accounts.id.initialize({
        client_id: "429389368839-m58qo46gt4olevpripa856uvrlnl8arb.apps.googleusercontent.com",
        callback: handleCallbackResponse,
        auto_select: true
    });

    google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large" }
    );

    google.accounts.id.prompt();

    //menu stuff
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            UF
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/FAQ'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                FAQ
              </Link>
            </li>

            {Object.keys(user).length !== 0 &&
            <div>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={(e) => handleSignOut(e)}
              >
                Logout
              </Link>
            </li>

            <img src={user.picture} width={50} height={50}></img>

            </div>
            }

            {user &&
            <div id="signInDiv"></div>
            }
          </ul>
          {button && <Button buttonStyle='btn--outline'>LOGIN</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
