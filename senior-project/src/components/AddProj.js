import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import "./style.css"
import CloseButton from "./CloseButton";

const options = [
    { label: "C++", value: "C++" },
    { label: "C", value: "C" },
    { label: "C#", value: "C#" }
]

export default function AddProj() {

    const [selectedLang, setSelectedLang] = useState([]);


    const handleSubmit = (event) => {
        event.preventDefault();
        {/* 
            Submit:
                close popup & refresh page --> display proj?
                Jonathan: add proj to database
    
        */}
    }


    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="addCar1">
                    <label className="addFormReq">Project Name: 
                        <input type="text" id="projName" />
                    </label>
                </div>
                <div className="addCar2">
                    <h4 className="addFormReq">Select Programming Languages: </h4>
                    <MultiSelect value={selectedLang} options={options} onChange={setSelectedLang} id="languages" />
                </div>
                <div className="addCar3">
                    <h4 className="addFormReq">Select Application Type:</h4>
                    <select name="type" id="appType">
                        <option value="mobile">Mobile App</option>
                        <option value="website">Website</option>
                        <option value="robotics">Robotics</option>
                    </select>
                </div>
                <div className="addCar4">
                    <label className="addFormReq">Description: 
                        <textarea name="description" id="desc" />
                    </label>
                </div>
                <div className="addCar5">
                    <label className="addFormReq">Contact:
                        <input type="text" id="contact" />
                    </label>
                </div>
                <input type="submit" className="eventButton" onSubmit={()=>handleSubmit()} />
            </form>
        </div>
    );
}
