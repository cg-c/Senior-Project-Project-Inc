import Header from "../components/Header";
import ProjCard from "../components/AdvProjCard";
import AddProj from "../components/AddProj";
import React from "react";
import Model from "react-modal";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import "../components/style.css"

export default function AdvProj() {

    const [ popup, setPopup ] = useState(false);
    const [ numPitch, setNumPitch ] = useState(Array.from({length : 10}));


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
                    return <ProjCard />
                })}
            </InfiniteScroll>
            
        </body>
            
    )
}