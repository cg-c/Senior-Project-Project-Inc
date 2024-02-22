import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import AuthContext from "../context/AuthProvider";
import axios from '../api/axios';

const LOGIN_URL = '/login';

export default function Login() {

    {/* More global state or redux to manage user --> don't use states, just here for now*/}
    const [ user, setUser ] = useState({});
    const { setAuth } = useContext(AuthContext);

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID Token: " + response.credential);
        var userObj = jwtDecode(response.credential);
        console.log(userObj);
        setUser(userObj);
        
        document.getElementById("signInDiv").hidden=true;
    }

    function handleSignOut(event) {
        setUser({});
        document.getElementById("signInDiv").hidden=false;
    }

    useEffect(() => {
        /*global google*/
        
        google.accounts.id.initialize({
            client_id: "429389368839-m58qo46gt4olevpripa856uvrlnl8arb.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        );

    }, []);


    return (
        <>
            <Header />
            <Navbar />
            <h2>Login Page</h2>
            <div id="signInDiv"></div>

            { Object.keys(user).length != 0 &&
                <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
            }

            {/* testing, will redirect the user once they sign in */}
            { user && 
                <div>
                    <img src={user.picture}></img>
                    <h3>{user.name}</h3>
                </div>
            }
        </>
    );
}