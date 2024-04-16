import Members from "../components/Members";
import Model from "react-modal";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import "../components/style.css";


export default function MyTeam() {

    const [ leavePopUp, setLeavePopup ] = useState(false);
    const [team, setTeam] = useState([]);
    // const [ inTeam, setInTeam ] = useState();
    const navigate = useNavigate();


    useEffect(() => {
        getTeam();
      }, []);
    
      const getTeam = async event => {
        const emailJSON = {
            email: localStorage.getItem("email")
            // email: 'julia@ufl.edu'
            //email: 'masterbear123@ufl.edu'
        }

        try {
          const response = await fetch('/student/team', {
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
            //email: 'masterbear123@ufl.edu'

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
            // setInTeam(false);
            // Clear form data after successful submission
          } else {
            console.error('Failed to send data');
          }
        } catch (error) {
          console.error('Error sending data:', error);
      }

      setLeavePopup(false)
      navigate(0);
      
      };

    function checkedInTeam() {

        if(team.length > 1 || team.pID != null) {
          // does have team
          console.log("has team");
          return true;
        }
        else {
          return false;
        }
    }


    if (checkedInTeam()) {
            return (
                <body className="signedIn">
                    <div className="page-title">
                        <div className="text-wrapper">My Team</div>
                        {/* Should it be the name of the team? */}
                    </div>
                    

                    <h2 className="flex-title center">
                        <div className="team-title1">Name</div>
                        <div className="team-title2">Contact</div>
                    </h2>
                    <hr />

                        {team.map(item => (
                                <div className="memFlex">
                                    <div className="memCar1" key = {item.EMAIL}>{item.STUDENTNAME}</div>
                                    <div className="memCar3" key = {item.EMAIL}>{item.EMAIL}</div>
                                </div>   
                        ))}
       
                    <button className="leaveButton" onClick={()=> setLeavePopup(true)}>Leave Team</button>
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
                        <h3 className="descText leaveText">Do you want to leave the team?</h3>
                        <br></br>
                        <button className="eventButton yesButton" onClick={leaveTeam}>Yes</button>
                        <button className="eventButton" onClick={()=>setLeavePopup(false)}>No</button>
                    </Model>
                </body>
            );
        }
        else {
            return (
                <body className="signedIn">
                    <div className="page-title">
                        <div className="text-wrapper teamWarn">Please Join A Team</div>
                    </div>
                </body>
            );
        }

    
}