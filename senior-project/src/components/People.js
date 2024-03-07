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
                <h2 className="descHeader">Delete User?</h2>
                <div>
                    <button>Yes</button>
                    <button>No</button>
                </div>
            </Model>
        </div>
    )
}