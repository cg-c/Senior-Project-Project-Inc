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
        
    }


    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label>Project Name: 
                    <input type="text" />
                </label>
                <h4>Select Programming Languages: </h4>
                <MultiSelect className="multiselect" value={selectedLang} options={options} onChange={setSelectedLang} />
                <h4>Select Application Type:</h4>
                <select name="type">
                    <option value="mobile">Mobile App</option>
                    <option value="website">Website</option>
                    <option value="robotics">Robotics</option>
                </select>
                <label>Description: 
                    <textarea name="description" />
                </label>
                <label>Contact:
                    <input type="text" />
                </label>
                <input type="submit" />
            </form>
        </div>
    );
}
