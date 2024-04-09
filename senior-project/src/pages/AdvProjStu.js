import Header from "../components/Header";
import ProjCard from "../components/AdvProjCard";
import AddProj from "../components/AddProj";
import React from "react";
import Model from "react-modal";
import InfiniteScroll from "react-infinite-scroll-component";
import Description from "../components/Description";
import { useState, useEffect } from "react";
import "../components/style.css"

export default function AdvProjStu() {

    const [ popup, setPopup ] = useState(false);
    const [ numPitch, setNumPitch ] = useState(Array.from({length : 10}));
    const [ des, setDes ] = useState(false);
    const [projects, setData] = useState([]);
      
        useEffect(() => {
          fetchData();
        }, []);
      
        const fetchData = async () => {
          try {
            const response = await fetch('/student/projects');
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

    return (
        <body className="signedIn">
            <div className="page-title">
                <div>Posted by Advisor</div>
            </div>
            <h2 className="flex-title">
                <div className="adv1-title">Project</div>
                <div className="adv2-title">Availability</div>
                <div className="adv3-title">Description</div>
            </h2>
            <hr />
            <InfiniteScroll dataLength={numPitch.length}
                loader={<p>Loading...</p>}
            >
                {projects.map(item => (
                <button className="clickDes" onClick={()=>setDes(true)}>

                <div className="flex-container projCard">
                  <div className="advCar1" key={item}>{item.NAME}</div>
                  <div className="advCar2">slot img</div>
                  {/* Use map/array to push the rect divs --> display */}
                  <div className="advCar3"><div className="downArrow" /></div>
                </div>
                </button>   
                ))}
         
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
                  width: '70vw',
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