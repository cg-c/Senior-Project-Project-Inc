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
        <body className="signedIn">
            <button className="add" onClick={()=>setPopup(true)}>+</button>
            <Model isOpen={popup} style={{
                overlay: {
                  position: 'fixed',
                  zIndex: 1020,
                  background: 'rgba(255, 255, 255, 0.75)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                },
                content: {
                  background: 'white',
                  width: '60rem',
                  overflowY: 'auto',
                  position: 'relative'
                }}} >
                <button className="closeButton" onClick={()=>setPopup(false)}>X</button>
                <AddProj />
            </Model>
            <div className="page-title">
                <div>Posted by Advisor</div>
            </div>
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
                    {/*
                        Jonathan: load in all advisor projects 
                    */}
                })}
                <Model isOpen={des} style={{
                overlay: {
                  position: 'fixed',
                  zIndex: 1020,
                  background: 'rgba(255, 255, 255, 0.75)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                },
                content: {
                  background: 'white',
                  width: '60rem',
                  overflowY: 'auto',
                  position: 'relative'
                }}} >
                    <button className="closeButton" onClick={()=>setDes(false)}>X</button>
                    <Description />
                    {/*
                        Jonathan: load in description of selected project 
                    */}
                </Model>
            </InfiniteScroll>
            
        </body>
            
    )
}