import People from "../components/People";
import InfiniteScroll from "react-infinite-scroll-component";
import Model from "react-modal";
import { useState } from "react";
import "../components/style.css";

export default function Directory() {

    const [ deletePopUp, setDeletePopup ] = useState(false);
    const [ numPeople, setNumPeople ] = useState(Array.from({length : 10}));

    return (
        <body>
            <div className="page-title">
                <div className="text-wrapper">Directory</div>
            </div>
            <h2 className="flex-title">
                <div>Name</div>
                <div>UFID</div>
                <div>Role</div>
                <div>Team</div>
            </h2>
            <hr />
            <div>

            <InfiniteScroll dataLength={numPeople.length}
                loader={<p>Loading...</p>}
            >
                {numPeople.map((item, index) => {
                    return <div><People /></div>
                })}
                <Model isOpen={deletePopUp}>
                    <button className="closeButton" onClick={()=>setDeletePopup(false)}>X</button>
                </Model>
            </InfiniteScroll>
                {/* 
                    USE INFINITE SCROLL
                    LOAD ALL FACULTY + STUDENTS
                    COMBINE COMBINE FROM DATABASE
                    also add icon to delete them or make them faculty??
                */}

            </div>
        </body>
        
    )
}