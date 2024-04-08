import Members from "../components/Members";
import Model from "react-modal";
import { useState, useEffect } from "react";
import "../components/style.css";


export default function MyTeam() {

    const [ leavePopUp, setLeavePopup ] = useState(false);
    const [team, setTeam] = useState({});

    const iD = {
        pID: 14
    }

    useEffect(() => {
        SubmitSignIn();
      }, []);
    
      const SubmitSignIn = async event => {
        try {
          const response = await fetch('/team', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(iD)
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

    return (
        <body className="signedIn">
            <div className="page-title">
                <div className="text-wrapper">My Team</div>
                {/* Should it be the name of the team? */}
            </div>
            <h2 className="flex-title">
                <div className="team-title1">Name</div>
                <div className="team-title2">Role</div>
                <div className="team-title3">Contact</div>
            </h2>
            <hr />
            {team.map(item => (
                    <div className="memFlex">
                        <div className="memCar1" key = {item.EMAIL}>{item.STUDENTNAME}</div>
                        <div className="memCar2">Role</div>
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
                  justifyContent: 'center'
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
                <button className="eventButton">Yes</button>
                    {/* yes button:
                        redirect and refresh the page
                        Jonathan: delete user from the team
                    */}
                <button className="eventButton" onClick={()=>setLeavePopup(false)}>No</button>
            </Model>
        </body>
    );
}