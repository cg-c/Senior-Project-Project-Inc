import StuMembers from "../components/StuMembers";
import Model from "react-modal";
import { useState, useEffect } from "react";
import "../components/style.css";


export default function AdvTeam() {

    const [ leavePopUp, setLeavePopup ] = useState(false);
    const [team, setTeam] = useState([]);
    const [projects, setProjects] = useState([]);
    // const [ inTeam, setInTeam ] = useState();

    const [finalizedID, setID] = useState({
      pID: null
    });



    useEffect(() => {
        getTeam();
        getProjects();
      }, []);
    
      const getTeam = async event => {
        const emailJSON = {
            //email: localStorage.getItem("email")
            email: 'john@ufl.edu'
        }

        try {
          const response = await fetch('/advisor/team', {
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
            checkedInTeam();
            // Clear form data after successful submission
          } else {
            console.error('Failed to send data');
          }
        } catch (error) {
          console.error('Error sending data:', error);
        }
      };

      const getProjects = async event => {
        const emailJSON = {
            //email: localStorage.getItem("email")
            email: 'john@ufl.edu'
        }

        try {
          const response = await fetch('/advisor/team/projects', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(emailJSON)
          });
          if (response.ok) {
            console.log('Data sent successfully');
            const jsonData = await response.json();
            setProjects(jsonData);
            // Clear form data after successful submission
          } else {
            console.error('Failed to send data');
          }
        } catch (error) {
          console.error('Error sending data:', error);
        }
      };

      const finalizeProject = async event => {
      
        try {
          const response = await fetch('/advisor/team/projects', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(finalizedID)
          });
          if (response.ok) {
            console.log('Data sent successfully');
            const jsonData = await response.json();
            setProjects(jsonData);
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
          return true;
        }
        else {
          return false;
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


    if (checkedInTeam()) {
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
                    {team.map(item => (
                      <div className="memFlex">
                        <div className="memCar1" key = {item.EMAIL}>{item.STUDENTNAME}</div>
                        <div className="memCar2" key = {item.EMAIL}>{item.NAME}</div>
                        <div className="memCar3" key = {item.EMAIL}>{item.EMAIL}</div>
                      </div>
                    ))}
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
                        <div className="text-wrapper teamWarn">No Teams to Show</div>
                    </div>
                </body>
            );
        }

    
}