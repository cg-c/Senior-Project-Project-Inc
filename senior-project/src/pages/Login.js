import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

export default function Login() {

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID Token: " + response.credential);
        
    }

    useEffect(() => {
        /* Global Google */
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
        </>
    );
}