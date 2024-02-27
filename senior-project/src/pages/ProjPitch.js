import Header from "../components/Header";
import ProjCard from "../components/StuProjCard";
import "../components/style.css"


export default function ProjPitch() {
    return (
        <body>
            <div className="page-title">
                <div className="text-wrapper">Project Pitch</div>
            </div>
            <h2 className="flex-title">
                <div>Topic</div>
                <div>Slots</div>
                <div>Type</div>
                <div>Language</div>
            </h2>
            <button className="add" >+</button>
    
            <hr />

            {/*Display like 4-5 of them*/}
            <ProjCard />
        </body>
            
    )
}