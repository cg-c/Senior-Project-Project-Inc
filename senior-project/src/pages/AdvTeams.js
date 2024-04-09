import StuMembers from "../components/StuMembers";
import Model from "react-modal";
import { useState, useEffect } from "react";
import "../components/style.css";


export default function AdvTeam() {

    const [ leavePopUp, setLeavePopup ] = useState(false);
    const [team, setTeam] = useState([]);
    const [ inTeam, setInTeam ] = useState(false);

    const iD = {
        pID: 14
    }

    useEffect(() => {
        getTeam();
      }, []);
    
      const getTeam = async event => {
        const emailJSON = {
            email: localStorage.getItem("email")
        }

        try {
          const response = await fetch('/team', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(emailJSON)
          });
          if (response.ok) {
            console.log('Data sent successfully');
            const jsonData = await response.json();
            setTeam(jsonData);
            // Clear form data after successful submission
          } else {
            console.error('Failed to send data');
          }
        } catch (error) {
          console.error('Error sending data:', error);
        }
      };

      const leaveTeam = async event => {
        const emailJSON = {
            email: localStorage.getItem("email")
        }
        try {
          const response = await fetch('/team/leave', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(emailJSON)
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

    function checkedInTeam() {

        if(team.length > 1 || team.pID != null) {
          // does have team
          console.log("has team");
          setInTeam(true);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        {/* 
            Submit:
                close popup & refresh page?
                finalize team --> do we visually show this?
    
        */}
    }


    if (inTeam) {
            return (
                <body className="signedIn">
                    <div className="page-title">
                        <div className="text-wrapper">My Team</div>
                        {/* Should it be the name of the team? */}
                    </div>
                    

                    <h2 className="flex-title center">
                        <div className="team-title1">Name</div>
                        <div className="team-title2">Team</div>
                        <div className="team-title3">Contact</div>
                    </h2>
                    <hr />
                    {/*
                        Jonathan: load all members & advisors 
                    */}
                    <StuMembers />
                    <StuMembers />
                    <StuMembers />
                    <StuMembers />
                    <StuMembers />
                    <button className="leaveButton" onClick={()=> setLeavePopup(true)}>Finalize Team</button>
                    <Model isOpen={leavePopUp} style={{
                        overlay: {
                        position: 'fixed',
                        zIndex: 1020,
                        background: 'rgba(255, 255, 255, 0.75)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        },
                        content: {
                        background: 'white',
                        width: '60rem',
                        overflowY: 'auto',
                        position: 'relative'
                        }}} >
                        <button className="closeButton" onClick={()=>setLeavePopup(false)}>X</button>
                        <h3 className="formTitle">Finalize Your Team</h3>
                        <hr />
                        <div className="space" />
                        <form>
                            <h4 className="addFormReq">Which team do you want to finalize:<br /></h4>
                            <select name="teamSelect" id="teamSelect">
                                <option value="" selected disabled hidden>Select...</option>
                                <option></option>
                                {/* PULL OPTIONS FROM DATABASE*/}
                            </select>
                            <div className="space" />
                            <input type="submit" className="eventButton" onSubmit={()=>handleSubmit()} />
                        </form>
                    </Model>
                </body>
            );
        }
        else {
            return (
                <body className="signedIn">
                    <div className="page-title">
                        <div className="text-wrapper teamWarn">Please Join a Team</div>
                    </div>
                </body>
            );
        }

    
}