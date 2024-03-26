import ProjCard from "../components/StuProjCard";
import AddProj from "../components/AddProj";
import Model from 'react-modal';
import InfiniteScroll from "react-infinite-scroll-component";
import "../components/style.css"
import Description from "../components/Description";
import { useState, useEffect } from "react";

export default function ProjPitch() {

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

    const fetchMorePitch = () => {
        {/* MAKE API CALLS 
        https://youtu.be/NZKUirTtxcg 
        https://www.youtube.com/watch?v=31icbinDtaO-k
        */}
    }

    return (
        <body className="signedIn">
            <button className="add" onClick={()=>setPopup(true)}>+</button>
            <Model isOpen={popup}>
                <button className="closeButton" onClick={()=>setPopup(false)}>X</button>
                <AddProj />
            </Model>
            <div className="page-title">
                <div >Project Pitch</div>
            </div>
            <h2 className="flex-title">
                <div className="pitch-title1">Topic</div>
                <div className="pitch-title2">Slots</div>
                <div className="pitch-title3">Type</div>
                <div className="pitch-title4">Language</div>
            </h2>
            <hr />
            <InfiniteScroll dataLength={projects.length}
                loader={<p>Loading...</p>}
            >
                
                

                <Model isOpen={des}>
                    <button className="closeButton" onClick={()=>setDes(false)}>X</button>
                    <Description />
                    {/*
                        Jonathan: load in the descriptions of projects using Description template
                    */}
                </Model>

            </InfiniteScroll>
        </body>
            
    )
}