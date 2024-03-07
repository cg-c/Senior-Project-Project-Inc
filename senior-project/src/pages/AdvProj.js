import Header from "../components/Header";
import ProjCard from "../components/AdvProjCard";
import AddProj from "../components/AddProj";
import React from "react";
import Model from "react-modal";
import InfiniteScroll from "react-infinite-scroll-component";
import Description from "../components/Description";
import { useState } from "react";
import "../components/style.css"

export default function AdvProj() {

    const [ popup, setPopup ] = useState(false);
    const [ numPitch, setNumPitch ] = useState(Array.from({length : 10}));
    const [ des, setDes ] = useState(false);


    return (
        <body>
            <div className="page-title">
                <div className="text-wrapper">Posted by Advisor</div>
            </div>
            <button className="add" onClick={()=>setPopup(true)}>+</button>
            <Model isOpen={popup}>
                <button className="closeButton" onClick={()=>setPopup(false)}>X</button>
                <AddProj />
            </Model>
            <h2 className="flex-title">
                <div className="adv1-title">Project</div>
                <div className="adv2-title">Slots</div>
                <div className="adv3-title">Description</div>
            </h2>
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