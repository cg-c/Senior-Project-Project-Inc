import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { useNavigate } from "react-router-dom";
import "./style.css"
import CloseButton from "./CloseButton";
/*global google*/

const options = [
    { label: "ABAP", value: "ABAP" },
    { label: "ActionScript", value: "ActionScript" },
    { label: "Ada", value: "Ada" },
    { label: "ALGOL", value: "ALGOL" },
    { label: "Alice", value: "Alice" },
    { label: "APL", value: "APL" },
    { label: "Assembly Language", value: "Assembly Language" },
    { label: "ASP", value: "ASP" },
    { label: "Awk", value: "Awk" },
    { label: "BBC Basic", value: "BBC Basic" },
    { label: "Bootstrap", value: "Bootstrap" },
    { label: "C", value: "C" },
    { label: "C++", value: "C++" },
    { label: "C#", value: "C#" },
    { label: "Chapel", value: "Chapel" },
    { label: "Clojure", value: "Clojure" },
    { label: "COBOL", value: "COBAL" },
    { label: "COOL", value: "COOL" },
    { label: "CSS", value: "CSS" },
    { label: "D", value: "D" },
    { label: "Dart", value: "Dart" },
    { label: "Delphi", value: "Delphi" },
    { label: "Django", value: "Django" },
    { label: "Dreamweaver", value: "Dreamweaver" },
    { label: "Erlang", value: "Erlang" },
    { label: "F#", value: "F#" },
    { label: "Forth", value: "Forth" },
    { label: "Fortran", value: "Fortran" },
    { label: "Go", value: "Go" },
    { label: "Groovy", value: "Groovy" },
    { label: "Haskell", value: "Haskell" },
    { label: "HTML", value: "HTML" },
    { label: "IDL", value: "IDL" },
    { label: "INTERCAL", value: "INTERCAL" },
    { label: "Java", value: "Java" },
    { label: "JavaScript", value: "JavaScript" },
    { label: "J", value: "J" },
    { label: "Julia", value: "Julia" },
    { label: "jQuery", value: "jQuery" },
    { label: "KDB+/Q", value: "KDB+/Q" },
    { label: "Kotlin", value: "Kotlin" },
    { label: "LabVIEW", value: "LabView" },
    { label: "LaTeX", value: "LaTeX" },
    { label: "Lisp", value: "Lisp" },
    { label: "Logo", value: "Logo" },
    { label: "Lua", value: "Lua" },
    { label: "MATLAB", value: "MATLAB" },
    { label: "MetaQuotes Language", value: "MetaQuotes Language" },
    { label: "ML", value: "ML" },
    { label: "Modula-3", value: "Modula-3" },
    { label: "MS Access", value: "MS Access" },
    { label: "Node.js", value: "Node.js" },
    { label: "NXT-G", value: "NXT-G" },
    { label: "Objective-C", value: "Objective-C" },
    { label: "OCaml", value: "OCaml" },
    { label: "Perl", value: "Perl" },
    { label: "PHP", value: "PHP" },
    { label: "PL/I", value: "PL/I" },
    { label: "PostgreSQL", value: "PostgreSQL" },
    { label: "PostScript", value: "PostScript" },
    { label: "PowerShell", value: "Powershell" },
    { label: "Prolog", value: "Prolog" },
    { label: "Python", value: "Python" },
    { label: "Pure Data", value: "Pure Data" },
    { label: "R", value: "R" },
    { label: "Racket", value: "Racket" },
    { label: "RavenDB", value: "RavenDB" },
    { label: "Rexx", value: "Rexx" },
    { label: "Ruby", value: "Ruby" },
    { label: "Rust", value: "Rust" },
    { label: "SAS", value: "SAS" },
    { label: "Scala", value: "Scala" },
    { label: "Scheme", value: "Scheme" },
    { label: "Scratch", value: "Scratch" },
    { label: "Sed", value: "Sed" },
    { label: "SGML", value: "SGML" },
    { label: "Shell Scripting", value: "Shell Scripting" },
    { label: "Simula", value: "Simula" },
    { label: "Smalltalk", value: "Smalltalk" },
    { label: "SMIL", value: "SMIL" },
    { label: "SNOBOL", value: "SNOBOL" },
    { label: "SQL", value: "SQL" },
    { label: "SSI", value: "SSI" },
    { label: "Stata", value: "Stata" },
    { label: "Swift", value: "Swift" },
    { label: "Tcl/Tk", value: "Tcl/Tk" },
    { label: "TypeScript", value: "TypeScript" },
    { label: "UML", value: "UML" },
    { label: "Unix Shells", value: "Unix Shells" },
    { label: "VHDL", value: "VHDL" },
    { label: "Verilog", value: "Verilog" },
    { label: "VRML", value: "VRML" },
    { label: "XML", value: "XML" },
    { label: "Other", value: "Other" }
]

const appType = [
    {label: "AI/ML", value: "AI/ML"},
    {label: "Bioinfomatics/Health", value: "Bioinfomatics/Health"},
    {label: "Data Analysis", value: "Data Analysis"},
    {label: "Extension", value: "Extension"},
    {label: "Game", value: "Game"},
    {label: "Hardware", value: "Hardware"},
    {label: "Mobile App", value: "Mobile"},
    {label: "Natural Language Processing", value: "NLP"},
    {label: "Robotics", value: "Robotics"},
    {label: "Webscraper", value: "Webscraper"},
    {label: "Website", value: "Website"},
    {label: "Other", value: "Other"},
]


export default function AddProj() {

    const [ selectedLang, setSelectedLang ] = useState([]);
    const [ selectedAppType, setSelectedAppType ] = useState([]);
    const [ selectedName, setSlectedName ] = useState([]);
    const [ selectedCap, setSelectedCap ] = useState([]);
    const [ selectedDes, setSelectedDes ] = useState([]);
    const [ selectedEmail, setSelectedEmail ] = useState([]);
    const [ errorMess, setErrorMess ] = useState(false);
    const [newProj, setNewProj] = useState({
        NAME: null,
        CAPACITY: null, 
        DESCINPUT: null, 
        PASS: null, 
        TYPE: null,
        EMAIL: null,
        CONTACT: null,
        LANGUAGES: null
    });

    const navigate = useNavigate();


    const handleSubmit = async event => {
        event.preventDefault();
        document.getElementById("SubmitButton").style.visibility="hidden";

        newProj.LANGUAGES = selectedLang;
        newProj.TYPE = selectedAppType;
        newProj.NAME = selectedName;
        newProj.CAPACITY = selectedCap;
        newProj.DESCINPUT = selectedDes;
        newProj.CONTACT = selectedEmail;
        newProj.EMAIL = localStorage.getItem("email");

        try {
            const response = await fetch('/student/create/project', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
              },
                body: JSON.stringify(newProj)
            });
            if (response.ok) {
                document.getElementById("projPitch").reset();
                console.log('Data sent successfully');
                navigate(0);
              // Clear form data after successful submission
            } else {
                document.getElementById("SubmitButton").style.visibility="visible";
                console.error('Failed to send data');
                throw new Error();
            }
          } catch (error) {
                console.error('Error sending data:', error);
                setErrorMess(true);
          }
    }

    return (
        <div className="form">
            <h1 className="formTitle">Pitch Your Project</h1>
            <hr />
            <form onSubmit={handleSubmit} id="projPitch" >
                <div className="addCar1">
                    <label className="addFormReq">Project Name:<br />
                        <input type="text" id="projName" value={selectedName} onChange={(e) => setSlectedName(e.target.value)} required />
                    </label>
                </div>
                <div className="addCar2">
                    <h4 className="addFormReq">Select Programming Language(s):<br /></h4>
                    <MultiSelect value={selectedLang} options={options} onChange={setSelectedLang} hasSelectAll={false} id="languages" />
                </div>
                <div className="addCar3">
                    <h4 className="addFormReq">Select Application Type(s):<br /></h4>
                    <MultiSelect value={selectedAppType} options={appType} onChange={setSelectedAppType} hasSelectAll={false} id="type" />
                </div>
                <div className="addCar4">
                    <label for="quantity" className="addFormReq">Max Number of Members:<br />
                        <input type="number" id="quantity" min="2" max="5" value={selectedCap} onChange={(e) => setSelectedCap(e.target.value)} required />
                    </label>
                </div>
                <div className="addCar5">
                    <label className="addFormReq">Description:<br /> 
                        <textarea name="description" id="desc" value={selectedDes} onChange={(e) => setSelectedDes(e.target.value)}
                        placeholder="Short description of project...can include links, potential languages, looking for people..." />
                    </label>
                </div>
                <div className="addCar6">
                    <label className="addFormReq" for="text" >Contact:<br />
                        <input type="text" id="contact" value={selectedEmail} onChange={(e) => setSelectedEmail(e.target.value)} required />
                    </label>
                </div>
                <input type="submit" className="eventButton" onSubmit={()=>handleSubmit()} id="SubmitButton" />
            </form>
            {errorMess == true && <p className="bottom">Unsuccessful Submission</p>}
        </div>
    );
}
