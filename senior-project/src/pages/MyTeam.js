import Members from "../components/Members";
import Model from "react-modal";
import { useState } from "react";
import "../components/style.css";


export default function MyTeam() {

    const [ leavePopUp, setLeavePopup ] = useState(false);

    const checkedInTeam = () => {

        {/* Make sure ppl are on a team --> Code, save as true or false */}

    }


    if (checkedInTeam) {
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
                    {/*
                        Jonathan: load all members & advisors 
                    */}
                    <Members />
                    <Members />
                    <Members />
                    <Members />
                    <Members />
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
                        <button className="eventButton yesButton">Yes</button>
                            {/* yes button:
                                redirect and refresh the page
                                Jonathan: delete user from the team
                            */}
                        <button className="eventButton" onClick={()=>setLeavePopup(false)}>No</button>
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