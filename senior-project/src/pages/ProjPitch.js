import Header from "../components/Header";
import ProjCard from "../components/StuProjCard";
import AddProj from "../components/AddProj";
import Model from 'react-modal';
import InfiniteScroll from "react-infinite-scroll-component";
import "../components/style.css"
import Description from "../components/Description";
import { useState } from "react";

export default function ProjPitch() {

    const [ popup, setPopup ] = useState(false);
    const [ numPitch, setNumPitch ] = useState(Array.from({length : 10}));
    const [ des, setDes ] = useState(false);

    const fetchMorePitch = () => {
        {/* MAKE API CALLS 
        https://www.youtube.com/watch?v=31icbDtaO-k
        */}
    }

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
            <button className="add" onClick={()=>setPopup(true)}>+</button>
            <Model isOpen={popup}>
                <button className="closeButton" onClick={()=>setPopup(false)}>X</button>
                <AddProj />
            </Model>
            <hr />
            <InfiniteScroll dataLength={numPitch.length}
                loader={<p>Loading...</p>}
            >
                {numPitch.map((item, index) => {
                    return <button className="clickDes" onClick={()=>setDes(true)}><ProjCard /></button>   
                })}

                <Model isOpen={des}>
                    <button className="closeButton" onClick={()=>setDes(false)}>X</button>
                    <Description />
                </Model>

            </InfiniteScroll>
        </body>
            
    )
}