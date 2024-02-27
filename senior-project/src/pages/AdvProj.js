import Header from "../components/Header";
import ProjCard from "../components/AdvProjCard";
import "../components/style.css"


export default function AdvProj() {
    return (
        <body>
            <div className="page-title">
                <div className="text-wrapper">Posted by Advisor</div>
            </div>
            <h2 className="flex-title">
                <div>Project</div>
                <div>Slots</div>
                <div>Descriptiom</div>
            </h2>
            <hr />
            
            {/*Display like 6 of them*/}
            <ProjCard />
        </body>
            
    )
}