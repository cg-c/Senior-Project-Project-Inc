import React, { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import { Link } from 'react-router-dom';
import './Navbar.css';

import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

//images
import UFlogo from '../images/UF-logo.png';
import MenuIcon from '../images/Hamburger_icon.png';
import CloseIcon from '../images/Close_icon.png';

const types = ['Student', 'Advisor', 'Admin', 'Default']
/*global google*/


function Navbar() {
  //login stuff
  const [ user, setUser ] = useState({});

  //popups
  let [isOpen, setIsOpen] = useState(false);
  let [selected, setSelected] = useState(types[0]);
  let [error, setError] = useState(false);
  let [showText, setShowText] = useState(false);
  let [inputValue, setInputValue] = useState('');

  //permissions
  let [account, setAccount] = useState(types[3]);
  const [userData, setUserData] = useState([]);
  const [exists, setExists] = useState(false);

  const [SignInData, SetSignIN] = useState({
        PID: null,
        NAME: '',
        UFID: 87654321,
        EMAIL: '',
    // Add more fields if needed
  });


  //refresh the page 
  function refreshPage(){ 
    window.location.reload(); 
  }


  //Send Sign in to backend
  const SubmitSignIn = async event => {
    try {
      const response = await fetch('/student/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(SignInData)
      });
      if (response.ok) {
        console.log('Data sent successfully');
        // Clear form data after successful submission
      } else {
        console.error('Failed to send data');
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  //Send advisor Sign in to backend
  const submitAdvisorSignIn = async event => {
    try {
      const response = await fetch('/advisor/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(SignInData)
      });
      if (response.ok) {
        console.log('Data sent successfully');
        // Clear form data after successful submission
      } else {
        console.error('Failed to send data');
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };


  const advisorOrStud = () => {
    if(userData.length == 0) {
      // set first time sign in
      setExists(false);
    }
    else if(userData[0].EMAIL == null) {
      // set advisor
      setExists(true);
    }
    else {
      // set student
      setExists(true);
    }
  };


  const doesExist = async event => {
    const emailJSON = {
      email: localStorage.getItem("email")
    }
    try {
      const response = await fetch('/check/has', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailJSON)
      });
      if (response.ok) {
        console.log('Data sent successfully');
        const jsonData = await response.json();
        console.log(jsonData);
        setUserData(jsonData); //TODO: change later
        advisorOrStud();
        // Clear form data after successful submission
      } else {
        console.error('Failed to send data');
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  function closeModal() {

    let id = inputValue;
    if (id.length == 8 && /^\d*$/.test(id)){
      hideText(); //ufid error text
      setIsOpen(false); //closes modal
      setAccount(selected); //sets user account
      localStorage.setItem('account', selected);

      
      SignInData.EMAIL = user.email;
      SignInData.NAME = user.given_name + " " + user.family_name;
      SignInData.UFID = id;

      if(localStorage.getItem('account') == 'Student') {
        SubmitSignIn();
      }
      else if(localStorage.getItem('account') == 'Advisor') {
        submitAdvisorSignIn();
      }
      else {
        // include stuff for admin
      }

      refreshPage();
    }
    else{
      openText(); //ufid error text
    }
    
  }
  function openModal() {
    setIsOpen(true);
  }
  function closeError() {
    setError(false);
  }
  function openError() {
    setError(true);
  }
  function openText() {
    setShowText(true);
  }
  function hideText(){
    setShowText(false);
  }



  function handleSignOut(event) {
    setUser({});
    localStorage.removeItem("email");
    document.getElementById("signInDiv").hidden = false;
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
    /*
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
    */

    function handleLogin(response) {
      closeMobileMenu();
      console.log("Encoded JWT ID Token: " + response.credential);
      var userObj = jwtDecode(response.credential);
      console.log(userObj);
  
      //checking if user has gatorlink
      if (userObj.email && userObj.email.includes("@ufl.edu")) {
  
        setUser(userObj);
        localStorage.setItem("email", userObj.email);
  
        document.getElementById("signInDiv").hidden = true;
  
        doesExist();
        if (!exists){
          openModal(); //opens first time account creation popup
        }
        
      } else {
        console.log("User's email is not a gatorlink");
        openError(); //opens invalid sign-in popup
      }
      
    }

    const handleCallbackResponse = (response) => {
      const { credential } = response;
      if (credential) {
        // User is authenticated, you can save the credential or do further actions
        localStorage.setItem('googleCredential', JSON.stringify(credential));
        handleLogin(response);
        // Redirect or do further actions
      } else {
        // User failed to authenticate, handle accordingly
      }
    };

    const loadGoogleSignIn = () => {
      google.accounts.id.initialize({
        client_id: "429389368839-m58qo46gt4olevpripa856uvrlnl8arb.apps.googleusercontent.com",
        callback: handleCallbackResponse,
        auto_select: true
      });

      google.accounts.id.prompt();
    };

    const cachedCredential = localStorage.getItem('googleCredential');
    const cachedAccount = localStorage.getItem('account');
    console.log("cached account: ", cachedAccount);
    if (cachedCredential) {
      // If there's a cached credential, try to authenticate silently
      google.accounts.id.initialize({
        client_id: "429389368839-m58qo46gt4olevpripa856uvrlnl8arb.apps.googleusercontent.com",
        callback: handleCallbackResponse,
        auto_select: true,
        prompt: "none"
      });
      setAccount(cachedAccount);
      setUser(cachedCredential);
      document.getElementById("signInDiv").hidden = true;

    } else {
      // If no cached credential, load Google Sign-In normally
      loadGoogleSignIn();
    }

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );

    //menu stuff
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/home">
            <img className='navbar-logo' src={UFlogo} width="200" height="150" onClick={openModal} />
          </Link>
        
          <div className='menu-icon' onClick={handleClick}>
            <img src={click ? CloseIcon : MenuIcon}  width="40" height="40"/>
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

            {Object.keys(user).length !== 0 && account === types[0] &&
            <li className='nav-item'>
              <Link
                to='/advisorsprojects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            }

            {Object.keys(user).length !== 0 && account === types[0] &&
            <li className='nav-item'>
              <Link
                to='/projectpitch'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Pitch
              </Link>
            </li>
            }

            {Object.keys(user).length !== 0 && account === types[0] &&
            <li className='nav-item'>
              <Link
                to='/myteam'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                My Team
              </Link>
            </li>
            }

            {Object.keys(user).length !== 0 && account === types[1] &&
            <li className='nav-item'>
              <Link
                to='/addadvisorsprojects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            }

            {Object.keys(user).length !== 0 && account === types[1] &&
            <li className='nav-item'>
              <Link
                to='/mystudents'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                My Team
              </Link>
            </li>
            }

            {Object.keys(user).length !== 0 && account === types[1] &&
            <li className='nav-item'>
              <Link
                to='/grades'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Grades
              </Link>
            </li>
            }

            {Object.keys(user).length !== 0 && account === types[2] &&
            <li className='nav-item'>
              <Link
                to='/directory'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Directory
              </Link>
            </li>
            }

            {Object.keys(user).length !== 0 &&
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={(e) => handleSignOut(e)}
              >
                Logout
              </Link>
            </li>
            }
            
            {user &&
            <div className='nav-item pt-5 pl-4 pb-4' id="signInDiv"></div>
            }
          </ul>

        </div>
      </nav>




      <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={function() {}}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                    >
                        Account Type
                    </Dialog.Title>
                    <div className="mt-2">


                      <div className="w-full px-4 py-4">
                          <div className="mx-auto w-full max-w-md">
                              <RadioGroup value={selected} onChange={setSelected}>
                              
                              <div className="space-y-2">
                                  {types.slice(0,2).map((type) => (
                                  <RadioGroup.Option
                                      key={type}
                                      value={type}
                                      className={({ active, checked }) =>
                                      `${
                                          active
                                          ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300'
                                          : ''
                                      }
                                      ${checked ? 'bg-sky-900/75 text-white' : 'bg-white'}
                                          relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                                      }
                                  >
                                      {({ active, checked }) => (
                                      <>
                                          <div className="flex w-full items-center justify-between">
                                          <div className="flex items-center">
                                              <div className="text-sm">

                                              <RadioGroup.Label
                                                  as="p"
                                                  className={`font-medium  ${
                                                  checked ? 'text-white' : 'text-gray-900'
                                                  }`}
                                              >
                                                  {type}
                                              </RadioGroup.Label>
                                              
                                              </div>
                                          </div>
                                          {checked && (
                                              <div className="shrink-0 text-white">
                                              <CheckIcon className="h-6 w-6" />
                                              </div>
                                          )}
                                          </div>
                                      </>
                                      )}
                                  </RadioGroup.Option>
                                  ))}
                              </div>
                              </RadioGroup>
                          </div>
                      </div>
                  </div>

                  <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                    >
                        UFID
                    </Dialog.Title>
                    <div className="mt-2">
                      <label>
                        <input className="border-2 border-black outline-none" name="ufid" maxLength="8" value={inputValue} onChange={handleChange}/>
                      </label>
                      {showText && <p className="text-red-700">*Please input a valid UFID</p>}
                    </div>

                  <div className="mt-4">
                      <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                      >
                      Submit
                      </button>
                  </div>
                  </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>




        <Transition appear show={error} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeError}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Invalid Sign-in
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Please log in with a gatorlink account.
                      </p>
                    </div>

                    <div className="mt-4">
                        <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeError}
                        >
                        Got It!
                        </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
    </>
  );
}

export default Navbar;
