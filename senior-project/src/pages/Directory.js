import People from "../components/People";
import InfiniteScroll from "react-infinite-scroll-component";
import Model from "react-modal";
import { useState } from "react";
import "../components/style.css";

export default function Directory() {

    const [ numPeople, setNumPeople ] = useState(Array.from({length : 10}));

    return (
        <body>
            <div className="page-title">
                <div >Directory</div>
            </div>
            <h2 className="flex-title">
                <div className="dir-title1">Name</div>
                <div className="dir-title2">UFID</div>
                <div className="dir-title3">Email</div>
                <div className="dir-title4">Role</div>
                <div className="dir-title5">Team</div>
            </h2>
            <hr />
            <div>

            <InfiniteScroll dataLength={numPeople.length}
                loader={<p>Loading...</p>}
            >
                {numPeople.map((item, index) => {
                    return <div><People /></div>
                    {/*
                        Jonathan: load in all students, faculity, admins?
                    */}
                })}
            </InfiniteScroll>
                {/* 
                    LOAD ALL FACULTY + STUDENTS
                    also add icon to delete them or make them faculty??
                */}

            </div>
        </body>
        
    )
}