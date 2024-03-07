import Model from "react-modal";
import { useState } from "react";
import "./style.css";


export default function People() {

    const [ deletePopUp, setDeletePopup ] = useState(false);

    return (
        <div>
            <div className="flex-title listPeople">
                <div className="pplCar1">Name</div>
                <div className="pplCar2">UFID</div>
                <div className="pplCar3">Email</div>
                <div className="pplCar4">Role</div>
                <div className="pplCar5">Team</div>
                <button className="deleteButton" onClick={()=>setDeletePopup(true)}>X</button>
            </div>
            <Model isOpen={deletePopUp}>
                    <button className="closeButton" onClick={()=>setDeletePopup(false)}>X</button>
                    <h3 className="descText">Do you want to delete the user?</h3>
                    <button className="eventButton">Yes</button>
                    {/* yes button:
                            refresh the list, but stay at same place
                            Jonathan: find & delete the user
                    */}
                    <button className="eventButton" onClick={()=>setDeletePopup(false)}>No</button>
                </Model>
        </div>
    )
}