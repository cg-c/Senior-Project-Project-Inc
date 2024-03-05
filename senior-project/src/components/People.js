import Model from "react-modal";
import { useState } from "react";
import "./style.css";


export default function People() {

    const [ deletePopUp, setDeletePopup ] = useState(false);

    return (
        <div>
            <div className="listPeople">
                <div>Name</div>
                <div>UFID</div>
                <div>Role</div>
                <div>Team</div>
                <button className="close" onClick={()=>setDeletePopup(true)}>X</button>
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