import Members from "../components/Members";
import Model from "react-modal";
import { useState } from "react";
import "../components/style.css";


export default function MyTeam() {

    const [ leavePopUp, setLeavePopup ] = useState(false);

    return (
        <body>
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
            <Members />
            <Members />
            <Members />
            <Members />
            <Members />
            <button className="leaveButton" onClick={()=> setLeavePopup(true)}>Leave Team</button>
            <Model isOpen={leavePopUp}>
                    <button className="closeButton" onClick={()=>setLeavePopup(false)}>X</button>
                    <h3 className="descText">Do you want to leave the team?</h3>
                    <button>Yes</button>
                    <button>No</button>
                </Model>
        </body>
    );
}